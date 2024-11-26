import React from 'react';
import '../App.css';

const Day21 = () => {
  return (
    <div className="px-10">

      <div className="heading">1. Created startbid.ejs and /startbid route</div>

      <div className="description">
        <ul>
          <li><strong>/startbid Route:</strong> This route handles GET and POST requests to initialize and start a bid. The GET request renders the startbid form, while the POST request handles the form submission and populates the view with bid details.</li>
          <li><strong>Dynamic Content:</strong> The `startbid.ejs` view displays dynamic bid details fetched from the POST request, including company information, auction details, and optionally an image if available.</li>
          <li><strong>Form Actions:</strong> The view includes forms to save the bid to the wishlist or to start bidding. The start button is dynamically enabled based on the current time compared to the bid start time.</li>
          <li><strong>Styling:</strong> The layout and elements use Tailwind CSS for a responsive design, and additional styles ensure a user-friendly and visually appealing interface.</li>
        </ul>
      </div>

      <div className="heading">a. /startbid Code</div>
      <pre>
{`
router.get('/startbid', authenticate, async (req, res) => {
    res.render('web/pages/startbid', { layout: "web/pages/startbid" });
});

router.post('/startbid', authenticate, async (req, res) => {
    const user_id = req.cookies.user_id;
    const email = await User.getEmailId(user_id);
    const { bid_id, name, type, title, description, auction, price, date, time } = req.body;
    try {
        const imageData = await Image.findByImageId(bid_id);
        const imagePath = imageData.length > 0 ? imageData[0].image_path : null;
        res.render('web/pages/startbid', { layout: "web/pages/startbid", user_id, bid_id, name, type, title, description, auction, price, date, time, email, 
        imagePath });
    } catch (err) {
        console.error('Error fetching image path:', err);
        res.status(500).render('web/layouts/auth', { page: 'error', status: 500, message: 'Error fetching image path' });
    }
});
`}
      </pre>

      <div className="heading">b. startbid.ejs Code</div>
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
    <style>
        strong{
            color: yellow;
        }
        .disabled {
            background-color: grey;
            cursor: not-allowed;
            opacity: 0.5;
        }
    </style>
</head>
<body class="text-white font-body_font flex">
    <div class="absolute top-0 z-[-2] h-auto w-auto min-h-full min-w-full flex flex-col items-center bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] 
    bg-[size:20px_20px]">
        <div class="lg:text-5xl text-3xl text-yellow-400 lg:p-14 p-7 text-center">&lt; Start &gt;</div>
        <div class="flex lg:flex-row flex-col w-full lg:gap-0 gap-4">
            <div class="flex flex-col justify-start lg:gap-4 gap-2 lg:w-[65%] w-[100%] px-8 lg:text-2xl text-base">        
                <div><strong>Company Type:</strong> <%= type %></div>        
                <div><strong>Company Name:</strong> <%= name %></div>
                <div><strong>Title:</strong> <%= title %></div>
                <div><strong>Description:</strong> <%= description %></div>        
                <div><strong>Auction type:</strong> <%= auction %></div>
                <div><strong>Starting amount:</strong> <%= price %></div>
                <div><strong>Date:</strong> <%= date %></div>
                <div><strong>Time:</strong> <%= time %></div>
            </div>
            <div class="flex flex-col items-center lg:gap-4 gap-2 justify-start px-8 lg:mb-8 mb-4">
                <div class="flex flex-col lg:gap-2 gap-1 lg:text-2xl text-base">
                    <% if (imagePath) { %>
                        <div><strong>Image:</strong></div>
                        <img src="/uploads/<%= imagePath %>" alt="Image" class="h-[300px] object-cover border border-white">
                    <% } else { %>
                        <div><strong>No Image Available</strong></div>
                    <% } %>
                </div>
                <form action="/wishlist" method="POST">
                    <input type="hidden" name="user_id" value="<%= user_id %>">
                    <input type="hidden" name="bid_id" value="<%= bid_id %>">
                    <input type="hidden" name="title" value="<%= title %>">
                    <button type="submit" class="wishlist bg-gradient-to-b from-cyan-700 to-cyan-900 rounded-lg lg:p-2 p-1 lg:text-xl text-base transform 
                    transition-transform duration-150 ease-in-out active:scale-95">Save to wishlist</button>
                </form>
                <div class="text-center lg:text-xl text-base">Auction will be activated on <%= date %> at <%= time %></div>
                <form action="/bid" method="POST">
                    <input type="hidden" name="user_id" value="<%= user_id %>">
                    <input type="hidden" name="bid_id" value="<%= bid_id %>">
                    <input type="hidden" name="auction" value="<%= auction %>">
                    <input type="hidden" name="price" value="<%= price %>">
                    <button type="submit" id="startBiddingBtn" class="bg-gradient-to-b from-cyan-700 to-cyan-900 rounded-lg lg:p-2 p-1 disabled lg:text-xl text-base 
                    transform transition-transform duration-150 ease-in-out active:scale-95" disabled>Start</button>
                </form>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const startBiddingBtn = document.getElementById('startBiddingBtn');
            const bidDate = new Date('<%= date %> <%= time %>');
            function checkBidTime() {
                const currentTime = new Date();
                if (currentTime >= bidDate) {
                    startBiddingBtn.disabled = false;
                    startBiddingBtn.classList.remove('disabled');
                } else {
                    setTimeout(checkBidTime, 1000);
                }
            }
            checkBidTime();
        });
    </script>
</body>
</html>
`}
      </pre>

    </div>
  );
};

export default Day21;
