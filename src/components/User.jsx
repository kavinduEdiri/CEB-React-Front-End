import React from 'react'
import './css/User.css'

function User() {
  return (
    <>

<section className="cover">
      <div className="cover-content">
      <h1>User Managment Page</h1>
      <div class="mb-3">
        <label for="formGroupExampleInput" className="form-label">Area Office</label>
        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput2" className="form-label">electricity Account No</label>
        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" />
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput2" className="form-label">Registration Name</label>
        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" />
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput2" className="form-label">Permenant Address</label>
        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" />
      </div>

      <button type="button" class="btn btn-success">Success</button>


      <table class="table">
  <thead>
    <tr>
      <th scope="col">Account No</th>
      <th scope="col">Register Name</th>
      <th scope="col">Address</th>
      <th scope="col">Option 01</th>
      <th scope="col">Option 02</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><button type="button" class="btn btn-primary">Primary</button></td>
      <td><button type="button" class="btn btn-danger">Danger</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><button type="button" class="btn btn-primary">Primary</button></td>
      <td><button type="button" class="btn btn-danger">Danger</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td><button type="button" class="btn btn-primary">Primary</button></td>
      <td><button type="button" class="btn btn-danger">Danger</button></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td colspan="2">Larry the Bird</td>
      <td><button type="button" class="btn btn-primary">Primary</button></td>
      <td><button type="button" class="btn btn-danger">Danger</button></td>
    </tr>
  </tbody>
</table>
      </div>
    </section>

      
    </>
  )
}

export default User