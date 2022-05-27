import auth0 from "auth0-js";


export default class Auth {
    auth0 = new auth0.WebAuth({
        domain : 'dev--tkcdzyh.us.auth0.com',
        clientID : 'krIWUAhwLySx67rJeJKgrvijlkyMF5pj',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile email'

    })

    constructor(){
        this.login = this.login.bind(this)
    }
    
    login = () => {
        this.auth0.authorize()
    }

    handleAuth = () => {
        this.auth0.parseHash((err, authResult) => {
            if(authResult && authResult.accessToken && authResult.idToken){
                localStorage.setItem('access_token', authResult.accessToken)
                localStorage.setItem('id_token', authResult.idToken)
                let expiresAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime()))
                localStorage.setItem("expiresAt", expiresAt)
                window.location.href = "http://localhost:3000"
            } else {
                console.log(err)
            }
        })
    }

    isAuthenticated(){
        let expiresAt = JSON.parse(localStorage.getItem("expiresAt"))
        return new Date().getTime() < expiresAt
    }

    logout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('id_token')
        localStorage.removeItem('expiresAt')
        window.location.href = "http://localhost:3000/welcome"

    }

    

}