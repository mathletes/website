from flask import Flask, render_template, request
app = Flask(__name__)

@app.route("/")
def main():
    return render_template('index.html')

@app.route("/templates/pages/gallery.html")
def vision():
	return render_template("pages/gallery.html")

@app.route("/templates/pages/full-width.html")
def gallery():
	return render_template("pages/full-width.html")

@app.route("/templates/pages/sidebar-left.html")
def pastEvents():
	return render_template("pages/sidebar-left.html")

@app.route("/templates/pages/sidebar-right.html")
def team():
	return render_template("pages/sidebar-right.html")

@app.route("/templates/pages/basic-grid.html")
def upcomingEvents():
	return render_template("pages/basic-grid.html")

@app.route("/searchQuery", methods=["POST"])
def searchQuery():
	return "Hello"+request.form["query"];
	#return ['query'];


if __name__ == "__main__":
    app.run()
