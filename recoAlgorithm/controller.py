import flask
import json
import reco
from flask import Flask, request, jsonify
from flask_cors import CORS


server = flask.Flask(__name__) #创建一个flask对象
CORS(server)
@server.route('/recipe/user', methods=['get','post'])
def get_data_from_frontend():
    r = request.get_json()
    json_text = r
    with open("users.json", 'w', encoding='utf-8') as f:
        json.dump(json_text, f, ensure_ascii=False, indent=4)
    print(jsonify(reco.reco()))
    return jsonify(reco.reco())


server.run(port=7000, debug=True)
