import React from 'react';
import UserProfile from './Github/UserProfile.jsx';
import Repos from './Github/Repos.jsx';
import Notes from './Notes/Notes.jsx';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bio: {},
            notes: [],
            repos: []
        }
    }

    render() {
        return (
            <div className="profile">
                <div className="user">
                    <UserProfile username={this.props.params.username} bio={this.state.bio} />
                </div>
                <div className="repos">
                    <Repos repos={this.state.repos} />
                </div>
                <div className="notes">
                    <Notes notes={this.state.notes} />
                </div>
            </div>
        )
    }
}
