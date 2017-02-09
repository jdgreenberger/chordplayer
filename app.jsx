import { Component } from 'react'
import Tone from 'tone'
import styles from './index.styl'

const chords = {
  'cmaj7': ["C4", "E4", "G4", "B4"],
  'dm7': ["D4", "F4", "A4", "C5"],
  'em7': ["E4", "G4", "B4", "D5"],
  'fmaj7': ["F4", "A4", "C5", "E5"],
  'f6': ["F4", "A4", "C5", "D5"],
  'gm7': ["G4", "Bb4", "D5", "F5"],
  'am7': ["A4", "C5", "E5", "G5"]
}

const labels = ['Cmaj7', 'Dm7', 'Em7', 'Fmaj7', 'F6', 'Gm7', 'Am7']

class App extends Component {

  constructor(props) {
    super(props)
    const polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster();
    polySynth.set('envelope', {
        "attack" : 0.5,
        "decay" : 0.5,
        "sustain" : 0.5,
        "release" : 1.5,
    })
    this.state = {polySynth}
  }

  playChord = (label) => {
    this.state.polySynth.triggerAttackRelease(chords[label], "2n");

    // var loop = new Tone.Loop(function(time){
    //   polySynth.triggerAttackRelease(["C4", "E4", "G4", "B4"], "2n");
    // }, "2n");

    // loop.start("1m").stop("4m");
    // Tone.Transport.bpm.value = 120
    // Tone.Transport.start();
  }

  render() {
    return (
      <div className={''}>
        { labels.map(label => {
            console.log(label)
            return(<div
              className={styles['chord-button']}
              onClick={this.playChord.bind(null, label.toLowerCase())}
            >
              {label}
            </div>)
          })
        }
      </div>
    )
  }
}


export default App
