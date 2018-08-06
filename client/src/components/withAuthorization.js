import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import { firebase } from '../firebase';

const withAuthorization = (authCondition) => (Component) => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
                // console.log(authUser)
                if (!authCondition(authUser)) {
                    this.props.history.push('/register');
                }
            });
        }

        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser => authUser ? <Component /> : null}
                </AuthUserContext.Consumer>
            );
        }
    }
    return withRouter(WithAuthorization);
}

export default withAuthorization;