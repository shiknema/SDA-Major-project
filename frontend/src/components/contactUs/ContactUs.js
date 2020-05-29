import React from "react";
import SlackMethodApi from "../../api/SlackMethodApi";
import { Text } from '../../containers/Language';

class ContactUs extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            name:'',
            emailAddress:'',
            message:''
        };
        this.handleSubmit.bind(this);
    }

    async createSlackMessage(postData) {
        console.log("inside create slack message");
        try {
            await SlackMethodApi.createSlackMessage(postData);
            }
        catch (e) {
            console.error(e);
        }
    }

    handleSubmit = () => {
        console.log("inside handel submit");
        this.createSlackMessage({name:this.state.name, emailAddress:this.state.emailAddress, message:this.state.message});

        this.setState({name:''});
        this.setState({emailAddress:''});
        this.setState({message:''});
    };

render() {
    return (
        
           
    <div>
        <h4>If you want to contact us, please fill the form.</h4>
        
            <div className= "card-body col-sm-10 mt-3">
                <div className="form-group row">
                    <label for="name" class="col-sm-2 col-form-label"><Text tid="name" /></label>

                    <textarea 
                        className="form-control col-sm-8"
                        placeholder="Type your name here"
                        value={this.state.name}
                        onChange={e => this.setState({name:e.target.value})} />
                </div>

                <div className="form-group row">
                    <label for="eamil" class="col-sm-2 col-form-label"><Text tid="EmailAddress" /></label>

                    <textarea 
                        className="form-control col-sm-8"
                        placeholder="Type your email address here"
                        value={this.state.emailAddress}
                        onChange={e => this.setState({emailAddress:e.target.value})} />
                </div>

                <div className="form-group row">
                    <label for="message" class="col-sm-2 col-form-label"> <Text tid="Message" /></label>

                    <textarea rows="10"
                        className="form-control col-sm-8"
                        placeholder="Type your message here"
                        value={this.state.message}
                        onChange={e => this.setState({message:e.target.value})} />
                </div>

                <div className="form-group row">
                    <div className="offset-sm-2">
                        <button   
                            className="btn btn-outline-success" 
                            onClick={this.handleSubmit}>
                           <Text tid="Submit" /> 
                        </button> 
                    </div>
                </div>
            </div>   
    
</div>
    )
}


} 

export default ContactUs;