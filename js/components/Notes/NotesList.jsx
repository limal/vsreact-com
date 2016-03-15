import React from 'react';

export default class NotesList extends React.Component {
    render() {
        const { notes } = this.props;

        console.log(notes);

        return (
            <ul className="notesList">
                {notes.map((note, index) => (
                    <li className="notesListItem" key={index}>{note}</li>
                ))}
            </ul>
        )
    }
}
