import React, { Component } from "react"

class VoiceRecognition extends Component {
  constructor(props) {
    // Calls the parent instructor and passes in properties:
    super(props)

    // Verify whether user's browser supports Web Speech API
    const SpeechRecognition = window.SpeechRecognition
      || window.webkitSpeechRecognition
      || window.mozSpeechRecognition
      || window.msSpeechRecognition
      || window.oSpeechRecognition

    // If browser supports, call createRecognition
    // to create a new SpeechRecognition instance
    if (SpeechRecognition != null) {
      this.recognition = this.createRecognition(SpeechRecognition)
      // If browser doesn't support:
    } else {
      console.warn("The current browser does not support the SpeechRecognition API.")
    }
  } 

  // Create SpeechRecognition and assign it values
  createRecognition = (SpeechRecognition) => {
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    return recognition
  }

  // Create transcript of spoken word
  bindResult = event => {
    let finalTranscript = "";
    let interimTranscripts = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {
      var transcript = event.results[i][0].transcript;
      // transcript.replace("\n", "<br>");

      if (event.results[i].isFinal) {
        finalTranscript += transcript;
      }
      else {
        interimTranscripts += transcript;
      }
    }

    this.props.onResult(interimTranscripts, finalTranscript)
  }

  // Starts speech recognition functionality
  start = () => {
    this.recognition.start();
    console.log("LISTENING... See red indicator in tab.");
  }

  // Stops speech recognition functionality
  stop = () => {
    this.recognition.stop()
  }

  // Aborts speech recognition while in progress
  abort = () => {
    this.recognition.abort()
  }

  // Call this on load
  componentDidMount() {
    this.recognition.addEventListener("result", this.bindResult)
    this.start()
  }

  render() {
    return null
  }
}

export default VoiceRecognition