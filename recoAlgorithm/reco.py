import numpy as np
import pandas as pd
import json
import requests

r = requests.get('https://api.edamam.com/search?app_id=97875047&app_key=13a31b794de48e8c01b66e91ef648500&q=Special&diet=balanced&from=0&to=5')
x = r.json()
#df = pd.DataFrame(x['hits'][0]['recipe'])
h = x['hits']
#print(h[0]['recipe'])

dic_list = []
for i in range(5):
    dic_list.append(h[i]['recipe'])

df = pd.DataFrame(dic_list)
print(df)