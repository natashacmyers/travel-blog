import os
import pymongo
if os.path.exists("env.py"):
    import env

# mongo connection string
MONGO_URI = os.environ.get("MONGO_URI")
DATABASE = "travelBlogDB"
COLLECTION = "countries"


def mongo_connect(url):
    try:
        conn = pymongo.MongoClient(url)
        print("Mongo is connected")
        return conn
    except pymongo.errors.ConnectionFailure as e:
        print("Could not connect to MongoDB: %s") % e


conn = mongo_connect(MONGO_URI)

coll = conn[DATABASE][COLLECTION]

documents = coll.find()

for doc in documents:
    print(doc)

