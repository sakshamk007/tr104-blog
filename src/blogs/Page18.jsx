import React from 'react';
import '../App.css';

const Day18 = () => {
  return (
    <div className="px-10">

      <div className="heading">1. Created wishlist.ejs</div>
      
      <div className="description">
        <ul>
          <li><strong>wishlist.ejs:</strong> This view displays a wishlist of items the user is interested in. It uses a combination of Tailwind CSS classes to create a visually appealing, responsive design.</li>
          <li><strong>Dynamic Content:</strong> The wishlist is populated with items dynamically using EJS templating. Each item has buttons for starting a bid or deleting the item from the wishlist.</li>
          <li><strong>Form Actions:</strong> Each item in the wishlist is wrapped in a form that allows the user to start a bid or delete the item with appropriate POST requests.</li>
          <li><strong>Styling:</strong> The design includes a gradient background, rounded corners, and responsive layout adjustments to ensure it looks great on different screen sizes.</li>
        </ul>
      </div>

      <div className="heading">a. wishlist.ejs Code</div>
      <pre>
{`
<div class="bg-gradient-to-b from-lime-700 to-lime-900 lg:w-[400px] w-[350px] lg:h-[500px] h-[400px] rounded-3xl p-4 flex flex-col gap-4 mb-8">
    <div class="text-center lg:text-3xl text-xl">Wishlist</div>
    <ul class="flex flex-col gap-4 overflow-y-auto pb-2">
        <% rows.forEach(row => { %>
            <div class="flex gap-2 w-full justify-center items-center">
                <form action="/wishlist-startbid" method="POST" class="w-full">
                    <input type="hidden" name="wishlist_id" value="<%= row.wishlist_id %>">
                    <button type="submit" class="bg-slate-950 rounded-3xl px-4 py-2 lg:text-lg text-sm text-left w-full transform transition-transform duration-150 
                    ease-in-out active:scale-95"><%= row.title %></button>
                </form>
                <form action="/delete-wishlist" method="POST">
                    <input type="hidden" name="wishlist_id" value="<%= row.wishlist_id %>">
                    <button type="submit" class="bg-red-500 rounded-full p-2 flex justify-center items-center lg:w-[40px] w-[35px] transform transition-transform 
                    duration-150 ease-in-out active:scale-95"><img src="/img/delete.svg" alt="" class="w-6"></button>
                </form>
            </div>
        <% }); %>
    </ul>
</div>
`}
      </pre>

    </div>
  );
};

export default Day18;
