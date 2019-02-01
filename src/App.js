import React, { Component } from "react";
import VoiceRecognition from "./components/VoiceRecognition"
import "./style.css"

class App extends Component {
  state = {
    start: false,
    stop: false,
  }

  onResult = ({ finalTranscript }) => {
    const result = finalTranscript;

    this.setState({ start: false, finalTranscript: result });
    console.log(result);

    // at this point, mic stops when speech stops
    // if set start: true after console.log, it continues until there's about 10 seconds silence
    // but then the start button doesn't work anymore -- the click event sets start to true
  }

  render() {
    return (
      <>
        {/* Set start to true */}
        <button id="startButton" onClick={() => this.setState({ start: true })}>start</button>

        {this.state.start && (
          <VoiceRecognition
            onResult={this.onResult}
            continuous={true}
            interimResults={true}
            lang="en-US"
          />
        )}

        {/* Shows speech string after recognition stops */}
        <div id="output">{this.state.finalTranscript}</div>

        {/* MAKE THIS WORK !!!!!!!! */}
        <div id="interim">{this.state.interimTranscript}</div>

      </>
    )
  }
}

export default App;