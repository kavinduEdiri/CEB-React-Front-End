import React from 'react'
import './css/News.css'

function News() {
  return (
    <>
      <section className="cover">
        <div className="cover-content">
          <h1>News Page</h1>
          <p>This is a description or some welcome text.</p>

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



        </div>
      </section>
    
    </>
  )
}

export default News