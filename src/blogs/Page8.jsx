import React from 'react';
import '../App.css';

const Day8 = () => {
  return (
    <div className="px-10 ">

      <div className="heading">1. Created Express.js Server and Integrated Tailwind CSS, EJS, EJS-Express-Layouts</div>
      <div className="description">
        Today, I set up an Express.js server and integrated several technologies to build a dynamic web application:
        <ul>
          <li><strong>Tailwind CSS:</strong> A utility-first CSS framework that I used to style the frontend of the app.</li>
          <li><strong>EJS:</strong> A templating engine used to render dynamic views in Express.</li>
          <li><strong>EJS-Express-Layouts:</strong> A middleware to organize EJS templates and layouts, enabling easy reuse of HTML structure across pages.</li>
        </ul>
        Below is the code for setting up the Express.js server with these integrations:
      </div>

      <div className="heading">a. Express.js Server Setup with EJS and Tailwind</div>
      <pre>
{`
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const debugStartUp = require('debug')('app:startup');
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();
require('module-alias/register');
require('@startup/errorLog.start')(process);

const app = express();
const port = process.env.PORT;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'app', 'views'));
app.use(expressLayouts);
app.set('layout', 'web/layouts/auth', 'web/layouts/landing', 'web/pages/postbid', 'web/pages/checkbid', 'web/pages/startbid', 'web/pages/postedbids', 
'web/pages/participatedbids', 'web/pages/bid', 'web/pages/postedstatus', 'web/pages/participatedstatus', 'web/pages/profile');

require('@routes/web.routes')(app);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  debugStartUp(\`Node app Started\`);
  console.log(\`Node app listening on port http://localhost:\${port}\`);
});
`}
      </pre>

      <div className="description">
        In the code above:
        <ul>
          <li><strong>Express Setup:</strong> We initialize the Express app, set up body and cookie parsers, and use middleware for static files.</li>
          <li><strong>EJS Setup:</strong> We configure EJS as the view engine and set the path to the views directory. EJS is used for rendering dynamic HTML content.</li>
          <li><strong>Layouts:</strong> The <code>express-ejs-layouts</code> middleware is used to define and reuse layout templates across multiple pages.</li>
          <li><strong>Routes:</strong> Routes are dynamically loaded through the <code>web.routes</code> file, allowing easy management of all endpoint handling.</li>
          <li><strong>Error Handling:</strong> A global error handler is added to catch and log errors in the app.</li>
        </ul>
        This setup enables efficient handling of static assets, dynamic pages, and consistent layouts throughout the application.
      </div>

    </div>
  );
};

export default Day8;
