import React from 'react';;
import theme from './theme.css';;
import $ from 'jquery';;

import Button from 'react-toolbox/lib/button';
import AppBar from 'react-toolbox/lib/app_bar';
import {Card, CardMedia, CardTitle, CardText, CardActions}  from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';
import Dialog from 'react-toolbox/lib/dialog';


export default class myDialog extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
	    active: false
	  };		
	  
	  var actions = [
	    { label: "Cancel", onClick: this.handleToggle },
	    { label: "Save", onClick: this.handleToggle }
	  ];
	};
	

  handleToggle(){
    this.setState({active: !this.state.active});
  }


  render () {
    return (
      <div>
        <Button label='Show my dialog' onClick={this.handleToggle} />
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='My awesome dialog'
        >
          <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
        </Dialog>
      </div>
    );
  }
}
