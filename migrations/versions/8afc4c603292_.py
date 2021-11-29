"""empty message

Revision ID: 8afc4c603292
Revises: 
Create Date: 2021-11-25 00:17:13.014284

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8afc4c603292'
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
    sa.Column('donated_by', sa.Integer(), nullable=True),
    sa.Column('donate', sa.Integer(), nullable=True),
    sa.Column('bid_count', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['donate'], ['nonprofit.id'], ),
    sa.ForeignKeyConstraint(['donated_by'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('bid',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('item_id', sa.Integer(), nullable=True),
    sa.Column('starting_price', sa.Integer(), nullable=True),
    sa.Column('final_price', sa.Integer(), nullable=True),
    sa.Column('created_date', sa.String(length=250), nullable=True),
    sa.Column('end_date', sa.String(length=250), nullable=True),
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