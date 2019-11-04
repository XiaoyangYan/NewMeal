import flask
import json
import reco
from flask import Flask, request
from flask_cors import CORS


server = flask.Flask(__name__) #创建一个flask对象
CORS(server)
@server.route('/recipe/user', methods=['get','post'])
def get_data_from_frontend():
    r = request.get_json()
    print(r)
    json_text = r
    with open("users.json", 'w', encoding='utf-8') as f:
        json.dump(json_text, f, ensure_ascii=False, indent=4)
    return reco.reco()


server.run(port=7000, debug=True)
