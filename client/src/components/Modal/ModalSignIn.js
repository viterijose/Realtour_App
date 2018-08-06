import React from "react";
import { FormBtn, Input } from "../Form"
// import { withRouter } from 'react-router-dom';
// import { RegisterLink } from "../../pages/Register";
import { auth } from '../../firebase';

// const SignInPage = ({ history }) =>
//     <div>
//         <ModalSignIn history={history} />
//         <RegisterLink />
//     </div>

class ModalSignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: null,
        }
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    }
    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleLoginSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        const { history } = this.props;
        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                // history.push('/myListings');
                this.close();
            })
            .catch(error => this.setState({ error: error }))

    }
    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === "" || email === "";

        return (
            <div>
                <form>

                    <Input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="Email"
                    />
                    <hr />
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <hr />
                    <FormBtn
                        className="btn btn-success"
                        disabled={isInvalid}
                        onClick={this.handleLoginSubmit}
                    >
                        Login
                    </FormBtn>
                    {error && <p>{error.message}</p>}
                </form>
                {/* <RegisterLink /> */}
            </div>
        )
    }
}

// export default withRouter(SignInPage);aa

export default ModalSignIn ;