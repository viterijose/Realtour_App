import React from "react";
import { FormBtn, Input } from "../Form"
import "./ModalSignIn.css"
class ModalSignIn extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            email:"",
            password:""
        }
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    }
    handleInputChange = event => {
        const{name,value} = event.target
        this.setState({
            [name]:value
        })
    }
    handleLoginSubmit = event => {
        event.preventDefault();
        //FIREBASE LOGIN

    }
    render() {
        return (
            <div>
                <form>

                    <Input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="Username"
                    />
                    <hr/>
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        type="password"
                        placeholder="Password (required)"
                    />
                    <hr/>
                    <FormBtn 
                        className ="btn btn-success"
                        disabled={!(this.state.username && this.state.password)}
                        onClick = {this.handleLoginSubmit}
                    >
                    Login
                    </FormBtn>
                </form>
            </div>
        )
    }
}
export default ModalSignIn