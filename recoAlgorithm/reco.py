import numpy as np
import pandas as pd
import json
import requests
import torch
import flask
from flask import request
from flask_cors import CORS
from sklearn.neighbors import NearestNeighbors

server = flask.Flask(_name_)
CORS(server)
@server.route('/user', methods=['get', 'post'])

def get_data_from_api():
    # get info from api and convert it to a json 
    r = requests.get('https://api.edamam.com/search?app_id=97875047&app_key=13a31b794de48e8c01b66e91ef648500&q=Special&diet=balanced&from=0&to=100')
    json_text = r.json()
    with open("recipes.json", 'w', encoding= 'utf-8') as f:
        json.dump(json_text, f, ensure_ascii=False, indent=4)

def get_data_from_frontend():
            r = request.get('http://localhost:4200/user/favorite')
            json_text = r.json()
            with open("recipes.json", 'w', encoding='utf-8') as f:
                json.dump(json_text, f, ensure_ascii=False, indent=4)
            return parse_data_to_dataframe()

def parse_data_to_dataframe():
    with open('recipes.json', 'r') as f:
        json_text = json.load(f)

    # extract recipes from json
    hits = json_text['hits']
    dic_list = []
    for i in range(len(hits)):
        dic_list.append(hits[i]['recipe'])

    # convert recipes to dataframe
    df = pd.DataFrame(dic_list)
    df = df.drop(['uri','url','yield', 'source', 'shareAs', 'ingredients', 
    'totalNutrients', 'digest', 'image', 'totalWeight', 'totalDaily'], axis=1)
    return df

def split_data(df_data):
    data = df_data.to_numpy()
    size = data.shape[0]
    train_size = (int)(size * 0.7)
    train = data[:train_size]
    test = data[train_size:]
    print(train.shape)
    print(test.shape)

def knn(X):
    nbrs = NearestNeighbors(n_neighbors=10, algorithm='ball_tree').fit(X)

def dl():
    pass



if __name__ == "__main__":
    #get_data_from_api()
    df = parse_data_to_dataframe()
    print(df.columns)
    #split_data(df)
server.run(port=7000, debug=True)
    