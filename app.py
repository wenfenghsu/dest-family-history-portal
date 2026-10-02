from flask import Flask, send_from_directory

app = Flask(__name__, static_folder="static")


@app.route("/")
@app.route("/dest_portal")
@app.route("/dest_portal/")
def serve_portal():
    return send_from_directory(app.static_folder, "index.html")


@app.route("/styles.css")
@app.route("/dest_portal/styles.css")
def serve_styles():
    return send_from_directory(app.static_folder, "styles.css")


@app.route("/app.js")
@app.route("/dest_portal/app.js")
def serve_script():
    return send_from_directory(app.static_folder, "app.js")


@app.route("/config.js")
@app.route("/dest_portal/config.js")
def serve_config():
    return send_from_directory(app.static_folder, "config.js")


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8887, debug=False)
