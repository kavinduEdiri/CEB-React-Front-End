import React from 'react';

function Cover({ children }) {
  return (
    <section className="cover">
      <div className="cover-content">
        <h1>Welcome to My Landing Page!</h1>
        <p>This is a description or some welcome text.</p>
        
        {children}
      </div>
    </section>
  );
}

export default Cover;
