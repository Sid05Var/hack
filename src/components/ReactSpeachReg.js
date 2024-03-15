import SpeechRecognition , {useSpeechRecognition} from "react-speech-recognition";

function ReactSpeachReg() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,

  } =  useSpeechRecognition()

  if(!browserSupportsSpeechRecognition){
    return <h1>Your browser dosen't supportspeech to text recognition</h1>
  }
  return (
    <>
    <div>
      <h1>speach recog</h1>
      <p>Microphone {listening?"ON":"OFF"}</p>
      <button className="btn btn-info mx-1" onClick={SpeechRecognition.startListening}>Start</button>
      <button className="btn btn-info mx-1" onClick={SpeechRecognition.stopListening}>Stop</button>
      <button className="btn btn-info mx-1" onClick={resetTranscript}>Reset</button>
      <p>transscript = {transcript}</p>
    </div>
    </>
  );
}

export default ReactSpeachReg;
/*
transscript = whatever we are speaking it will be stored inside transscript
listening is a boolean variable
resetTransscript is a browser
browserSupportsSpeechRecognition


all 4 methods i.e 
    transscript,
    listening,
    resetTransscript,
    browserSupportsSpeechRecognition,
are captured


after this will check if our browser supports this functionality or not.
if does not support then return

then if microphone is on then then ON is displayed if not then OF

whenever will press start btn then speech recog will start capturing whatever we or 
user speak

there is a speech method to stop listening which will stop what user is listening

reset will re set i.e delet all the data which was present.

Finally will display the transscript on the screen i.e whatever is spoken
, will display it inside a paragraph
*/