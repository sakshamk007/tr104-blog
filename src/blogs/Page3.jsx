import React from 'react';
import '../App.css';

const Day3 = () => {
  return (
    <div className="px-10">

      <div className="heading">1. Types of API</div>
      <div className="description">
        Today, I explored different types of APIs:
        <ul>
          <li><strong>REST API:</strong> A stateless, client-server communication method using HTTP requests (GET, POST, PUT, DELETE).</li>
          <li><strong>SOAP API:</strong> A protocol for exchanging structured information, often used in enterprise applications.</li>
          <li><strong>GraphQL:</strong> A query language for APIs, enabling more efficient and flexible data fetching.</li>
        </ul>
      </div>

      <div className="heading">2. CRUD Operations</div>
      <div className="description">
        I learned the basic CRUD operations that are essential for interacting with databases:
        <ul>
          <li><strong>Create:</strong> Adding new data.</li>
          <li><strong>Read:</strong> Retrieving existing data.</li>
          <li><strong>Update:</strong> Modifying existing data.</li>
          <li><strong>Delete:</strong> Removing data from the system.</li>
        </ul>
        These operations form the backbone of many web applications.
      </div>

      <div className="heading">3. MVA Architecture</div>
      <div className="description">
        I explored the MVA (Model-View-Controller) architecture:
        <ul>
          <li><strong>Model:</strong> Represents the data logic (e.g., database interaction).</li>
          <li><strong>View:</strong> The user interface (UI) that displays the data.</li>
          <li><strong>Controller:</strong> Manages the business logic and handles user interactions.</li>
        </ul>
        MVA helps in organizing code in a maintainable and scalable manner.
      </div>

      <div className="heading">4. Web to App Frameworks</div>
      <div className="description">
        I looked into frameworks for converting web apps into mobile apps:
        <ul>
          <li><strong>Apache Cordova:</strong> A platform that enables building mobile apps using web technologies (HTML, CSS, JavaScript).</li>
          <li><strong>Ionic:</strong> A framework that builds cross-platform apps using web technologies, with enhanced UI components.</li>
        </ul>
        These frameworks provide a way to leverage web development skills for mobile app development.
      </div>

    </div>
  );
};

export default Day3;
