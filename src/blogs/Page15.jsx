import React from 'react';
import '../App.css';

const Day15 = () => {
  return (
    <div className="px-10">

      <div className="heading">1. Created success and error views</div>
      
      <div className="heading">a. success.ejs Code</div>
      <pre>
{`
<div class="flex items-center flex-col lg:gap-16 gap-8">
    <div class="flex lg:gap-8 gap-4 justify-center items-center">
        <img src="/img/success.svg" alt="" class="lg:w-[80px] w-[60px]">
        <div class="lg:text-5xl text-4xl">Success <%= status %></div>
    </div>
    <div class="lg:text-4xl text-2xl text-center"><%= message %></div>
    <div class="lg:text-2xl text-xl">Click here to <a href="javascript:history.back()" class="text-violet-400">Go back</a></div>
</div>
`}
      </pre>

      <div className="description">
        <ul>
          <li><strong>success.ejs:</strong> This view is displayed when an operation completes successfully. It shows a success message and a status code, with an option to navigate back to the previous page.</li>
          <li><strong>Design Elements:</strong> The view includes an image indicating success, and uses Tailwind CSS classes for a responsive and visually appealing design.</li>
          <li><strong>Message Display:</strong> The message and status code are dynamically rendered using template variables.</li>
        </ul>
      </div>

      <div className="heading">b. error.ejs Code</div>
      <pre>
{`
<div class="flex items-center flex-col lg:gap-16 gap-8">
    <div class="flex lg:gap-8 gap-4 justify-center items-center">
        <img src="/img/error.svg" alt="" class="lg:w-[80px] w-[60px]">
        <div class="lg:text-5xl text-4xl">Error <%= status %></div>
    </div>
    <div class="lg:text-4xl text-2xl text-center"><%= message %></div>
    <div class="lg:text-2xl text-xl">Click here to <a href="javascript:history.back()" class="text-violet-400">Go back</a></div>
</div>
`}
      </pre>

      <div className="description">
        <ul>
          <li><strong>error.ejs:</strong> This view is shown when an error occurs. It displays an error message and status code, along with a link to navigate back to the previous page.</li>
          <li><strong>Design Elements:</strong> Similar to the success view, this view uses an error icon and Tailwind CSS classes for a consistent and responsive design.</li>
          <li><strong>Message Display:</strong> The error message and status code are dynamically rendered using template variables.</li>
        </ul>
      </div>

    </div>
  );
};

export default Day15;
