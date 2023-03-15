from flask import Flask
app = Flask('app')

@app.route('/')
def hello_world():
  return open("head.html").read()

app.run(host='0.0.0.0', port=8080)
