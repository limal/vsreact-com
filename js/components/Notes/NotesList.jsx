import React from 'react';

export default class NotesList extends React.Component {
    render() {
        const { notes } = this.props;

        return (
            <ul className="notesList">
                {notes.map((note, index) => (
                    <li className="notesListItem" key={index}>
                        {note}
                        <a onClick={() => this.props.removeNote(index)}>X</a>
                    </li>
                ))}
            </ul>
        )
    }
}
