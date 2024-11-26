import React from 'react';
import '../App.css';

const Day2 = () => {
  return (
    <div className="px-10">

      <div className="heading">1. Node.js and NPM Installation</div>
      <div className="description">
        Installed Node.js from <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">nodejs.org</a> and verified installation with <code>node -v</code> and <code>npm -v</code>.
      </div>

      <div className="heading">2. Introduction to NPM</div>
      <div className="description">
        NPM is used to manage dependencies. I explored Node Version Manager (nvm) for handling multiple Node.js versions and practiced commands like <code>nvm list-remote</code> and <code>nvm install &lt;version&gt;</code>.
      </div>

      <div className="heading">3. Installed Packages</div>
      <div className="description">
        Checked installed packages using <code>npm list</code>, which shows project dependencies and their versions.
      </div>

      <div className="heading">4. NPM vs NVM</div>
      <div className="description">
        <ul>
          <li><strong>NPM:</strong> Manages project dependencies.</li>
          <li><strong>NVM:</strong> Manages multiple Node.js versions.</li>
        </ul>
      </div>

      <div className="heading">5. Semantic Versioning</div>
      <div className="description">
        Explored semantic versioning rules:
        <ul>
          <li><strong>Major:</strong> Breaking changes.</li>
          <li><strong>Minor:</strong> New features.</li>
          <li><strong>Patch:</strong> Bug fixes.</li>
        </ul>
        Symbols like <strong>^</strong> (minor updates) and <strong>~</strong> (patch updates) help manage versions.
      </div>

      <div className="heading">6. Global vs Local Packages</div>
      <div className="description">
        <ul>
          <li><strong>Global:</strong> Installed system-wide, e.g., <code>npm install -g nodemon</code>.</li>
          <li><strong>Local:</strong> Project-specific, e.g., <code>npm install express</code>.</li>
        </ul>
      </div>

      <div className="heading">7. Global Objects in JS and Node.js</div>
      <div className="description">
        <ul>
          <li><strong>In JS:</strong> <code>window</code>, <code>document</code>.</li>
          <li><strong>In Node.js:</strong> <code>global</code>, <code>process</code>, and modules like <code>fs</code> and <code>http</code>.</li>
        </ul>
      </div>

      <div className="heading">8. Package.json</div>
      <div className="description">
        Learned about <code>package.json</code>, which tracks project metadata, dependencies, and scripts. Created it using <code>npm init</code>.
      </div>

      <div className="heading">9. Benefits of Node.js</div>
      <div className="description">
        Node.js offers full-stack JavaScript, non-blocking I/O for scalability, and access to numerous libraries via NPM.
      </div>

    </div>
  );
};

export default Day2;
