import React from 'react'
import Cover from './sub/Cover';

function Billing({ children }) {
  return (
    <>
      <Cover name="News">

      {children}

      <h1>Bulling Calculate Page</h1>
        <p>This is a description or some welcome text.</p>

        <div class="mb-3">
        <label for="formGroupExampleInput" className="form-label">Meter Reading New</label>
        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput2" className="form-label">Meter Reading Old</label>
        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" />
      </div>

      <button type="button" class="btn btn-warning">Calculate</button>
      <br />
      <br />


      <table class="table">
  <thead>
    <tr>
      <th scope="col">Total No of Units consumed</th>
      <th scope="col">Charge for unit consumed</th>
      <th scope="col">Fixed charge</th>
      <th scope="col">Fuel adjustment charge</th>
      <th scope="col">Total cost supply</th>
      <th scope="col">Goverment Subscription</th>
      <th scope="col">Charge for this month</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      
    </tr>
    
  </tbody>
</table>

      </Cover>
    </>
  )
}

export default Billing