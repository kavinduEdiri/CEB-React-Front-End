import React from 'react';
import './css/User.css';
import Cover from './sub/Cover';

const userData = [
  { id: 1, accountNo: 1, name: 'Mark', address: 'Otto' },
  { id: 2, accountNo: 2, name: 'Jacob', address: 'Thornton' },
  { id: 3, accountNo: 3, name: 'Larry', address: 'the Bird' },
  { id: 4, accountNo: 4, name: 'Larry', address: 'the Bird' },
];

function User({ children }) {
  return (
    <Cover name="User">
      {children}

      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">Area Office</label>
        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">Electricity Account No</label>
        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">Registration Name</label>
        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">Permanent Address</label>
        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" />
      </div>

      <button type="button" className="btn btn-success">Success</button>
      <br /><br />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Account No</th>
            <th scope="col">Register Name</th>
            <th scope="col">Address</th>
            <th scope="col">Option 01</th>
            <th scope="col">Option 02</th>
            <th scope="col">Option 03</th>
          </tr>
        </thead>

        <tbody>
          {userData.map(user => (
            <tr key={user.id}>
              <th scope="row">{user.accountNo}</th>
              <td>{user.name}</td>
              <td>{user.address}</td>
              <td><button type="button" className="btn btn-primary">Update</button></td>
              <td><button type="button" className="btn btn-danger">Delete</button></td>
              <td><button type="button" className="btn btn-warning">Select</button></td>
            </tr>
          ))}
        </tbody>

      </table>
    </Cover>
  );
}

export default User;
