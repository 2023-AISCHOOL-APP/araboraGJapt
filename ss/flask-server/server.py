from flask import Flask # Flask

app = Flask(__name__)

@app.route('/users')
def users():
    print("Test1231236")
	# users 데이터를 Json 형식으로 반환한다
    users = {"members": [{ "id" : 1, "name" : "yerin" },
    					{ "id" : 2, "name" : "dalkong" },
                        { "id" : 3, "name" : "sol" }]} 
    return users


@app.route('/')
def users2():
	# users 데이터를 Json 형식으로 반환한다
    print('Test123')

    return "123"
           

if __name__ == "__main__":
    app.run(debug = True)
    