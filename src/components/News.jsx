// News.jsx
import React from 'react';
import './css/News.css';
import Cover from './sub/Cover';

function News({ children }) {
  return (
    <Cover>

      {children}
      <h1>News here</h1>
      <div className="card" style={{ width: '18rem' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQRBv6KfH1kRkeFG9h6Co45CKH88aUXFm1KwVScdOpLlrqvN7He-u4xrwuLbvUAvsi6U&usqp=CAU" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

    </Cover>
  );
}

export default News;
