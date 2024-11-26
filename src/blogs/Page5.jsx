import React from 'react';
import '../App.css';

const Day5 = () => {
  return (
    <div className="px-10">

      <div className="heading">1. Types of Web Representations</div>
      <div className="description">
        Today, I explored various types of web representations:
        <ul>
          <li><strong>Website:</strong> Static content owned by the site owner, e.g., business or informational websites.</li>
          <li><strong>Web Portal:</strong> A site offering a combination of proprietary and user-generated content, e.g., YouTube or Udemy, with both creators and consumers.</li>
          <li><strong>Web Platform:</strong> A platform where users generate content, and the owner maintains proprietary rights, e.g., social media platforms.</li>
          <li><strong>Web Application:</strong> Private data handling for user-centric services, such as banking apps or chat applications.</li>
          <li><strong>Web Services:</strong> APIs that allow different applications to communicate and share data.</li>
        </ul>
        I also learned about public domain (website, portal, platform) and private domain (web application) distinctions.
      </div>

      <div className="heading">2. E-commerce Web Portal Modules</div>
      <div className="description">
        I reviewed the core modules of an e-commerce web portal:
        <ul>
          <li><strong>Theme/Environment:</strong> Defines the site's appearance and overall user experience.</li>
          <li><strong>Catalogues:</strong> Manages product listings and categories.</li>
          <li><strong>Offer Logic:</strong> Handles discounts, promotions, and special offers.</li>
          <li><strong>Shopping Logic:</strong> Manages the shopping cart, checkout process, and payment integration.</li>
          <li><strong>Order:</strong> Tracks and processes customer orders.</li>
          <li><strong>Operations:</strong> Manages backend operations such as inventory, shipping, and customer support.</li>
        </ul>
      </div>

    </div>
  );
};

export default Day5;
