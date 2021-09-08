import React, {Component} from 'react';
import './App.css';
import Form from './Form';
import Table from './Table';

class App extends Component {
    // Create array of characters to include in table and pass as arg to Table component
    state = {
        characters: []
    }
    removeCharacter = (index) => {
        const {characters} = this.state

        this.setState({
            // filter creates a new array - best for modifying arrays in js
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }

    render () {
        const {characters} = this.state

        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
export default App