import React from 'react';
import UserProfile from './Github/UserProfile.jsx';
import Repos from './Github/Repos.jsx';
import Notes from './Notes/Notes.jsx';
import Rebase from 're-base';

const base = new Rebase.createClass('https://fiery-heat-9003.firebaseio.com/');

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bio: {},
            notes: ['a', 'b', 'c'],
            repos: []
        }
    }

    componentDidMount() {
        this.init(this.props.params.username);
    }

    componentWillReceiveProps(nextProps) {
        base.removeBinding(this.ref);
        this.init(nextProps.params.username);
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    handleAddNote(newNote) {
        //this.ref.child(this.username).child(this.state.notes.length).set(newNote);
    }

    init(username) {
        this.ref = base.bindToState(username, {
            context: this,
            asArray: true,
            state: 'notes'
        });

        console.log(this.ref);
    }

    render() {
        return (
            <div className="profile">
                <div className="user">
                    <UserProfile username={this.props.params.username} bio={this.state.bio} />
                </div>
                <div className="repos">
                    <Repos username={this.props.params.username} repos={this.state.repos} />
                </div>
                <div className="notes">
                    <Notes
                        username={this.props.params.username}
                        notes={this.state.notes}
                        addNote={(newNote) => this.handleAddNote(newNote)} />
                </div>
            </div>
        )
    }
}
