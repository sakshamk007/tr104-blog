import React from 'react';
import '../App.css';

const Day6 = () => {
  return (
    <div className="px-10">

      <div className="heading">1. Project Discussion - Online Auction Platform</div>
      <div className="description">
        Today, I worked on the ideation for an Online Auction Platform. 
        I designed user roles:
        <ul>
          <li><strong>Job Creator:</strong> A user who posts job opportunities for bidding.</li>
          <li><strong>Bidder:</strong> A user who places bids on posted jobs.</li>
        </ul>
        I also created the logic for handling both user roles, ensuring that the flow between job creators and bidders is smooth.
      </div>

      <div className="heading">2. Creating Routes with Router() in Express.js</div>
      <div className="description">
        I learned how to define and handle different routes in Express using <code>express.Router()</code>. Below are the examples:
      </div>

      <div className="heading">a. app.js</div>
      <div className="description">
        In the <code>app.js</code> file, we set up the Express app and imported various route handlers. The <code>app.use()</code> method is used to bind routes for different paths.
      </div>
      <pre>
{`
const express = require('express')

const homeRoute = require('./app/routes/home')
const aboutRoute = require('./app/routes/about')
const loginRoute = require('./app/routes/login')

const app = express()
const port = 3000

app.use('/', homeRoute)
app.use('/', aboutRoute)
app.use('/', loginRoute)

app.listen(port, ()=> {
    console.log(\`Listening app on port http://localhost:\${port}\`)
})
`}
      </pre>

      <div className="heading">b. routes/home.js</div>
      <div className="description">
        The <code>home.js</code> route is configured to handle requests to the root URL <code>/</code>. When a user accesses the home page, a simple "Home page" message is sent in the response.
      </div>
      <pre>
{`
const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send("Home page")
})

module.exports = router
`}
      </pre>

      <div className="heading">c. routes/about.js</div>
      <div className="description">
        The <code>about.js</code> route handles requests to <code>/about</code>. When this route is accessed, it responds with a message saying "Login page". Note the structure used with the Router instance to define routes.
      </div>
      <pre>
{`
const express = require('express')
const router = express.Router()

router.get('/login', (req,res)=>{
    res.send("Login page")
})

module.exports = router
`}
      </pre>

      <div className="heading">d. routes/login.js</div>
      <div className="description">
        Similarly, <code>login.js</code> manages routes for <code>/login</code>. Here, a simple response is returned when the route is accessed, sending the message "About page".
      </div>
      <pre>
{`
const express = require('express')
const router = express.Router()

router.get('/about', (req,res)=>{
    res.send("About page")
})

module.exports = router
`}
      </pre>

    </div>
  );
};

export default Day6;
