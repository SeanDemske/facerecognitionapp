import React from 'react';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://pacific-tundra-37090.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if(user.email){
                    console.log(user)
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="form br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset 
                            id="sign_up" 
                            className="ba b--transparent ph0 mh0"
                        >
                        <legend className="f1 fw6 ph0 mh0 white">Sign In</legend>
                        <div className="mt3">
                            <input 
                                className="white-sbg b pa2 input-reset ba hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address" 
                                placeholder="E-Mail Address" 
                                onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <input 
                                className="white-sbg b pa2 input-reset ba hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password" 
                                placeholder="Password"
                                onChange={this.onPasswordChange}
                            />
                        </div>
                        </fieldset>
                        <div className="">
                        <input 
                            className="b ph3 pv2 input-reset ba b--black  grow pointer f6 dib" 
                            type="submit" 
                            value="Sign in" 
                            onClick={this.onSubmitSignIn}
                        />
                        </div>
                        <div className="lh-copy mt3">
                            <p 
                                onClick={() => onRouteChange('register')} 
                                className="f6 link dim white db pointer">Register
                            </p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default SignIn;