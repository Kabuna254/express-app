import cgi
import mysql.connector
from mysql.connector import Error

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="Muthingu@1",
        database="sampledb1"
    )

# Get form data
form = cgi.FieldStorage()
name = form.getvalue("name")
email = form.getvalue("email")
message = form.getvalue("message")

try:
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute("INSERT INTO feedbacks (name, email, message) VALUES (%s, %s, %s)", (name, email, message))
    connection.commit()
    cursor.close()
    connection.close()

    # Output confirmation to user
    print("Content-type: text/html\n")
    print("<html><body>")
    print("<h1>Message sent successfully!</h1>")
    print("</body></html>")
except Error as e:
    print("Content-type: text/html\n")
    print("<html><body>")
    print(f"<h1>Error: {e}</h1>")
    print("</body></html>")
