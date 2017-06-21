"use strict";

import React from 'react';

function UserImage(props) {
  var image= props.image;
  var user = props.user;
  return (
    <img className="userAvatar" src={image} alt={`Avatar for ${user}`}/>
  )
}

function CampersData(props) {
  var {user, index} = props;
  return (
    <tr>
     <td className="numberCol">{index + 1}</td>
     <td className="camperCol">
      <a href={`https://www.freecodecamp.com/${user.username}`} target="_blank">
       <UserImage image={user.img} user={user.username}/>
        {user.username}
      </a>
     </td>
     <td className="recentCol">{user.recent}</td>
     <td className="alltimeCol">{user.alltime}</td>
    </tr>
  );
}

export default CampersData;
