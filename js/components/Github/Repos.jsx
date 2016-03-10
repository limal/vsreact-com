import React from 'react';

export default class Repos extends React.Component {
    render() {
        return (
            <h3>Repos</h3>
        )
    }
}

Repos.propTypes = {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
};
