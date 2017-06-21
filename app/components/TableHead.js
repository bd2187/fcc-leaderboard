"use strict";

import React from 'react';
import PropTypes from 'prop-types';

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

TableHead.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default TableHead;
