import React, { Component } from 'react'

export default class Scoreboard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            score: 0,
            name: 'Anurag'
        }
    }

    changeName = () => {
        this.setState({ name: 'Ganesha'})
    }

    increaseScore = () => {
        this.setState((prevState) => ({
            score: prevState.score + 4
        })
        );
    }

    decreaseScore = () => {
        this.setState((prevState) => ({
            score: prevState.score - 1
        })
        );
    }

  render() {
    return (
    <div>
        <h1>Scoreboard</h1>
        <h2>{this.state.name} has score {this.state.score}</h2>
        <button onClick={this.changeName}>Chnage Name</button>
        
        <button onClick={this.increaseScore}>Ince</button>

        <button onClick={this.decreaseScore}>Ince</button>
    </div>
    )
  }
}
