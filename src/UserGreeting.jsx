import propsTypes from "prop-types"

function UserGreeting(props){
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginMessage = <h2 className="login-message">Please Login</h2>



    return (props.isLoggedIn ? welcomeMessage : loginMessage)
}

UserGreeting.propstypes = {
    isLoggedIn: propsTypes.bool,
    username : propsTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting;

