import React from 'react';
import theme from './theme.css';
import $ from 'jquery';

import Button from 'react-toolbox/lib/button';
import AppBar from 'react-toolbox/lib/app_bar';
import {Card, CardMedia, CardTitle, CardText, CardActions}  from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';
import Dialog from 'react-toolbox/lib/dialog';
import MyDialog from './dialog.js';

console.log('-------dialog')

export default class Main extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			message: '', 
			secretMsg: '',
			expiration: '',
			passphrase: '',
			open: false
		};
	}

	componentWillMount() {
		this.handdlePasshprase();
  };

	handleChange(name, value) {
		this.setState({
			[name]:value
		});
	};
	
	handdlePasshprase() {
		$.post('https://makemeapassword.org/api/v1/passphrase/plain?pc=1&wc=1&sp=n&minCh=7&ups=4&whenUp=Anywhere', (pass) => {
			console.log('pass: ', pass);
			this.setState({
				passphrase: pass
			})
		})
		.done(function(pass) {
	    console.log( "Successfully retrieved passphrase" );
	  })
	  .fail(function() {
	    console.log( "Unable to retrieve passphrase." );
	  })
	};

	handleEncrypt(mode) {
		console.log('Encrypt: ', this.state.message);

		$.post('/encrypt', {message: this.state.message, 
												passphrase: this.state.passphrase, 
												expiration: this.state.expiration,
												mode: mode}, 
			(pass) => {
					console.log('sent encrypt request', pass);
					this.setState({secretMsg: pass})
			})
	};

	handleDecrypt() {
		alert('Decrypt')
	};


	render() {
		const isOpen = this.state.open;
		var message = this.state.secretMsg;

		let dial = null;

		if(isOpen) {
			dial = <MyDialog message={message} isOpen={isOpen}></MyDialog>;
		} else {
			dial = null;
		}

		return(
			<div>
			  <Card className={theme.Card} theme={theme}>
				  <CardTitle 
			      avatar="https://placeimg.com/80/80/animals"
			      title="Tovia's Enigma"
			      // subtitle="Subtitle here"
			    />


					<Input type='text' label='Name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} required></Input>
					
					<Input type='text' label='Message' value={this.state.message} onChange={this.handleChange.bind(this, 'message')} maxLength={120} required></Input>
					
					<Input type='date' label='Expiration Date' value={this.state.expiration} onChange={this.handleChange.bind(this, 'expiration')} required></Input>


        
				  <CardActions>
			      <Button label="Encrypt" onClick={this.handleEncrypt.bind(this, 'encrypt')}/>
			      <Button label="Decrypt" onClick={this.handleEncrypt.bind(this, 'decrypt')}/>
			    </CardActions>

			  </Card>




			  <p>Your Passphrase - <strong>{this.state.passphrase}</strong></p>

			  <a href="#" onClick={this.handdlePasshprase.bind(this)}>Get New Passphrase</a>

				{dial}
			</div>
		);
	};
};