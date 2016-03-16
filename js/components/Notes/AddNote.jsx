import React from 'react';

export default class AddNote extends React.Component {
    handlesSubmit() {
        var newNote = this.note.value;
        this.note.value = '';
        this.props.addNote(newNote);
    }

    setRef(ref) {
        this.note = ref;
    }

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Add new note..." ref={(ref) => this.setRef(ref)} />
                <span className="input-group-btn">
                    <button onClick={() => this.handlesSubmit()}>Submit</button>
                </span>
            </div>
        )
    }
}

AddNote.propTypes = {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
};
