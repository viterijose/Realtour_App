import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import { firebase } from '../firebase';

const withAuthorization = (authCondition) => (Component) => {
    class WithAuthorization extends React.Component {
        // constructor(props){
        //     super(props)
        // }
        componentDidMount() {
            // console.log(this.props)
            firebase.auth.onAuthStateChanged(authUser => {
                if (!authCondition(authUser)) {
                    this.props.history.push('/register');
                }
            });
        }

        render() {
            // const{match} = this.props
            // console.log(this.props)
            return (
                <AuthUserContext.Consumer>
                    {authUser => authUser ? <Component params={this.props}/> : null}
                </AuthUserContext.Consumer>
            );
        }
    }
    return withRouter(WithAuthorization);
}

export default withAuthorization;