"use strict";

import React from 'react';
import PropTypes from 'prop-types';

function UserImage(props) {
  var image= props.image;
  var user = props.user;
  return (
    <img className="userAvatar" src={image} alt={`Avatar for ${user}`}/>
  )
}
UserImage.propTypes = {
  image: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
}

function CampersData(props) {
  var {user, index} = props;
  return (
    <tr>
     <td className="alignCenter">{index + 1}</td>
     <td className="camperCol">
      <a href={`https://www.freecodecamp.com/${user.username}`} target="_blank">
        <div className="userLink">
         <UserImage image={user.img} user={user.username}/>
        <span className="username">{user.username}</span>
        </div>
      </a>
     </td>
     <td className="alignCenter">{user.recent}</td>
     <td className="alignCenter">{user.alltime}</td>
    </tr>
  );
}
CampersData.propTypes = {
  user: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default CampersData;
