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

@app.route("/sel_ind/<ind_cat_text>")
def ind_cat_dd(ind_cat_text):
    # pull back all indicators that are in corrisponding category
    data = pd.read_sql(f"select distinct Indicator from bchi_data where Category like '{ind_cat_text}'", conn)
    dl_Ind = data["Indicator"].unique()
    ind_list = dl_Ind.tolist()
    return jsonify(ind_list)

@app.route("/sel_year/<ind_cat_text>/<ind_text>")
def ind_dd(ind_cat_text, ind_text):
    #pull back all years in corrisponding category/indicator
    data = pd.read_sql(f"select distinct Year from bchi_data where Category like '{ind_cat_text}' and Indicator like '{ind_text}'", conn)
    dl_Ind = data["Year"].unique()
    ind_list = dl_Ind.tolist()
    return jsonify(ind_list)

@app.route("/sel_sex/<ind_cat_text>/<ind_text>/<year_text>")
def year_dd(ind_cat_text, ind_text, year_text):
    #pull back all genders in corrisponding category/indicator/year
    data = pd.read_sql(f"select distinct Sex from bchi_data where Category like '{ind_cat_text}' and Indicator like '{ind_text}' and Year like '{year_text}'", conn)
    dl_Ind = data["Sex"].unique()
    ind_list = dl_Ind.tolist()
    return jsonify(ind_list)

if __name__ == "__main__":
    app.run()
