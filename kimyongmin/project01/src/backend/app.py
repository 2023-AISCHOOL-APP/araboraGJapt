from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
from sklearn.linear_model import LinearRegression
import pandas as pd


app = Flask(__name__)
CORS(app)

# 모델 로드
with open('src/backend/linear.pkl', 'rb') as model_file:
    loaded_model = pickle.load(model_file)

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.get_json()
    input_data = data.get('input')
    
    # 동명에 해당하는 법정동코드 CSV
    code_data=pd.read_csv('src/backend/codedata.csv')
    code_num=code_data['법정동코드'][code_data['동이름']==input_data]
    # 모델 입력 데이터 생성 (필요한 방식으로)
    X_predata_1 = pd.DataFrame([[84, 202406, 10, 10, 20, 3.5, code_num]]) # 예시: 데이터 형식에 맞게 수정
    X_predata_2 = pd.DataFrame([[84, 202506, 10, 10, 20, 3.5, code_num]])
    X_predata_3 = pd.DataFrame([[84, 202606, 10, 10, 20, 3.5, code_num]])
    # 예측
    prediction1 = loaded_model.predict(X_predata_1)
    prediction2 = loaded_model.predict(X_predata_2)
    prediction3 = loaded_model.predict(X_predata_3)

    return jsonify({'prediction1': prediction1[0],'prediction2': prediction2[0],'prediction3': prediction3[0]})

if __name__ == '__main__':
    app.run()