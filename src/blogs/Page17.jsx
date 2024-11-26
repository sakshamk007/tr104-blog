import React from 'react';
import '../App.css';

const Day17 = () => {
  return (
    <div className="px-10">

      <div className="heading">1. Created partials - notloggedin.ejs and loggedin.ejs</div>

      <div className="description">
        <ul>
          <li><strong>notloggedin.ejs:</strong> This partial is included when the user is not logged in. It provides buttons for signing up and signing in, styled with Tailwind CSS for a visually appealing and responsive design.</li>
          <li><strong>loggedin.ejs:</strong> This partial is included when the user is logged in. It provides buttons to navigate to posted bids, participated bids, and the user profile. Each button is styled for consistency and responsiveness using Tailwind CSS.</li>
          <li><strong>Dynamic Inclusion:</strong> These partials are dynamically included in the main layout based on the user's login status, ensuring a tailored user experience.</li>
        </ul>
      </div>
      
      <div className="heading">a. notloggedin.ejs Code</div>
      <pre>
{`
<a href="auth/signup"><button class="lg:text-xl text-lg bg-gradient-to-b from-sky-700 to-sky-900 lg:py-2 lg:px-4 py-1 px-2 rounded-full transform transition-transform 
duration-150 ease-in-out active:scale-95">Sign up</button></a>

<a href="auth/signin"><button class="lg:text-xl text-lg bg-gradient-to-b from-lime-700 to-lime-900 lg:py-2 lg:px-4 py-1 px-2 rounded-full transform 
transition-transform duration-150 ease-in-out active:scale-95">Sign in</button></a>
`}
      </pre>

      <div className="heading">b. loggedin.ejs Code</div>
      <pre>
{`
<a href="postedbids"><button class="bg-gradient-to-b from-lime-700 to-lime-900 lg:py-3 lg:px-4 p-1 rounded-full flex justify-center items-center gap-2 lg:text-xl 
text-lg transform transition-transform duration-150 ease-in-out active:scale-95 lg:w-[150px] w-[100px]">Posted</button></a>

<a href="participatedbids"><button class="bg-gradient-to-b from-lime-700 to-lime-900 lg:py-3 lg:px-4 p-1 rounded-full flex justify-center items-center gap-2 lg:text-xl 
text-lg transform transition-transform duration-150 ease-in-out active:scale-95 lg:w-[150px] w-[110px]">Participated</button></a>

<a href="profile"><button class="bg-gradient-to-b from-lime-700 to-lime-900 lg:py-3 lg:px-4 p-1 rounded-full flex justify-center items-center lg:gap-2 gap-1 lg:text-xl 
text-lg transform transition-transform duration-150 ease-in-out active:scale-95 lg:w-[150px] w-[100px]"><img src="/img/profile.svg" alt="" class="lg:w-[28px] 
w-[23px]">Profile</button></a>
`}
      </pre>

    </div>
  );
};

export default Day17;
