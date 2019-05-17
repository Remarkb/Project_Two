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

engine = create_engine("mysql://root:" + config.password + "@localhost/bchi_db")
conn = engine.connect()

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/sel_ind")
def names():
    # data = engine.execute("SELECT * FROM bchi_data")
    data = pd.read_sql("select distinct Indicator from bchi_data", conn)
    dl_Ind = data["Indicator"].unique()
    ind_list = dl_Ind.tolist()
    print(ind_list)
    return jsonify(ind_list)

if __name__ == "__main__":
    app.run()
