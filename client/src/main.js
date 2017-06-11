const React = require('react');
const theme = require('./theme.css');

console.log("theme: ", theme)

import Button from 'react-toolbox/lib/button'
import AppBar from 'react-toolbox/lib/app_bar'
import {Card, CardMedia, CardTitle, CardText, CardActions}  from 'react-toolbox/lib/card'
import Input from 'react-toolbox/lib/input'


export class Main extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			message: '', 
			expiration: '',
			passphrase: 'blabla'
		};

		// this.handleChange = this.handleChange.bind(this);
	}

	handleChange(name, value) {
		this.setState({
			[name]:value
		});
	}
	
	handleEncrypt() {
		alert('Encrypt')
	}

	handleDecrypt() {
		alert('Decrypt')
	}

	handdlePasshprase() {
		alert('Passphrase')
	}

	render() {
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
			      <Button label="Encrypt" onClick={this.handleEncrypt.bind(this)}/>
			      <Button label="Decrypt" onClick={this.handleDecrypt.bind(this)}/>
			    </CardActions>

			  </Card>

			  <p>Your Passphrase - <strong>{this.state.passphrase}</strong></p>

			  <a href="#" onClick={this.handdlePasshprase.bind(this)}>Get New Passphrase</a>
			</div>
		)
	}
}