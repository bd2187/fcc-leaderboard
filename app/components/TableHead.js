"use strict";

import React from 'react';

function TableHead(props) {
  return (
    <thead>
     <tr>
       <td className="numberCol">#</td>
       <td className="camperCol">Camper Name</td>
       <td className="recentCol" onClick={props.onClick.bind(null,
          'https://fcctop100.herokuapp.com/api/fccusers/top/recent')}>
          Points in last 30 days
        </td>
       <td className="alltimeCol" onClick={props.onClick.bind(null,
          'https://fcctop100.herokuapp.com/api/fccusers/top/alltime')}>
          All time points
        </td>
     </tr>
     </thead>
  )
}

export default TableHead;
