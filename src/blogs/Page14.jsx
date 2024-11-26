import React from 'react';
import '../App.css';

const Day14 = () => {
  return (
    <div className="px-10">

      <div className="heading">1. Created signup and signin views</div>
      
      <div className="heading">a. signup.ejs Code</div>
      <pre>
{`
<form action="/auth/signup" method="post" class="flex items-center flex-col gap-6">
    <div class="lg:text-4xl text-2xl">Sign up</div>
    <input type="email" name="email" required placeholder="email" class="bg-black rounded-lg p-2 lg:w-[400px] w-[300px] h-12">
    <div class="flex justify-center relative">
        <input type="password" name="password" required placeholder="Create password" class="bg-black rounded-lg p-2 lg:w-[400px] w-[300px] h-12 password">
        <img src="/img/invisible.svg" alt="" class="visibility absolute right-4 top-4">
    </div>
    <div class="flex justify-center relative">
        <input type="password" name="confirmPassword" required placeholder="Confirm password" class="bg-black rounded-lg p-2 lg:w-[400px] w-[300px] h-12 password">
        <img src="/img/invisible.svg" alt="" class="visibility absolute right-4 top-4">
    </div>
    <button type="submit" class="lg:w-[400px] w-[300px] bg-violet-800 p-2 rounded-lg h-12 lg:text-xl text-lg transform transition-transform duration-150 ease-in-out 
    active:scale-95">Sign up</button>
    <h1>Already have an account? <a href="/auth/signin" class="text-violet-400">Sign in</a></h1>
</form>
`}
      </pre>

      <div className="description">
        <ul>
          <li><strong>signup.ejs:</strong> This form is designed to handle user sign-up. It includes inputs for email, password, and password confirmation, all of which are styled and validated.</li>
          <li><strong>Classes and Styles:</strong> The form elements utilize Tailwind CSS classes for styling, ensuring a responsive design across different screen sizes.</li>
          <li><strong>Submit Action:</strong> The form submits data to the <code>/auth/signup</code> endpoint for processing user registration.</li>
        </ul>
      </div>

      <div className="heading">b. signin.ejs Code</div>
      <pre>
{`
<form action="/auth/signin" method="post" class="flex items-center flex-col gap-6">
    <div class="lg:text-4xl text-2xl">Sign in</div>
    <input type="email" name="email" required placeholder="email" class="bg-black rounded-lg p-2 lg:w-[400px] w-[300px] h-12">
    <div class="flex justify-center relative">
        <input type="password" name="password" required placeholder="password" class="bg-black rounded-lg p-2 lg:w-[400px] w-[300px] h-12 password">
        <img src="/img/invisible.svg" alt="" class="visibility absolute right-4 top-4">
    </div>
    <button type="submit" class="lg:w-[400px] w-[300px] bg-violet-800 p-2 rounded-lg h-12 lg:text-xl text-lg transform transition-transform duration-150 ease-in-out 
    active:scale-95">Sign in</button>
    <h1>Don't have an account? <a href="/auth/signup" class="text-violet-400">Sign up</a></h1>
</form>
`}
      </pre>

      <div className="description">
        <ul>
          <li><strong>signin.ejs:</strong> This form is for existing users to sign in. It includes inputs for email and password, with similar styling to the signup form.</li>
          <li><strong>Classes and Styles:</strong> Like the signup form, this form also uses Tailwind CSS for a consistent look and responsive design.</li>
          <li><strong>Submit Action:</strong> The form posts data to the <code>/auth/signin</code> endpoint for user authentication.</li>
        </ul>
      </div>

    </div>
  );
};

export default Day14;
