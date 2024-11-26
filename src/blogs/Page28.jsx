import React from 'react';
import '../App.css';

const Day28 = () => {
  return (
    <div className="px-10">

      <div className="heading">1. Created profile.ejs and /profile route</div>

      <div className="description">
        <ul>
          <li><strong>/profile:</strong> Handles GET and POST requests to fetch and update user profiles. Displays the user profile if it exists, otherwise renders a form to create a new profile.</li>
          <li><strong>Profile Management:</strong> Allows users to update their profile details such as username, email, contact number, first name, last name, and years of experience. Includes functionality to edit and sign out.</li>
        </ul>
      </div>

      <div className="heading">a. /profile Code</div>
      <pre>
{`
router.get('/profile', authenticate, async (req, res) => {
    const user_id = req.cookies.user_id;
    const result = await User.getEmailId(user_id);
    const email = result.email;
    const rows = await Profile.findByEmail(email);
    if (rows.length === 0) {
        res.render('web/layouts/auth', { page: 'profile', user_id, email });
    } else {
        res.render('web/pages/profile', { layout: "web/pages/profile", rows });
    }
});

router.post('/profile', authenticate, async (req, res) => {
    const { user_id, email, contact, username, first, last, experience } = req.body;
    const rows = await Profile.browse(username, email);
    if (rows.length > 0) {
        return res.status(400).render('web/layouts/auth', { page: 'error', status: 400, message: 'Username or Email already exists' });
    } else {
        await Profile.add(user_id, email, contact, username, first, last, experience);
        return res.redirect('/welcome');
    }
});

router.get('/signout', authenticate, (req, res) => {
    res.clearCookie('session_id');
    res.clearCookie('user_id');
    res.redirect('/');
});

router.post('/edit-profile', authenticate, async (req, res) => {
    const { user_id, email, contact, username, first, last, experience } = req.body;
    await Profile.delete(user_id);
    res.render('web/layouts/auth', { page: 'profile', user_id, email, contact, username, first, last, experience });
});
`}
      </pre>

      <div className="heading">b. profile.ejs Code</div>
      <pre>
{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AuctionBay</title>
    <link href="/src/input.css" type="text/css" rel="stylesheet">
    <link href="/src/output.css" type="text/css" rel="stylesheet">
</head>
<body class="text-white font-body_font flex">
    <div class="absolute top-0 z-[-2] h-auto w-auto min-h-full min-w-full flex flex-col items-center bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] 
    bg-[size:20px_20px]">
        <div class="lg:text-5xl text-3xl text-yellow-400 lg:p-14 p-7 text-center">&lt; Profile &gt;</div>
        <div class="flex flex-col lg:gap-8 gap-4">
            <div class="flex lg:gap-6 gap-4 justify-between lg:flex-row flex-col">
                <div class="flex lg:flex-row flex-col justify-between items-center lg:gap-6 gap-1 lg:text-xl text-base lg:w-[620px] w-[300px]">
                    <label for="username">Username</label>
                    <div class="bg-white text-black lg:w-[400px] w-[300px] p-2 rounded-md lg:text-left text-center"><%= rows[0].username %></div>
                </div>
                <div class="flex lg:flex-row flex-col justify-between items-center lg:gap-6 gap-1 lg:text-xl text-base lg:w-[620px] w-[300px]">
                    <label for="email">Email</label>
                    <div class="bg-white text-black lg:w-[400px] w-[300px] p-2 rounded-md lg:text-left text-center"><%= rows[0].email %></div>
                </div>
            </div>
            <div class="flex lg:gap-6 gap-4 justify-between lg:flex-row flex-col">
                <div class="flex lg:flex-row flex-col justify-between items-center lg:gap-6 gap-1 lg:text-xl text-base lg:w-[620px] w-[300px]">
                    <label for="first">First Name</label>
                    <div class="bg-white text-black lg:w-[400px] w-[300px] p-2 rounded-md lg:text-left text-center"><%= rows[0].first_name %></div>
                </div>
                <div class="flex lg:flex-row flex-col justify-between items-center lg:gap-6 gap-1 lg:text-xl text-base lg:w-[620px] w-[300px]">
                    <label for="last">Last Name</label>
                    <div class="bg-white text-black lg:w-[400px] w-[300px] p-2 rounded-md lg:text-left text-center"><%= rows[0].last_name %></div>
                </div>                
            </div>
            <div class="flex lg:gap-6 gap-4 justify-between lg:flex-row flex-col">                
                <div class="flex lg:flex-row flex-col justify-between items-center lg:gap-6 gap-1 lg:text-xl text-base lg:w-[620px] w-[300px]">
                    <label for="contact">Contact Number</label>
                    <div class="bg-white text-black lg:w-[400px] w-[300px] p-2 rounded-md lg:text-left text-center"><%= rows[0].contact_no %></div>
                </div>
                <div class="flex lg:flex-row flex-col justify-between items-center lg:gap-6 gap-1 lg:text-xl text-base lg:w-[620px] w-[300px]">
                    <label for="experience">Years Of Experience</label>
                    <div class="bg-white text-black lg:w-[400px] w-[300px] p-2 rounded-md lg:text-left text-center"><%= rows[0].years_of_experience %></div>
                </div>
            </div>            
        </div>
        <div class="flex items-center justify-center gap-4">
            <form action="/edit-profile" method="POST">
                <input type="hidden" name="user_id" value="<%= rows[0].user_id %>">                
                <input type="hidden" name="username" value="<%= rows[0].username %>">                
                <input type="hidden" name="first" value="<%= rows[0].first_name %>">
                <input type="hidden" name="last" value="<%= rows[0].last_name %>">
                <input type="hidden" name="contact" value="<%= rows[0].contact_no %>">
                <input type="hidden" name="email" value="<%= rows[0].email %>">
                <input type="hidden" name="experience" value="<%= rows[0].years_of_experience %>">
                <button type="submit" class="bg-gradient-to-b from-cyan-700 to-cyan-900 lg:text-xl text-lg lg:px-4 lg:py-2 px-2 py-1 rounded-full 
                transform transition-transform duration-150 ease-in-out active:scale-95 lg:mt-10 mt-8 lg:w-[110px] w-[90px]">Edit</button>
            </form>
            <form action="/signout" method="GET">
                <button type="submit" class="bg-gradient-to-b from-lime-700 to-lime-900 lg:text-xl text-lg lg:px-4 lg:py-2 px-2 py-1 rounded-full 
                transform transition-transform duration-150 ease-in-out active:scale-95 lg:mt-10 mt-8 lg:w-[110px] w-[90px]">Sign Out</button>
            </form>
        </div>
    </div>
      
</body>
</html>
`}
      </pre>

    </div>
  );
};

export default Day28;
