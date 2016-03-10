import React from 'react';
import UserProfile from './Github/UserProfile.jsx';
import Repos from './Github/Repos.jsx';
import Notes from './Notes/Notes.jsx';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.username = this.props.params.username;
        this.state = {
            bio: {},
            notes: ['a', 'b', 'c'],
            repos: []
        }
    }

    render() {
        return (
            <div className="profile">
                <div className="user">
                    <UserProfile username={this.username} bio={this.state.bio} />
                </div>
                <div className="repos">
                    <Repos username={this.username} repos={this.state.repos} />
                </div>
                <div className="notes">
                    <Notes notes={this.state.notes} />
                </div>
            </div>
        )
    }
}
