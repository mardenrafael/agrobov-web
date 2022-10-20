import react, { PropsWithChildren } from "react";

export default class LoginForm extends react.Component {
    constructor(props: PropsWithChildren) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    async getAuthorizationToken(data: FormData) {
        const TOKEN = await fetch("http://localhost:4000/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
            "Content-Type": "application/json"
            }
        }).then((res) => {
            return res.json()
        })
        
        const TOKEN_WITH_BEARER = `Bearer ${TOKEN.token}`

        console.log(TOKEN_WITH_BEARER);
        
        return TOKEN_WITH_BEARER
        
    }

    handleChange(event) {
    event.preventDefault()

    const { name, value }= event.target        
    
    this.setState({
            [name]: value 
        })

    }

    handleSubmit() {
        
        const TOKEN = this.getAuthorizationToken(this.state);

        console.log(TOKEN);
        
    }

    render(): react.ReactNode {
        return(
            <>
                <label htmlFor="email">
                    Email:
                    <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange}/>    
                </label> 
                <br />   
                <label htmlFor="password">
                    Senha:
                    <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange}/>
                </label>
                <br />
                <button onClick={this.handleSubmit}>
                    login    
                </button>           
            </>
        )
    }
}