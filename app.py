import os
import pandas as pd
import numpy as np
import sqlalchemy
import MySQLdb
import config
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from flask import json

app = Flask(__name__)


#################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:" + config.password + "@localhost/bchi_db"
db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to each table
bchi_data = Base.classes.bchi_data
print(f'tables: {Base.classes.keys()}')

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")


@app.route("/sel_ind")
def names():
    """return select * from bchi_data."""

    # Use Pandas to perform the sql query
    # stmt = db.session.query(bchi_data).statement
    # df = pd.read_sql_query(stmt, db.session.bind)

    # Return a list of the column names (sample names)
    # return jsonify(list(df.columns)[2:])
    return jsonify('test')
    # return ('test')


@app.route('/route')
def route():
    response = app.response_class(
        response=json.dumps('test'),
        status=200,
        mimetype='application/json'
    )
    return response

if __name__ == "__main__":
    app.run()
