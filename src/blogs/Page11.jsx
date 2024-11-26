import React from 'react';
import '../App.css';

const Day11 = () => {
  return (
    <div className="px-10">

      <div className="heading">1. Created Auth/Signin Routes</div>
      <div className="description">
        Today, I worked on creating the routes for user signin. Below is the code for handling GET and POST requests for the signin functionality. The POST route includes checks for user existence, password verification, session creation, and cookie handling.
      </div>

      <div className="heading">a. Signin Route (GET Request)</div>
      <pre>
{`
router.get('/signin', (req, res) => {
    res.render('web/layouts/auth', { page: 'signin' });
});
`}
      </pre>
      <div className="description">
        This route renders the signin page when a user visits the <code>/signin</code> URL. It loads the necessary view to display the signin form.
      </div>

      <div className="heading">b. Signin Route (POST Request)</div>
      <pre>
{`
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user_agent = req.headers['user-agent'];
    try {
        const rows = await User.read(email);        
        if (rows.length === 0) {
            return res.status(400).render('web/layouts/auth', { page: 'error', status: 400, message: 'User not found' });
        }
        const user = rows[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).render('web/layouts/auth', { page: 'error', status: 400, message: 'Invalid password' });
        }
        const session_id = crypto.randomBytes(16).toString('hex');
        const expiry = new Date(Date.now() + 30 * 60 * 1000);
        await Session.add(session_id, user.user_id, user_agent, expiry);
        res.cookie('session_id', session_id, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        res.cookie('user_id', user.user_id);        
        const rows1 = await Profile.findByEmail(email);
        if (rows1.length === 0) {
            const user_id = user.user_id;
            res.render('web/layouts/auth', { page: 'profile', user_id, email });
        }
        else {
            res.redirect('/welcome');
        }
    } catch (error) {
        console.error(error);
        res.status(500).render('web/layouts/auth', { page: 'error', status: 500, message: 'Internal server error' });
    }
});
`}
      </pre>
      <div className="description">
        In this code:
        <ul>
          <li><strong>User Authentication:</strong> The user is authenticated by checking the provided email and comparing the entered password with the stored hashed password using <code>bcrypt.compare</code>.</li>
          <li><strong>Session Creation:</strong> After successful login, a unique session ID is generated using <code>crypto.randomBytes</code>, and the session is saved to the database.</li>
          <li><strong>Cookie Management:</strong> The session ID and user ID are stored in cookies, with <code>httpOnly</code> and expiration settings to ensure security.</li>
          <li><strong>Profile Handling:</strong> If the user does not have a profile, they are redirected to complete their profile setup; otherwise, they are taken to the welcome page.</li>
          <li><strong>Error Handling:</strong> The route is wrapped in a try-catch block to handle errors and respond with a 500 status in case of an internal server error.</li>
        </ul>
        This route handles the user signin process securely, ensuring proper validation and session management.
      </div>

    </div>
  );
};

export default Day11;
