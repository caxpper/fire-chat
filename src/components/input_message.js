import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendNewMessage} from '../actions';

class InputMessage extends Component{

    constructor(props){
        super(props);

        this.state = {
            message: ''
        }
    }

    handleSendMessage(e){
        e.preventDefault();

        console.log('Message to send:', this.state.message);

        this.props.sendNewMessage('Fred', this.state.message);

        this.setState({
            message: ''
        });

    }

    render(){
        return (
            <form className='row' onSubmit={this.handleSendMessage.bind(this)}>
                <div>
                    <input type="text" className='col s10' value={this.state.message} onChange={e => this.setState({message:e.target.value})}/>
                </div>   
                <div className='col s2'>             
                    <button className='btn right'>Send Message</button>
                </div>
            </form>

        )
    }

}

export default connect(null,{sendNewMessage})(InputMessage);