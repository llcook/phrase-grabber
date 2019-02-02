import React, { Component } from "react"

class VoiceRecognition extends Component {
  constructor(props) {
    // Calls the parent instructor and passes in properties:
    super(props)

    // MOVE STATE FROM APP TO HERE??????????????
    // state = {
    //   start: false,
    //   stop: false
    // }

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
    return recognition
  }

  // Create transcript of spoken word
  bindResult = event => {
    let interimTranscript = ""
    let finalTranscript = ""

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalTranscript += event.results[i][0].transcript
      } else {
        interimTranscript += event.results[i][0].transcript
      }
    }

    this.props.onResult({ interimTranscript, finalTranscript })
  }

  // Starts speech recognition functionality
  start = () => {
    this.recognition.start()
  }

  // Stops speech recognition functionality
  stop = () => {
    this.recognition.stop()
  }

  // Aborts speech recognition while in progress
  abort = () => {
    this.recognition.abort()
  }

  // Call this on page load
  componentDidMount() {
    console.log(this.props);

    this.recognition.addEventListener("result", this.bindResult)

    this.start()
  }

  componentWillUnmount() {
    this.abort()
  }

  render() {
    return null
  }
}

export default VoiceRecognition