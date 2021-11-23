from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=False, nullable=True)
    password = db.Column(db.String(80), unique=False, nullable=True)
    name = db.Column(db.String(250), unique=False, nullable=True)
    last_name = db.Column(db.String(250), unique=False, nullable=True)
    nonprofit_friends = db.Column(db.String(120), unique=False, nullable=True)
    donations = db.relationship('Item', backref='user')
    transactions = db.relationship('Transaction', backref='user')

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "nonprofit_friends": self.nonprofit_friends
        }

class NonProfit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), unique=False, nullable=True)
    email = db.Column(db.String(120), unique=False, nullable=True)
    password = db.Column(db.String(80), unique=False, nullable=True)
    address = db.Column(db.String(250), unique=False, nullable=True)
    description = db.Column(db.String(250), unique=False, nullable=True)
    nonprofit_logo = db.Column(db.Sting(250),unique=False, nullable=True )
    wish_list_items = db.Column(db.String(250), unique=False, nullable=True)
    items_received = db.Column(db.String(250), unique=False, nullable=True)
    total_profits = db.Column(db.Integer, unique=False, nullable=True)
    donations = db.relationship('Item', backref='nonprofit')
    transactions = db.relationship('Transaction', backref='nonprofit')

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "description": self.description,
            "nonprofit_logo": self.nonprofit_logo,
            "wish_list_items": self.wish_list_items,
            "items_received": self.items_received,
            "total_profits": self.total_profits
        }


class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    item_type = db.Column(db.String(250), unique=False, nullable=True)
    category = db.Column(db.String(250), unique=False, nullable=True)
    condition = db.Column(db.String(250), unique=False, nullable=True)
    donated_by = db.Column(db.Integer,db.ForeignKey('user.id'), nullable=True)
    donated_to = db.Column(db.Integer,db.ForeignKey('nonprofit.id'), nullable=True)
    bid_count = db.Column(db.Integer,unique=False, nullable=True)
    bids = db.relationship('Bid', backref='item')
    transactions = db.relationship('Transaction', backref='item')

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "item_type": self.item_type,
            "category": self.category,
            "condition": self.condition,
            "donated_by": self.donated_by,
            "donated_to": self.donated_to,
            "bid_count": self.bid_count
        }

class Bid(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    item = db.Column(db.Integer, db.ForeignKey('item.id'), nullable=True)
    starting_price = db.Column(db.Integer, unique=False, nullable=True)
    final_price = db.Column(db.Integer, unique=False, nullable=True)
    created_date = db.Column(db.String(250), unique=False, nullable=True)
    end_date = db.Column(db.String(250), unique=False, nullable=True)

    def __repr__(self):
        return '<User %r>' % self.end_date

    def serialize(self):
        return {
            "id": self.id,
            "item": self.item,
            "starting_price": self.starting_price,
            "final_price": self.final_price,
            "created_price": self.created_date,
            "end_date": self.end_date
        }

class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    item = db.Column(db.Integer, db.ForeignKey('item.id'), nullable=True)
    price = db.Column(db.Integer, unique=False, nullable=True)
    date = db.Column(db.String(250), unique=False, nullable=True)
    type = db.Column(db.String(250), unique=False, nullable=True)
    nonprofit = db.Column(db.Integer, db.ForeignKey('nonprofit.id'), nullable=True)
    donor = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)

    def __repr__(self):
        return '<User %r>' % self.end_date

    def serialize(self):
        return {
            "id": self.id,
            "item": self.item,
            "price": self.price,
            "date": self.date,
            "type": self.type,
            "nonprofit": self.nonprofit,
            "donor": self.donor
        }

