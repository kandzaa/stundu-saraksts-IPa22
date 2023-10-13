import React, { useState, useEffect } from 'react';
import App from './App';

function Diena() {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch('http://skrazzo.sites.hex.lv/projects/class-list/db.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    fetchUserData();
  }, []);



  return (
    <div>
      {users.map((props,IPa22) => (
        <div key={IPa22}>
          {/* <h1>{props.nosaukums}</h1> */}
          <table>
            <tr>{props.classes[0]}</tr>
            {/* <thead>
              <tr>
                <th>Stunda</th>
                <th>Skolotajs</th>
                <th>Kabinets</th>
              </tr>
            </thead> */}
            <tbody>
              {props.stundas.map((stunda, IPa22) => (
                <>
                <tr key={IPa22}></tr>
                <th>{props.classes[0]}</th>
                </>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Diena;
