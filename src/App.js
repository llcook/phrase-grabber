import React, { Component } from "react";
import VoiceRecognition from "./components/VoiceRecognition"
import "./style.css"

class App extends Component {
  state = {
    start: false,
    stop: false,
    interimTranscript: "",
    finalTranscript: ""
  }

  onResult = ({ finalTranscript }) => {
    const result = finalTranscript

    this.setState({ start: false, finalTranscript: result });
    console.log(result);
  }

  render() {
    return (
      <>
        {/* Set start to true */}
        <button onClick={() => this.setState({ start: true })}>start</button>

        {this.state.start && (
          <VoiceRecognition
            onResult={this.onResult}
            continuous={true}
            lang="en-US"
          />
        )}

        <div id="output">{this.state.finalTranscript}</div>
      </>
    )
  }
}

export default App;