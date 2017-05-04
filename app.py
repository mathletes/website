from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def main():
    return render_template('index.html')

@app.route("/templates/pages/gallery.html")
def something():
	return render_template("pages/gallery.html")

if __name__ == "__main__":
    app.run()
