import React from 'react';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://pacific-tundra-37090.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        return (
            <article className="form br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset 
                            id="sign_up" 
                            className="ba b--transparent ph0 mh0"
                        >
                        <legend className="white f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <input 
                                className="white-sbg b pa2 input-reset ba hover-bg-black hover-white w-100" 
                                type="text" 
                                name="name"  
                                id="name" 
                                placeholder="Name" 
                                onChange={this.onNameChange}
                            />
                        </div>
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
                            onClick={this.onSubmitSignIn}
                            className="b ph3 pv2 input-reset ba b--black grow pointer f6 dib" 
                            type="submit" 
                            value="Register" 
                        />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;