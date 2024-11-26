import React from 'react';
import '../App.css';

const Day12 = () => {
  return (
    <div className="px-10">

      <div className="heading">1. Created auth.ejs Layout</div>
      <div className="description">
        Today, I worked on creating a layout for authentication pages (signup, signin, profile, error, success). The layout uses Tailwind CSS for styling and integrates EJS templating to dynamically include partials based on the page being rendered. Below is the code for the <code>auth.ejs</code> layout.
      </div>

      <div className="heading">a. auth.ejs Layout Code</div>
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
<body class="font-body_font">
    <div class="absolute inset-0 -z-10 h-full w-full flex justify-center items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div class="lg:w-[500px] w-[350px] h-fit bg-gray-500 bg-opacity-20 rounded-2xl px-6 py-10 text-white flex justify-center items-center">
            
            <% if (page === 'signup') { %>
                <%- include('../partials/signup') %>
            <% } else if (page === 'signin') { %>
                <%- include('../partials/signin') %>
            <% } else if (page === 'profile') { %>
                <%- include('../partials/profile') %>
            <% } else if (page === 'error') { %>
                <%- include('../partials/error', {status: status, message: message}) %>
            <% } else if (page === 'success') { %>
                <%- include('../partials/success', {status: status, message: message}) %>
            <% } %> 

        </div>
    </div>

    <script>
        let elements = document.getElementsByClassName('visibility');
        Array.from(elements).forEach(element => {
            element.addEventListener('click', (e) => {
                let password = e.target.parentElement.querySelector('.password');
                if (e.target.src.includes('/img/invisible.svg')) {
                    e.target.src = '/img/visible.svg';
                    password.type = 'text';
                } else {
                    e.target.src = '/img/invisible.svg';
                    password.type = 'password';
                }
            });
        });
    </script>
</body>    
</html>
`}
      </pre>

      <div className="description">
        In this code:
        <ul>
          <li><strong>Dynamic Content Rendering:</strong> The layout dynamically includes different partial views based on the page parameter, such as <code>signup</code>, <code>signin</code>, <code>profile</code>, etc.</li>
          <li><strong>Responsive Design:</strong> The layout uses Tailwind CSS for responsiveness, ensuring the content adjusts based on the screen size. The layout adapts to large and small screens with defined widths for better user experience.</li>
          <li><strong>Password Visibility Toggle:</strong> A small script is added to allow users to toggle the visibility of the password field using a click event. The icon changes between visible and invisible states depending on whether the password is shown or hidden.</li>
          <li><strong>Background Styling:</strong> The background uses a radial gradient for a visually appealing design that scales well on different screen sizes.</li>
        </ul>
        This layout is used to provide a unified structure across authentication-related pages, while dynamically rendering content based on the context (page type).
      </div>

    </div>
  );
};

export default Day12;
