import React from 'react';
import '../App.css';

const Day1 = () => {
  return (
    <div className="px-10">

      <div className='heading'>1. Node.js and Its Uses</div>
      <div className='description'>
        Today, I explored Node.js and its role in server-side JavaScript. Built on Google’s V8 engine, it’s fast, non-blocking, and asynchronous, making it perfect for scalable, I/O-heavy applications. 
      </div>

      <div className='heading'>2. Limitations of Node.js</div>
      <div className='description'>
        While powerful, Node.js has limitations. Its single-threaded nature can be a bottleneck for CPU-intensive tasks. Managing external dependencies and avoiding 'callback hell' are also challenges, but Promises and async/await help simplify code.
      </div>

      <div className='heading'>3. SQL Databases</div>
      <div className='description'>
        I revisited SQL databases like MySQL and PostgreSQL, which shine in handling structured data and supporting ACID transactions. Their vertical scaling ability makes them reliable for use cases like banking.
      </div>

      <div className='heading'>4. NoSQL Databases</div>
      <div className='description'>
        NoSQL databases, such as MongoDB, were next on my list. Their flexible, document-based model supports horizontal scaling, making them ideal for handling large volumes of unstructured data in real-time applications.
      </div>

      <div className='heading'>5. Synchronous and Asynchronous JavaScript</div>
      <div className='description'>
        I spent time understanding JavaScript’s synchronous and asynchronous nature. Synchronous tasks execute sequentially, while asynchronous tasks handle multiple operations at once using callbacks, Promises, or async/await for better efficiency.
      </div>

      <div className='heading'>6. Polling in Servers</div>
      <div className='description'>
        I learned about polling—a method for checking server updates at intervals. While simple to implement, it’s less efficient than alternatives like WebSockets or Server-Sent Events (SSE) for real-time communication.
      </div>

      <div className='heading'>7. SQL, MongoDB, and SQLite</div>
      <div className='description'>
        Finally, I compared database options. SQL handles structured data and complex queries well. MongoDB offers flexibility for unstructured data, and SQLite is a lightweight, server-less solution for small or mobile projects.
      </div>
    </div>
  );
};

export default Day1;
