"use strict";

import React from 'react';
import PropTypes from 'prop-types';

function highlightCategory(currentEndpoint, recentEndpoint) {
  var recent, allTime;
  if (currentEndpoint === recentEndpoint) {
    recent = <span className='currentCategory'>Recent</span>;
    allTime = <span>All time</span>;
  } else {
    recent = <span>Recent</span>;
    allTime = <span className='currentCategory'>All time</span>;
  }
  return {recent, allTime};
}

function TableHead(props) {
  var recentEndpoint = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
  var allTimeEndpoint = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
  var category = highlightCategory(props.endpoint, recentEndpoint);
  return (
    <thead>
     <tr>
       <td className="numberCol">#</td>
       <td className="camperCol">Camper Name</td>
       <td className="recentCol category"
           id="recent"
           onClick={props.onClick.bind(null, recentEndpoint)}>
          {category.recent}
        </td>
       <td className="alltimeCol category"
           id="alltime"
           onClick={props.onClick.bind(null, allTimeEndpoint)}>
          {category.allTime}
        </td>
     </tr>
     </thead>
  )
}

TableHead.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default TableHead;
