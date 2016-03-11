import React from 'react';

export default class NotesList extends React.Component {
    render() {
        var notes = this.props.notes.map(function(note, index) {
            return <li>{note}</li>;
        });

        return (
            <ul className="notesList">
                {notes}
            </ul>
        )
    }
}
