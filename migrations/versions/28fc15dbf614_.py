"""empty message

Revision ID: 28fc15dbf614
Revises: 8afc4c603292
Create Date: 2021-11-25 01:50:36.118005

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '28fc15dbf614'
down_revision = '8afc4c603292'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('item', sa.Column('image', sa.String(length=250), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('item', 'image')
    # ### end Alembic commands ###
