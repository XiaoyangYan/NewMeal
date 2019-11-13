import numpy as np
import pandas as pd
import json
import requests
import os

from sklearn.metrics.pairwise import cosine_similarity
from sklearn.neighbors import NearestNeighbors



def get_data_from_api():
    # list of diets we need
    diet = ['balanced', 'high-fiber', 'high-protein', 'low-carb', 'low-fat', 
    'low-sodium']
    health = ['keto-friendly', 'paleo', 'vegan']

    headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.90 Safari/537.36'}
    # get json from corresponding api and then write it in a separate file
    dir_name = os.path.dirname(__file__)
    for each in diet:
        for i in range(2):
            frm = i * 100
            to = (i + 1) * 100 - 1
            file_name = os.path.join(dir_name, 'recipes/' + each + '_' + str(i) + '.json')
            recipe_file = open(file_name, 'w', encoding='utf-8')
            url = 'https://api.edamam.com/search?app_id=97875047&app_key=13a31b794de48e8c01b66e91ef648500&q=Special&diet=' + each + '&from=' + str(frm) + '&to=' + str(to)
            recipe_content = requests.get(url = url, headers=headers)
            recipe_json = recipe_content.json()
            json.dump(recipe_json, recipe_file, ensure_ascii=False, indent=4)
    for each in health:
        for i in range(2):
            frm = i * 100
            to = (i+1) * 100 - 1
            file_name = os.path.join(dir_name, 'recipes/' + each + '_' + str(i) + '.json')
            recipe_file = open(file_name, 'w', encoding='utf-8')
            url = 'https://api.edamam.com/search?app_id=97875047&app_key=13a31b794de48e8c01b66e91ef648500&q=Special&health=' + each + '&from='+str(frm)+'&to='+str(to)
            recipe_content = requests.get(url = url, headers=headers)
            recipe_json = recipe_content.json()
            json.dump(recipe_json, recipe_file, ensure_ascii=False, indent=4)


def parse_api_data():
    # read data from recipes dir
    dir_name = os.path.dirname(__file__)
    path = os.path.join(dir_name, 'recipes')
    recipe_list = os.listdir(path)

    # load json data
    dic_list = []
    for each in recipe_list:
        file_name = os.path.join(dir_name, 'recipes/' + each)
        recipe_file = open(file_name, 'r')
        json_text = json.load(recipe_file)
        hits = json_text['hits']
        for i in range(len(hits)):
            dic_list.append(hits[i]['recipe'])
    # convert recipes to dataframe and add user label
    df = pd.DataFrame(dic_list)
    df['user'] = 0
    return df

def parse_user_data():
    # load json data
    user_file = open('users.json', 'r')
    json_text = json.load(user_file)
    # convert json to dataframe and add user label
    df = pd.DataFrame(json_text)
    df['user'] = 1
    return df


def recoByLabels(df_data, recipe):
    #preprocess data
    df_dish = df_data.dishType.str.get_dummies()
    df_cuisine = df_data.cuisineType.str.get_dummies()
    df_health = df_data.healthLabels.str.get_dummies(',')
    data = df_dish.join(df_cuisine)
    data = data.join(df_health)
    train = data.to_numpy()[:recipe.shape[0]]
    test = data.to_numpy()[recipe.shape[0]:]
    test_size = test.shape[0]

    # use knn to find similarity and return nearest neighbours
    knn = NearestNeighbors(n_neighbors=4, algorithm='ball_tree', metric='manhattan')
    knn.fit(train)
    neighbours = knn.kneighbors(test, return_distance=False)
    
    # extract result
    neighbours = neighbours.reshape((-1, test_size*4))[0]
    uri_list = []
    for each in neighbours:
        uri_list.append(recipe.iloc[each]['uri'])
    return uri_list

def reco():
    #get_data_from_api()
    recipe_df = parse_api_data()
    user_df = parse_user_data()
    df = pd.concat([recipe_df, user_df], ignore_index = True)
    df = df[['cuisineType', 'dishType', 'healthLabels']]
    return recoByLabels(df, recipe_df)

if __name__ == "__main__":
    print(reco())
    



