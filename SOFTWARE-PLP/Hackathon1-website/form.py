import mysql.connector

conn = mysql.connector.connect(
    host="localhost",
    database="sampledb1",
    user="root",  
    password="Muthingu@1"  # Add your password
)

# Create a cursor object
cursor = conn.cursor()

# Execute the SQL statement to create the table
cursor.execute("""
    CREATE TABLE FeedBacks(
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50),
        email VARCHAR(50),
        message VARCHAR(200)
    )
""")

# Commit the changes
conn.commit()

print("table created successfully")

# Close the connection
cursor.close()
conn.close()