import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import { firebase } from '../firebase';

const withAuthorization = (authCondition) => (Component) => {
    class WithAuthorization extends React.Component {
        constructor(props){
            super(props)
        }
        componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
                if (!authCondition(authUser)) {
                    this.props.history.push('/register');
                }
            });
        }

        render() {
            const{params} = this.props.match
            return (
                <AuthUserContext.Consumer>
                {authUser => authUser ? <Component params={params}/> : null}
                </AuthUserContext.Consumer>
            );
        }
    }
    return withRouter(WithAuthorization);
}

export default withAuthorization;