import React from 'react';
import UserProfile from './Github/UserProfile.jsx';
import Repos from './Github/Repos.jsx';
import Notes from './Notes/Notes.jsx';
import Rebase from 're-base';
import Catalog from './Catalog.jsx';

const base = new Rebase.createClass('https://fiery-heat-9003.firebaseio.com/');

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bio: {},
            notes: ['a', 'b', 'c'],
            repos: []
        }
        this.username = '';
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
        var data = this.state.notes;
        data[this.state.notes.length] = newNote;

        base.post(this.username, {
            data: data
        });
    }

    handleRemoveNote(index) {
        var data = this.state.notes;
        data[index] = null;

        base.post(this.username, {
            data: data
        });
    }

    init(username) {
        this.ref = base.bindToState(username, {
            context: this,
            asArray: true,
            state: 'notes'
        });

        this.username = username;
    }

    render() {
        return (
            <div className="profile">
                <Catalog />
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
                        addNote={(newNote) => this.handleAddNote(newNote)}
                        removeNote={(index) => this.handleRemoveNote(index)} />
                </div>
            </div>
        )
    }
}
