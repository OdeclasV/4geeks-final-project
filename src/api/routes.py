"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, NonProfit, Item, Bid, Transaction
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

##### User info ##### 

# get all users
@api.route('/user', methods=['GET'])
def get_users():
    users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users))

    return jsonify(all_users), 200

# create user
@api.route('/user', methods=['POST'])
def create_user():

    body = request.get_json()

    new_user = User(name=body["name"], last_name=body["last_name"], email=body["email"], password=body["password"], nonprofit_friends=body["nonprofit_friends"])
    
    db.session.add(new_user)
    db.session.commit()

    users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users))

    return jsonify(all_users), 200

# get specific user
@api.route('/user/<int:id>', methods=['GET'])
def one_user(id):

    users = User.query.all()
    specific_user = User.query.filter_by(id = id).first()
    print(specific_user.serialize())

    return jsonify(specific_user.serialize()), 200


# update user
@api.route('/user/<int:id>', methods=['PUT'])
def update_user(id):
    body = request.get_json()
    user = User.query.get(id)

    if user is None:
        raise APIException('User not found', status_code=404)
    
    if "name" in body:
        user.name = body["name"]
    if "last_name" in body:
        user.last_name = body["last_name"]
    if "email" in body:
        user.email = body["email"]
    if "password" in body:
        user.password = body["password"]
    if "nonprofit_friends" in body:
        user.nonprofit_friends = body["nonprofit_friends"]
    
    db.session.commit()
    users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users))

    return jsonify(all_users), 200

##### Nonprofit Info ##### 

# get all nonprofits
@api.route('/nonprofit', methods=['GET'])
def get_nonprofits():

    nonprofits = NonProfit.query.all()
    all_nonprofits = list(map(lambda x: x.serialize(), nonprofits))


    return jsonify(all_nonprofits), 200

# create nonprofit
@api.route('/nonprofit', methods=['POST'])
def create_nonprofit():

    body = request.get_json()

    new_nonprofit = NonProfit(name=body["name"], email=body["email"], password=body["password"], address=body['address'], description=body['description'], nonprofit_logo=body['nonprofit_logo'], wish_list_items=body['wish_list_items'], items_received=body["items_received"], total_profits=body["total_profits"])
    
    db.session.add(new_nonprofit)
    db.session.commit()

    nonprofits = NonProfit.query.all()
    all_nonprofits = list(map(lambda x: x.serialize(), nonprofits))

    return jsonify(all_nonprofits), 200

# get specific nonprofit
@api.route('/nonprofit/<int:id>', methods=['GET'])
def one_nonprofit(id):

    nonprofits = NonProfit.query.all()
    all_nonprofits = list(map(lambda x: x.serialize(), nonprofits))

    nonprofit= list(filter(lambda nonprofit: nonprofit['id'] == id, all_nonprofits))

    if nonprofit is None:
        raise APIException('Nonprofit not found', status_code=404)

    return jsonify(nonprofit), 200

# update nonprofit
# @api.route('/nonprofit/<int:id>', methods=['PUT'])
# def update_nonprofit(id):
#     body = request.get_json()
#     user = User.query.get(id)

#     if user is None:
#         raise APIException('User not found', status_code=404)
    
#     if "name" in body:
#         user.name = body["name"]
#     if "last_name" in body:
#         user.last_name = body["last_name"]
#     if "email" in body:
#         user.email = body["email"]
#     if "password" in body:
#         user.password = body["password"]
#     if "nonprofit_friends" in body:
#         user.nonprofit_friends = body["nonprofit_friends"]
    
#     db.session.commit()
#     users = User.query.all()
#     all_users = list(map(lambda x: x.serialize(), users))

#     return jsonify(all_users), 200

# get all items
@api.route('/items', methods=['GET'])
def get_items():

    items = Item.query.all()
    all_items = list(map(lambda x: x.serialize(), items))

    return jsonify(all_items), 200

# create item
@api.route('/items', methods=['POST'])
def create_item():
    body = request.get_json()

    new_item = Item(item_type=body["item_type"], category=body["category"], condition=body["condition"], donated_by=body["donated_by"], donate=body['donate'], bid_count=body['bid_count'])

    db.session.add(new_item)
    db.session.commit()
    
    
    items = Item.query.all()
    all_items = list(map(lambda x: x.serialize(), items))

    return jsonify(all_items), 200

# get all bids

# delete user

# delete nonprofit