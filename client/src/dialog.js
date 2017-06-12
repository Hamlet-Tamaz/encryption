import React from 'react';
import theme from './theme.css';

import Button from 'react-toolbox/lib/button';
import {Card, CardMedia, CardTitle, CardText, CardActions}  from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';
import Dialog from 'react-toolbox/lib/dialog';


export default class MyDialog extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			message: this.props.message,
	    active: false
	  };		
	  

	  this.handleToggle = this.handleToggle.bind(this);
	  this.handleDecrypt = this.handleDecrypt.bind(this);
	  

	  this.actions = [
	    { label: "Close", onClick: this.handleToggle },
	    { label: "Decrypt", onClick: this.Decrypt }
	  ];
	};
	
	handleChange(name, value) {
		console.log('name: ', name, 'value: ', value)
		this.setState({
			[name]:value
		});
	};

  handleToggle(){
    this.setState({active: !this.state.active});
  }

  handleDecrypt() {
		




  	this.handleToggle();
  }


  render () {
    return (
      <div>
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='De/Encryption'>
					
					<Input type='text' label='Message' value={this.state.message} onChange={this.handleChange.bind(this, 'message')} maxLength={120} required></Input>


          <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
        </Dialog>
    	</div>
    )
  }
}
        

  // <Button label='Show my dialog' onClick={this.handleToggle} />
