import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
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


@app.route("/all_blogs")
def all_blogs():
    blogs = mongo.db.blogs.find()
    return render_template("blogs.html", blogs=blogs)


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

        session["firstname"] = request.form.get("first_name")
        flash("Registration Successful!")

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
                    session["firstname"] = existing_user["first_name"]
                    flash("Welcome {}!".format(existing_user["first_name"]))
            else:
                flash("Incorrect Username or Password")
                return redirect(url_for("login"))

        else:
            flash("Incorrect Username or Password")
            return redirect(url_for("login"))

    return render_template("login.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)