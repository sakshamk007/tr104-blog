import React from 'react';
import '../App.css';

const Day23 = () => {
  return (
    <div className="px-10">

      <div className="heading">1. Created bid.ejs</div>

      <div className="description">
        <ul>
          <li><strong>bid.ejs:</strong> Renders the bidding interface, showing the starting amount, timer, current bid, and a table of bids. Includes a number pad for inputting bid values and bid suggestions.</li>
          <li><strong>Timer and Current Bid Update:</strong> Fetches the current bids and updates the timer periodically to ensure real-time updates for the bidding process.</li>
          <li><strong>Bid Submission and Validation:</strong> Handles bid submissions and validates the entered bid values to ensure they meet the auction criteria.</li>
        </ul>
      </div>

      <div className="heading">a. bid.ejs Code</div>
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
    <div class="absolute top-0 z-[-2] min-h-screen h-auto w-full flex flex-col items-center bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] 
    bg-[size:20px_20px]">
        <div class="flex lg:py-14 p-5 lg:px-20 justify-between items-center w-full text-yellow-400">
            <div class="lg:text-4xl text-base flex lg:flex-row flex-col lg:gap-2 gap-0">Starting Amount: <div><span class="lg:text-4xl text-lg py-0">&#8377;</span>
            <%= price %></div></div>
            <div id="timer" class="lg:text-4xl text-3xl">5:00</div>
            <div id="currentBid" class="lg:text-4xl text-base flex lg:flex-row flex-col lg:gap-2 gap-0">Current Bid: <div><span class="lg:text-4xl text-lg py-0">&#8377;
            </span>0</div></div>
        </div>
        <div class="flex lg:flex-row flex-col lg:justify-between lg:items-start justify-center items-center lg:gap-4 gap-2 w-full lg:px-20 px-7">
            <div class="text-white lg:text-2xl text-base lg:w-[900px] w-[350px]">
                <table>
                    <thead class="bg-violet-900">
                        <tr>
                            <th class="lg:w-[500px] w-[230px] lg:p-2 p-1">Name</th>
                            <th class="lg:w-[300px] w-[120px] lg:p-2 p-1">Value</th>
                        </tr>
                    </thead>
                    <tbody class="bg-gray-800" id="bidTableBody">
                        
                    </tbody>
                </table>
            </div>
            <div id="numpad" class="flex flex-col lg:gap-4 gap-3 justify-center items-center lg:w-[400px] w-[350px]">
                <span class="lg:text-2xl text-base">Bid suggestions</span>
                <div id="suggestions" class="flex justify-center items-center lg:gap-4 gap-2"></div>
                <input type="number" id="bidValue" autofocus class="text-black lg:p-2 p-1 lg:w-[250px] w-[150px] rounded-lg lg:text-2xl text-base">
                <div id="numberPad" class="flex lg:flex-col flex-row-reverse lg:flex-nowrap flex-wrap-reverse items-center justify-center lg:gap-4 gap-3 lg:text-2xl 
                text-lg">
                    <div class="flex justify-center items-center lg:gap-4 gap-3">
                        <button class="num-button lg:w-[50px] w-[35px] lg:p-2 p-1" data-value="7">7</button>
                        <button class="num-button lg:w-[50px] w-[35px] lg:p-2 p-1" data-value="8">8</button>
                        <button class="num-button lg:w-[50px] w-[35px] lg:p-2 p-1" data-value="9">9</button>
                    </div>
                    <div class="flex justify-center items-center lg:gap-4 gap-3">
                        <button class="num-button lg:w-[50px] w-[35px] lg:p-2 p-1" data-value="4">4</button>
                        <button class="num-button lg:w-[50px] w-[35px] lg:p-2 p-1" data-value="5">5</button>
                        <button class="num-button lg:w-[50px] w-[35px] lg:p-2 p-1" data-value="6">6</button>
                    </div>
                    <div class="flex justify-center items-center lg:gap-4 gap-3">
                        <button class="num-button lg:w-[50px] w-[35px] lg:p-2 p-1" data-value="1">1</button>
                        <button class="num-button lg:w-[50px] w-[35px] lg:p-2 p-1" data-value="2">2</button>
                        <button class="num-button lg:w-[50px] w-[35px] lg:p-2 p-1" data-value="3">3</button>
                    </div>
                    <div class="flex justify-center items-center lg:gap-4 gap-3">
                        <button class="num-button lg:w-[50px] w-[35px] lg:p-2 p-1" data-value="0">0</button>
                    </div>
                </div>
                <div class="flex justify-center items-center lg:gap-4 gap-3 lg:text-2xl text-lg">
                    <button id="clear" class="bg-gradient-to-b from-sky-700 to-sky-900 lg:p-3 p-1 rounded-lg">Clear</button>
                    <button id="submitBid" class="bg-gradient-to-b from-sky-700 to-sky-900 lg:p-3 p-1 rounded-lg">Submit</button>
                </div>
              </div>
        </div>
    </div>
</body>
</html>
`}
      </pre>

    </div>
  );
};

export default Day23;
