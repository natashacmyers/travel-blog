import os
import sys
from flask import (
    Flask, flash, render_template,
    redirect, request, jsonify, json, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env


app = Flask(__name__)


app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route("/")
@app.route("/map")
def map():
    return render_template("map.html")


@app.route("/all_blogs", methods=["GET", "POST"])
def all_blogs():
    blogs = mongo.db.blogs.find().sort("blog_date", 1)
    if request.method == "POST":
        search_results = mongo.db.blogs.find(
            {"country_name": request.form.get("search")})
        return render_template(
            "search_blogs.html", search_results=search_results, filename='blog_image')

    return render_template(
        "all_blogs.html", blogs=blogs, filename='blog_image')


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        # check if the username already exists
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})
        # if username already exists then the user must try another username

        if existing_user:
            flash("Username already exists. Please try again.")
            return redirect(url_for("register"))

        # if the username does not exist we can register the user

        register = {
            "username": request.form.get("username").lower(),
            "first_name": request.form.get("first_name"),
            "last_name": request.form.get("last_name"),
            "password": generate_password_hash(
                request.form.get("password").lower())
        }
        # add register to mongo db users
        mongo.db.users.insert_one(register)

        # add the user to the session cookie
        session["username"] = request.form.get("username").lower()

        session["first_name"] = request.form.get("first_name")
        flash("Registration Successful!")
        return redirect(url_for("profile", username=session["username"]))

    return render_template("register.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # check if the username already exists
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            # make sure the hashed password matches the user input password
            if check_password_hash(
                    existing_user["password"], request.form.get("password")):
                    session["username"] = request.form.get("username").lower()
                    session["first_name"] = existing_user["first_name"]
                    flash("Welcome {}!".format(existing_user["first_name"]))
                    return redirect(url_for(
                        "profile", username=session["username"]))
            else:
                flash("Incorrect Username or Password")
                return redirect(url_for("login"))

        else:
            flash("Incorrect Username or Password")
            return redirect(url_for("login"))

    return render_template("login.html")


@app.route("/profile/<username>", methods=["GET", "POST"])
def profile(username):
    # get the username and firstname from the database
    first_name = mongo.db.users.find_one(
        {"username": session["username"]})["first_name"]
    userblogs = mongo.db.blogs.find({"username": session["username"]})
    if session["username"]:
        return render_template("profile.html",
            first_name=first_name, userblogs=userblogs, filename='blog_image')
    else:
        return redirect(url_for('login'))


@app.route("/logout", methods=["GET", "POST"])
def logout():
    flash("You have been logged out")
    session.pop("username")
    session.pop("first_name")
    return redirect(url_for("login"))


@app.route("/new_blog", methods=["GET", "POST"])
def new_blog():
    countries = mongo.db.countries.find().sort("country_name", 1)
    if request.method == "POST":
        blog_image = request.files['blog_image']
        mongo.save_file(blog_image.filename, blog_image)
        blog = {
             "blog_name": request.form.get("blog_name"),
             "country_name": request.form.get("blog_country"),
             "blog_description": request.form.get("blog_description"),
             "blog_image": blog_image.filename,
             "username": session["username"],
             "blog_date": request.form.get("blog_date")
        }
        mongo.db.blogs.insert_one(blog)
        flash("Blog Successfully Added")
        return redirect(url_for(
                        "profile", username=session["username"]))

    return render_template("new_blog.html", countries=countries)


@app.route("/edit_blog/<blog_id>", methods=["GET", "POST"])
def edit_blog(blog_id):
    if request.method == "POST":
        blog_image = request.files['blog_image']
        mongo.save_file(blog_image.filename, blog_image)
        if blog_image.filename:
            updated_blog = {
                "blog_name": request.form.get("blog_name"),
                "country_name": request.form.get("blog_country"),
                "blog_description": request.form.get("blog_description"),
                "blog_image": blog_image.filename,
                "username": session["username"],
                "blog_date": request.form.get("blog_date")
            }
            mongo.db.blogs.update({"_id": ObjectId(blog_id)}, updated_blog)
            flash("Blog Successfully Updated")
            return redirect(url_for(
                        "profile", username=session["username"]))
        else:
            mongo.db.blogs.update({"_id": ObjectId(blog_id)},
            {"$set":
                {
                    "blog_name": request.form.get("blog_name"),
                    "country_name": request.form.get("blog_country"),
                    "blog_description": request.form.get("blog_description"),
                    "username": session["username"],
                    "blog_date": request.form.get("blog_date")
                }
            })
            flash("Blog Successfully Updated")
            return redirect(url_for(
                        "profile", username=session["username"]))
    blog = mongo.db.blogs.find_one({"_id": ObjectId(blog_id)})
    countries = mongo.db.countries.find().sort("country_name", 1)
    return render_template("edit_blog.html", blog=blog, countries=countries)


@app.route("/delete_blog/<blog_id>")
def delete_blog(blog_id):
    mongo.db.blogs.remove({"_id": ObjectId(blog_id)})
    flash("Blog Successfully Deleted")
    return redirect(url_for(
                        "profile", username=session["username"]))


@app.route("/file/<filename>")
def file(filename):
    return mongo.send_file(filename)


@app.route("/map_search/<country_name>", methods=["GET", "POST"])
def map_search(country_name):
    search_results = mongo.db.blogs.find(
            {"country_name": country_name})

    return render_template(
        "search_map.html", search_results=search_results, filename='blog_image')


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=False)