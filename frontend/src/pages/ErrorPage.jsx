import React from 'react';
import '../styles/ErrorPage.css';

function ErrorPage(){
  return (
    <div className="not-found-container">
      <h1 className="not-found-header">404 - Page Not Found</h1>
      <p className="not-found-text">The page you are looking for does not exist.</p>
      <a href="/" className="not-found-link">Go Back to Home</a>
    </div>
  );
};

export default ErrorPage;
