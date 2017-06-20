"use strict";

import React from 'react';
import Table from './Table';

// class Nav extends React.Component {
//   render() {
//     var arrr = [1, 2, 3, 4, 5];
//     var arr2 = Array.from(arrr);
//     return (
//       {arrr.map(function(num){
//         return <li>{num}</li>
//       })}
//     )
//   }
// }


class App extends React.Component {
  render() {
    return (
      <div className="container">

        <Table />
      </div>
    )
  }
}

export default App;
