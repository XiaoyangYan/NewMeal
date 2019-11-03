import numpy as np
import pandas as pd
import json
import requests
import torch
import os
from sklearn.neighbors import NearestNeighbors



def get_data_from_api():
    # list of diets we need
    diet = ['balanced', 'high-fiber', 'high-protein', 'low-carb', 'low-fat', 
    'low-sodium']
    health = ['keto-friendly', 'paleo', 'vegan']


    # get json from corresponding api and then write it in a separate file
    dir_name = os.path.dirname(__file__)
    for each in diet:
        file_name = os.path.join(dir_name, 'recipes/' + each + '.json')
        recipe_file = open(file_name, 'w', encoding='utf-8')
        recipe_content = requests.get('https://api.edamam.com/search?app_id=97875047&app_key=13a31b794de48e8c01b66e91ef648500&q=Special&diet=' + each + '&from=0&to=100')
        recipe_json = recipe_content.json()
        json.dump(recipe_json, recipe_file, ensure_ascii=False, indent=4)
        recipe_file.close()
    
    for each in health:
        file_name = os.path.join(dir_name, 'recipes/' + each + '.json')
        recipe_file = open(file_name, 'w', encoding='utf-8')
        recipe_content = requests.get('https://api.edamam.com/search?app_id=97875047&app_key=13a31b794de48e8c01b66e91ef648500&q=Special&health=' + each + '&from=0&to=100')
        recipe_json = recipe_content.json()
        json.dump(recipe_json, recipe_file, ensure_ascii=False, indent=4)
        recipe_file.close()
        
    


def parse_data_to_dataframe():
    # read data from recipes dir
    dir_name = os.path.dirname(__file__)
    path = os.path.join(dir_name, 'recipes')
    recipe_list = os.listdir(path)

    # load json data
    dic_list = []
    for each in recipe_list:
        file_name = os.path.join(dir_name, 'recipes/' + each)
        recipe_file = open(file_name, 'r')
        print(file_name)
        json_text = json.load(recipe_file)
        hits = json_text['hits']
        for i in range(len(hits)):
            dic_list.append(hits[i]['recipe'])
    # convert recipes to dataframe
    df = pd.DataFrame(dic_list)
    df = df.drop(['yield', 'source', 'shareAs', 'ingredients', 
    'totalNutrients', 'digest', 'image', 'totalWeight', 'totalDaily', 'label'], axis=1)
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

#get_data_from_api()
df = parse_data_to_dataframe()
print(df)