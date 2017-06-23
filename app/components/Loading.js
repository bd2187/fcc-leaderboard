"use strict";

import React from 'react';

class Loading extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: 'Loading'};
  }
  render(){
    return (
      <div className="loader"></div>
    );
  }
}

export default Loading;
