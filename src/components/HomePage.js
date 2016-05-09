import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to React Slingshot</h1>

      <h2>Get Started</h2>
      <ol>
        <li>Review the <Link to="fuel-savings">example app</Link></li>
        <li>Remove this demo: npm run remove-demo</li>
      </ol>
    </div>
  );
};

export default HomePage;
