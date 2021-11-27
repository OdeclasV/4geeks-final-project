"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, NonProfit, Item, Bid, Transaction
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

# get all users
@api.route('/profile/user', methods=['GET'])
def get_users():
    users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users))

    response_body = {
        "db_message": "These are all your users"
    }

    return jsonify(response_body, all_users), 200

# create user
@api.route('/signup/user', methods=['POST'])
def create_user():

    body = request.get_json()

    new_user = User(name=body["name"], last_name=body["last_name"], email=body["email"], password=body["password"], nonprofit_friends=body["nonprofit_friends"])
    
    db.session.add(new_user)
    db.session.commit()

    users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users))

    response_body = {
        "db_message": "Contact successfully created. Updated list below."
    }

    return jsonify(response_body, all_users), 200

# get all nonprofits
@api.route('/profile/nonprofit', methods=['GET'])
def get_nonprofits():
    nonprofits = NonProfit.query.all()
    all_nonprofits = list(map(lambda x: x.serialize(), nonprofits))

    response_body = {
        "db_message": "These are all the nonprofits"
    }
    return jsonify(response_body, all_nonprofits), 200

