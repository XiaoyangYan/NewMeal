import numpy as np
import pandas as pd
import json
import requests


def get_data_from_api():
    # get info from api and convert it to a json 
    r = requests.get('https://api.edamam.com/search?app_id=97875047&app_key=13a31b794de48e8c01b66e91ef648500&q=Special&diet=balanced&from=0&to=100')
    json_text = r.json()
    with open("recipes.json", 'w', encoding= 'utf-8') as f:
        json.dump(json_text, f, ensure_ascii=False, indent=4)


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
    print(df)
    return df

if __name__ == "__main__":
    #get_data_from_api()
    parse_data_to_dataframe()