// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {phrase: '', count: 0}

  onEnteringPhrase = event => {
    this.setState({
      phrase: event.target.value,
      count: event.target.value.length,
    })
  }

  render() {
    const {phrase, count} = this.state
    return (
      <div className="bg_container">
        <div className="main_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
          <div className="second_container">
            <h1>Calculate the Letters you enter</h1>
            <div>
              <label htmlFor="line">Enter the Phrase</label>
              <br />
              <input
                id="line"
                type="text"
                value={phrase}
                placeholder="Enter the Phrase"
                onChange={this.onEnteringPhrase}
              />
            </div>
            <div className="counter_container">
              <p className="count">No.of letters: {count}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
