"""empty message

Revision ID: e8c302433881
Revises: 
Create Date: 2021-12-02 01:55:42.480548

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e8c302433881'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('nonprofit',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=250), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=True),
    sa.Column('password', sa.String(length=80), nullable=True),
    sa.Column('address', sa.String(length=250), nullable=True),
    sa.Column('description', sa.String(length=250), nullable=True),
    sa.Column('nonprofit_logo', sa.String(length=250), nullable=True),
    sa.Column('wish_list_items', sa.String(length=250), nullable=True),
    sa.Column('items_received', sa.String(length=250), nullable=True),
    sa.Column('total_profits', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=True),
    sa.Column('password', sa.String(length=80), nullable=True),
    sa.Column('name', sa.String(length=250), nullable=True),
    sa.Column('last_name', sa.String(length=250), nullable=True),
    sa.Column('nonprofit_friends', sa.String(length=120), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('item',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('item_type', sa.String(length=250), nullable=True),
    sa.Column('category', sa.String(length=250), nullable=True),
    sa.Column('condition', sa.String(length=250), nullable=True),
    sa.Column('original_price', sa.Integer(), nullable=True),
    sa.Column('current_price', sa.Integer(), nullable=True),
    sa.Column('image', sa.String(length=250), nullable=True),
    sa.Column('name', sa.String(length=100), nullable=True),
    sa.Column('donation_type', sa.String(), nullable=True),
    sa.Column('donated_by', sa.Integer(), nullable=True),
    sa.Column('donate_to', sa.Integer(), nullable=True),
    sa.Column('bid_count', sa.Integer(), nullable=True),
    sa.Column('posted_date', sa.String(length=250), nullable=True),
    sa.Column('end_date', sa.String(length=250), nullable=True),
    sa.ForeignKeyConstraint(['donate_to'], ['nonprofit.id'], ),
    sa.ForeignKeyConstraint(['donated_by'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('bid',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('item_id', sa.Integer(), nullable=True),
    sa.Column('minimun_bid', sa.Integer(), nullable=True),
    sa.Column('created_date', sa.String(length=250), nullable=True),
    sa.Column('num_of_bids', sa.String(length=250), nullable=True),
    sa.Column('current_price', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['item_id'], ['item.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('transaction',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('item_id', sa.Integer(), nullable=True),
    sa.Column('price', sa.Integer(), nullable=True),
    sa.Column('date', sa.String(length=250), nullable=True),
    sa.Column('transaction_type', sa.String(length=250), nullable=True),
    sa.Column('nonprofit_id', sa.Integer(), nullable=True),
    sa.Column('donor', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['donor'], ['user.id'], ),
    sa.ForeignKeyConstraint(['item_id'], ['item.id'], ),
    sa.ForeignKeyConstraint(['nonprofit_id'], ['nonprofit.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('transaction')
    op.drop_table('bid')
    op.drop_table('item')
    op.drop_table('user')
    op.drop_table('nonprofit')
    # ### end Alembic commands ###
