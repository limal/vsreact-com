import React from 'react';

export default class UserProfile extends React.Component {
    render() {
        return (
            <h3>User Profile {this.props.username}</h3>
        )
    }
}
