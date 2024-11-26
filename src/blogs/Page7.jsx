import React from 'react';
import '../App.css';

const Day7 = () => {
  return (
    <div className="px-10">

      <div className="heading">1. Domain Driven Design</div>
      <div className="description">
        I learned about Domain Driven Design (DDD), a methodology for designing complex systems by focusing on the core domain and its relationships. Key concepts include:
        <ul>
          <li><strong>Primary Domain and Sub-domains:</strong> Identify the main problem area and break it down into smaller, manageable sub-domains.</li>
          <li><strong>Entities:</strong> Real-world objects with an identity, such as products or users.</li>
          <li><strong>Object Values:</strong> Data dependent on entities, like a user's name or product description.</li>
          <li><strong>Aggregates:</strong> Groupings of related entities and object values, like a sale, which connects products and customer details.</li>
        </ul>
        This approach helps organize and focus on the business logic, leading to better application architecture.
      </div>

      <div className="heading">2. Image Compression with Multer and Sharp in Express.js</div>
      <div className="description">
        I explored how to handle image uploads and compression in an Express.js application using Multer and Sharp:
        <ul>
          <li><strong>Multer:</strong> A middleware for handling file uploads.</li>
          <li><strong>Sharp:</strong> A library for image processing, allowing us to resize, convert formats, and compress images.</li>
          <li><strong>Express:</strong> Serves the application and static files such as the compressed images.</li>
        </ul>
        The following code demonstrates how to implement file upload and image compression in an Express server:
      </div>

      <div className="heading">a. Image Upload and Compression Example</div>
      <pre>
{`
const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const fs = require("fs");

const app = express();
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(express.static("./uploads"));

app.get("/", (req, res) => {
  res.send("Image compression");
});

app.post("/", upload.single("picture"), async (req, res) => {
  fs.access("./uploads", (error) => {
    if (error) {
      fs.mkdirSync("./uploads");
    }
  });
  const { buffer, originalname } = req.file;
  const timestamp = new Date().toISOString();
  const ref = \`\${timestamp}-\${originalname}.webp\`;
  await sharp(buffer)
    .webp({ quality: 20 })
    .toFile("./uploads/" + ref);
  const link = \`http://localhost:3000/\${ref}\`;
  return res.json({ link });
});

app.listen(3000);
`}
      </pre>

      <div className="description">
        In the code above:
        <ul>
          <li><strong>Multer:</strong> Handles file uploads and stores them temporarily in memory using <code>memoryStorage()</code>.</li>
          <li><strong>Sharp:</strong> Processes the image (converts it to the WebP format with reduced quality for compression).</li>
          <li><strong>Express:</strong> Serves static files from the <code>uploads</code> directory and provides an endpoint to upload and compress images.</li>
        </ul>
        The image is saved to the <code>uploads</code> folder and a link to the compressed image is returned in the response.
      </div>

    </div>
  );
};

export default Day7;
