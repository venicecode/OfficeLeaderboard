import React, {Component} from 'react';

class HeaderMenu extends Component {
  render() { 
    return ( 
        <div className="header-menu" >
        <h1>Company: {this.props.company.name}</h1>
        <h2>Office: {this.props.office.name}</h2>
        </div>

    
    );
  }
}

export default HeaderMenu;