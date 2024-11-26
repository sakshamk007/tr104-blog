import React from 'react';
import '../App.css';

const Day13 = () => {
  return (
    <div className="px-10">

      <div className="heading">1. Created auth.middleware.js</div>
      <div className="description">
        Today, I implemented an authentication middleware in Express.js to manage user sessions and ensure users are properly authenticated before accessing protected routes. The middleware checks for a valid session ID in the cookies and verifies the session's validity. It also includes a function to terminate inactive sessions.
      </div>

      <div className="heading">a. auth.middleware.js Code</div>
      <pre>
{`
const Session = require('@models/session.model');

const authenticate = async (req, res, next) => {
    const { session_id } = req.cookies;
    if (!session_id) {
        return res.redirect('/auth/signin');
    }
    try {
        const rows = await Session.read(session_id);
        if (rows.length === 0) {
            return res.redirect('/auth/signin');
        }
        await Session.edit(session_id);
        req.user = { id: rows[0].user_id };
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).render('web/layouts/auth', { page: 'error', status: 500, message: 'Internal Server Error' });
    }
};

const terminateInactiveSessions = async () => {
    try {
        const rows = await Session.getSessionId();
        for (const row of rows) {
            await Session.updateTerminatedAt(row.session_id);
        }
        console.log(\`Terminated \${rows.length} inactive sessions\`);
    } catch (error) {
        console.error('Error terminating inactive sessions:', error);
    }
};
setInterval(terminateInactiveSessions, 60 * 1000);

module.exports = authenticate;
`}
      </pre>

      <div className="description">
        In this code:
        <ul>
          <li><strong>authenticate Middleware:</strong> This middleware is responsible for validating the session of the user by checking the session ID from cookies. If the session is valid, it extends the session's expiry and allows access to the next route, otherwise redirects to the signin page.</li>
          <li><strong>terminateInactiveSessions:</strong> This function checks for sessions that have been inactive for more than 30 minutes and terminates them. It's executed periodically using <code>setInterval</code>.</li>
          <li><strong>Session Management:</strong> Both functions rely on methods from the <code>Session</code> model, which abstracts the interaction with the session data in the database. The session expiry and termination logic ensure that the server doesn't retain inactive sessions for too long.</li>
        </ul>
        This middleware is essential for maintaining a secure session management system, ensuring that only authenticated users can access protected routes and cleaning up inactive sessions periodically.
      </div>

    </div>
  );
};

export default Day13;
