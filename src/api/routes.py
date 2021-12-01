"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, NonProfit, Item, Bid, Transaction
from api.utils import generate_sitemap, APIException
import datetime

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

    # response_body = {
    #     "db_message": "These are all the nonprofits"
    # }
    # return jsonify(response_body, all_nonprofits), 200


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


##### Item Info ##### 

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

    created_date = datetime.datetime.now().strftime("%x")

    date_1 = datetime.datetime.strptime(created_date, "%m/%d/%y")

    end_date = date_1 + datetime.timedelta(days=7)

    new_item = Item(item_type=body["item_type"], category=body["category"], condition=body["condition"], donated_by=body["donated_by"], donate_to=body['donate_to'], bid_count=body['bid_count'], image=body['image'], original_price=body['original_price'], current_price=body['original_price'], posted_date=created_date, donation_type=body['donation_type'], end_date=end_date)

    db.session.add(new_item)
    db.session.commit()

    new_bid = Bid(item_id=new_item.id, minimun_bid=int(new_item.original_price) + 1, created_date=created_date, num_of_bids=body["num_of_bids"], current_price=new_item.original_price)

    db.session.add(new_bid)
    db.session.commit()

    
    items = Item.query.all()
    all_items = list(map(lambda x: x.serialize(), items))

    return jsonify(all_items), 200

# update item
@api.route('/items/<int:id>', methods=['PUT'])
def update_item(id):
    body = request.get_json()
    item = Item.query.get(id)

    if item is None:
        raise APIException('Item not found', status_code=404)
    
    if "bid_count" in body:
        item.bid_count = body["bid_count"]
    if "category" in body:
        item.category = body["category"]
    if "condition" in body:
        item.condition = body["condition"]
    if "donate" in body:
        item.donate = body["donate"]
    if "donated_by" in body:
        item.donated_by = body["donated_by"]
    if "donation_type" in body:
        item.donation_type = body["donation_type"]
    if "image" in body:
        item.image = body["image"]
    if "name" in body:
        item.name = body["name"]
    if "item_type" in body:
        item.item_type = body["item_type"]
    if "original_price" in body:
        item.original_price = body["original_price"]    
    if "posted_date" in body:
        item.posted_date = body["posted_date"]


    db.session.commit()
    items = Item.query.all()
    all_items = list(map(lambda x: x.serialize(), items))

    return jsonify(all_items), 200


# get bids
@api.route('/bid', methods=['GET'])
def get_bids():

    bids = Bid.query.all()
    all_bids = list(map(lambda x: x.serialize(), bids))

    return jsonify(all_bids), 200


# create bid
# check all bids for highest value
@api.route('/bid', methods=['POST'])
def create_bid():
    body = request.get_json()

    created_date = datetime.datetime.now().strftime("%x")

    new_bid = Bid(created_date=created_date, minimun_bid=body['current_price'], current_price=body["current_price"], item_id=body['item_id'], num_of_bids=body['num_of_bids'])
    
    # item = Item.query.get(body["item_id"]) 
    # item.current_price=body["minimun_bid"]

    # db.session.add(item)

    db.session.add(new_bid)
    db.session.commit()

    # bids = Bid.query.all()
    # all_bids = list(map(lambda x: x.serialize(), bids))

    # return (new_bid.serialize()), 200

    # return list updated
    items = Item.query.all()
    all_items = list(map(lambda x: x.serialize(), items))

    return jsonify(all_items), 200

# update bid
@api.route('/bid/<int:id>', methods=['PUT'])
def update_bid(id):
    body = request.get_json()
    bid = Bid.query.get(id)

    if bid is None:
        raise APIException('Bid not found', status_code=404)
    
    if "item_id" in body:
        bid.item_id = body["item_id"]
    if "bid_amount" in body:
        bid.bid_amount = body["bid_amount"]
    if "num_of_bids" in body:
        bid.num_of_bids = body["num_of_bids"]
    if "current_price" in body:
        bid.current_price = body["current_price"]


    db.session.commit()
    bids = Bid.query.all()
    all_bids = list(map(lambda x: x.serialize(), bids))

    return jsonify(all_bids), 200

# delete user

# delete nonprofit
