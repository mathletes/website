from flask import Flask, render_template, request, json
#from flask_mysqldb import MySQL
import studentData

app = Flask(__name__)
#mysql = MySQL(app)

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
	return "Hello "+request.form["query"];
	#return ['query'];

@app.route("/signup")
def signUp():
	#conn = MySQL.connect(host="localhost", user="root", passwd="", db="mathletesdb")
	"""Before running this command make sure that flask_mysqldb is installed (sudo pip install flask-mysqldb)
	and its often required dependency mysqlconfig (sudo apt-get install ibmysqlclient-dev).
	Also make sure that the connection strings (i.e host, user, passwd, db) are set properly"""
	"""cur = mysql.connection.cursor()
    cur.execute('''SELECT user, host FROM mysql.user''')
    rv = cur.fetchall()
    return str(rv)"""
	return render_template("pages/signup.html")

@app.route("/signupfeed", methods=["POST"])
def signUpFeed():
	datafilename = "studententry1.json";
	datafile = open(datafilename, "w+");
	datafile.write(json.dumps(request.form));
	imagefile = request.files['userimage'];
	imagefile.save('var/www/uploads/' + request.form['rollno']+imagefile.filename);
	datafile.close();
	return "Success";

@app.route("/announcements")
def announcement():
	return render_template("pages/announcements.html");

if __name__ == "__main__":
    app.run(debug=True);