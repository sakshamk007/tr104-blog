import React from 'react';
import '../App.css';

const Day9 = () => {
  return (
    <div className="px-10">

      <div className="heading">1. Established Database Connection with MySQL Localhost Server</div>
      <div className="description">
        Today, I focused on establishing a connection to a MySQL database hosted on a local server. Below is the code for connecting to MySQL using the <code>mysql2</code> library with connection pooling.
      </div>

      <div className="heading">a. MySQL Database Connection Setup</div>
      <pre>
{`
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Could not connect to database:', err);
        process.exit(1);
    } else {
        console.log('Connected to MySQL database');
        connection.release();
    }
});  

module.exports = pool.promise();
`}
      </pre>

      <div className="description">
        In the code above:
        <ul>
          <li><strong>mysql2 Library:</strong> Used for connecting to MySQL with support for promises and async/await.</li>
          <li><strong>Connection Pooling:</strong> A pool of connections is created to manage database connections more efficiently.</li>
          <li><strong>Environment Variables:</strong> Connection details (host, user, password, database) are stored in environment variables for security and flexibility.</li>
          <li><strong>Error Handling:</strong> In case of failure to connect, an error message is logged, and the application exits.</li>
          <li><strong>Release Connection:</strong> After using the connection, it is released back to the pool to be reused for future queries.</li>
        </ul>
        This setup provides a reliable and efficient connection to the MySQL database, which can be used for querying and managing data in the application.
      </div>

    </div>
  );
};

export default Day9;
