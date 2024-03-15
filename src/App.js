import AboutPage from "./components/AboutPage";
import FeedbackPage from "./components/FeedbackPage";
import HomePage from "./components/HomePage";
import MediDashboard from "./components/MediDashboard";
import SpeechRecognition , {useSpeechRecognition} from "react-speech-recognition";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Routes , Route , BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";



function App() {
  let [movcount, setMovCount] = useState("-")
  let [totaltime, setTotalTime] = useState("-")
  const cameraOn = async () => {
    console.log("clicked!");
    try {
      let url = "http://localhost:3000/run-python";
      let response = await axios.get(url);
      console.log("result = " + response.data);

      let str = response.data
      console.log(str)
      let array = str.split(" ")
      setTotalTime(array[0])
      setMovCount(array[1])
      console.log("time in minutes user took to meditate = "+array[0]) 
      console.log("total number of movments of movements count = "+array[1]) 
      // GraphData();
    } catch (error) {
      console.log("error : " + error);
      alert("python code server side error");
    }
  };
  
  function clickFunc(){
    cameraOn();
    let speech = new SpeechSynthesisUtterance();
    speech.text = "Welcome...Camera is started...unmute to speak ";
    let voices = window.speechSynthesis.getVoices();
    let desiredVoice = voices.find(
      (voice) => voice.name === "Google UK English Female"
    );
    if (desiredVoice) {
      speech.voice = desiredVoice;
      console.log(speech.text);
      window.speechSynthesis.speak(speech);
    } else {
      console.error("Desired voice not available");
    }
  };
  window.speechSynthesis.onvoiceschanged = () => {
    let voices = window.speechSynthesis.getVoices();
  };


  let total_time = [20]
  return (
    <>
    {/* <h1 id="id_h1">welcome shamika</h1> */}
      {/* <Router>
        <Switch>
          <Router path="/About">
            <AboutPage />
          </Router>

          <Router path="/feedback">
            <FeedbackPage/>
          </Router>
          
          <Router path="/">
            <HomePage />
          </Router>
        </Switch>
      </Router> */}
      <Router>
        <Routes>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/" element={<HomePage  />}  />
          <Route path="/feedback" element={<FeedbackPage/>}/>
          <Route path="/dashboard" element={<MediDashboard total_time={totaltime}  mov_count = {movcount} welcomeMsg={clickFunc}/>}/>
        </Routes>
      </Router>
      
     
      {/* <RasaPg/>
    <BlinkMovementComp/>
    <ReactSpeachReg/> */}
    </>
  );
}

export default App;
