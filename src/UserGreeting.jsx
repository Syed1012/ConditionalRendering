import React from 'react'
import PropTypes from 'prop-types'

function UserGreeting(props) {
  
    // if(props.isLoggedIn){
    //    return <h1>Welcome back {props.username}</h1>
    // }
    // else{
    //     return <h2>Your not Logged In</h2>
    // }

    return (props.isLoggedIn ? <h1>Welcome back {props.username}</h1> : <h1>Your not logged In</h1>)
  
}

UserGreeting.propTypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string
}

export default UserGreeting