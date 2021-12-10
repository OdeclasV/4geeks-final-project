from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=False, nullable=True)
    password = db.Column(db.String(80), unique=False, nullable=True)
    name = db.Column(db.String(250), unique=False, nullable=True)
    last_name = db.Column(db.String(250), unique=False, nullable=True)
    nonprofit_friends = db.Column(db.Integer, db.ForeignKey('nonprofit.id'), nullable =True)
    donations = db.relationship('Item', backref='user', lazy=True)
    transactions = db.relationship('Transaction', backref='user', lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "donations": list(map(lambda donation: donation.serialize(), self.donations)),
            "nonprofit_friends": self.nonprofit_friends
        }

class NonProfit(db.Model):
    __tablename__ = "nonprofit"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), unique=False, nullable=True)
    email = db.Column(db.String(120), unique=False, nullable=True)
    password = db.Column(db.String(80), unique=False, nullable=True)
    address = db.Column(db.String(250), unique=False, nullable=True)
    description = db.Column(db.String(250), unique=False, nullable=True)
    nonprofit_logo = db.Column(db.String(250),unique=False, nullable=True )
    wish_list_items = db.Column(db.String(250), unique=False, nullable=True)
    items_received = db.relationship('Item', backref='nonprofit', lazy=True)
    total_profits = db.Column(db.Integer, unique=False, nullable=True)
    #donated_to = db.relationship('Item', backref='nonprofit', lazy=True)
    transactions = db.relationship('Transaction', backref='nonprofit', lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "address": self.address,
            "description": self.description,
            "nonprofit_logo": self.nonprofit_logo,
            "wish_list_items": self.wish_list_items,
            "items_received": list(map(lambda item: item.serialize(), self.items_received)),
            "total_profits": self.total_profits
        }

class Item(db.Model):
    __tablename__ = "item"
    id = db.Column(db.Integer, primary_key=True)
    item_type = db.Column(db.String(250), unique=False, nullable=True)
    category = db.Column(db.String(250), unique=False, nullable=True)
    condition = db.Column(db.String(250), unique=False, nullable=True)
    original_price = db.Column(db.Integer, unique=False, nullable=True)
    current_price = db.Column(db.Integer, unique=False, nullable=True)
    image = db.Column(db.String(250),unique=False, nullable=True )
    item_name = db.Column(db.String(100), unique=False, nullable=True)
    item_description = db.Column(db.String(100), unique=False, nullable=True)
    donation_type = db.Column(db.String(250), unique=False, nullable=True)
    donated_by = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    donate_to = db.Column(db.Integer, db.ForeignKey('nonprofit.id'), nullable =True)
    bid_count = db.Column(db.Integer,unique=False, nullable=True)
    posted_date = db.Column(db.String(250), unique=False, nullable=True)
    end_date = db.Column(db.String(250), unique=False, nullable=True)
    transactions = db.relationship('Transaction', backref='item', lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "item_type": self.item_type,
            "category": self.category,
            "condition": self.condition,
            "original_price": self.original_price,
            "current_price": self.current_price,
            "image": self.image,
            "item_name": self.item_name,
            "item_description": self.item_description,
            "donation_type": self.donation_type,
            "donated_by": self.donated_by,
            "donate_to": self.donate_to,
            "bid_count": self.bid_count,
            "posted_date": self.posted_date,
            "end_date": self.end_date
        }

class Bid(db.Model):
    __tablename__ = "bid"
    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey('item.id'), nullable=True)
    minimun_bid = db.Column(db.Integer, unique=False, nullable=True) # current_price + 1
    created_date = db.Column(db.String(250), unique=False, nullable=True)
    num_of_bids = db.Column(db.String(250), unique=False, nullable=True)
    current_price = db.Column(db.Integer, unique=False, nullable=True)  # items' current price 
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)


    def serialize(self):
        return {
            "id": self.id,
            "item_id": self.item_id,
            "minimun_bid": self.minimun_bid,
            "created_date": self.created_date,
            "num_of_bids": self.num_of_bids,
            "current_price": self.current_price,
            "user_id": self.user_id
        }

class Transaction(db.Model):
    __tablename__ = "transaction"
    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey('item.id'), nullable=True)
    price = db.Column(db.Integer, unique=False, nullable=True)
    date = db.Column(db.String(250), unique=False, nullable=True)
    transaction_type = db.Column(db.String(250), unique=False, nullable=True)
    nonprofit_id = db.Column(db.Integer, db.ForeignKey('nonprofit.id'), nullable=True)
    donor = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)


    def serialize(self):
        return {
            "id": self.id,
            "item_id": self.item_id,
            "price": self.price,
            "date": self.date,
            "transaction_type": self.transaction_type,
            "nonprofit_id": self.nonprofit_id,
            "donor": self.donor
        }
