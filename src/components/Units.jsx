import React from 'react'
import Cover from './sub/Cover';

function Units({ children }) {
  return (
    <>
      <Cover name="Units">

      {children}

      <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Tariff Block</th>
              <th scope="col">Units Consumed</th>
              <th scope="col">Unit Rate</th>
              
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              
            </tr>
          </tbody>
        </table>

      </Cover>
    </>
  )
}

export default Units