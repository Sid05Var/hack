import axios from "axios";
import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import NavBar from "./NavBar";
import Footer from "./Footer";

function MediDashboard(props) {
  let [visibility, setVisibility] = useState("invisible");
  const [voices, setVoices] = useState([]);
  const GraphData = () => {
    setVisibility("visible");
  };

  //voice to text code
  // State to store conversation history
  const [chatHistory, setChatHistory] = useState([]);

  // Add user message to the conversation history
  const addUserMessageToChat = (message) => {
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { role: "user", message },
    ]);
  };

  // Add Rasa's reply to the conversation history
  const addRasaReplyToChat = (message) => {
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { role: "rasa", message },
    ]);
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // if (!browserSupportsSpeechRecognition) {
  //   return <h1>Your browser dosen't supportspeech to text recognition</h1>;
  // }

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      return <h1>Your browser dosen't supportspeech to text recognition</h1>;
    }

    if (!listening && transcript != "") {
      addUserMessageToChat(transcript);
      funcRasa();
    }
  }, [listening, browserSupportsSpeechRecognition]);
  //rasa code
  const funcRasa = async () => {
    console.log("clicked!");
    try {
      //rasa code axios
      let url = "http://localhost:5005/webhooks/rest/webhook";
      const data = {
        sender: "shamika",
        message: transcript,
      };
      let response = await axios.post(url, data);
      // Log all messages in the response
      response.data.forEach((message) => {
        console.log("result = " + message.text);

        // Add Rasa's reply to the conversation history
        addRasaReplyToChat(message.text);

        // text to voice code
        let speech = new SpeechSynthesisUtterance();
        speech.text = message.text;
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
      });
      // console.log("result = " + response.data[0].text);

      // // Add Rasa's reply to the conversation history
      // addRasaReplyToChat(response.data[0].text);

      // //text to voice code
      // let speech = new SpeechSynthesisUtterance();
      // speech.text = response.data[0].text;
      // let voices = window.speechSynthesis.getVoices();
      // let desiredVoice = voices.find(
      //   (voice) => voice.name === "Google UK English Female"
      // );
      // if (desiredVoice) {
      //   speech.voice = desiredVoice;
      //   console.log(speech.text);
      //   window.speechSynthesis.speak(speech);
      // } else {
      //   console.error("Desired voice not available");
      // }
    } catch (error) {
      console.log("error : " + error);
      alert("Server side error in Rasa.Check console for details.");
    }
  };

  // graph
  let [stylecircle, setStyleCircle] = useState({
    background:
      "conic-gradient(transparent 70deg,rgb(128, 192, 234) 70deg 360deg)",
  });

  // setStyleCircle({background: "conic-gradient(transparent 60deg,rgb(128, 192, 234) 60deg 360deg)"})

  useEffect(() => {
    // Update the style based on the previous state
    setStyleCircle((prevState) => ({
      ...prevState,
      background:
        "conic-gradient(transparent 50deg, rgb(128, 192, 234) 50deg 360deg)",
    }));
  }, []);

  //graph
  let [colorbar, setColorbar] = useState("info");
  const getColorClass = (index) => {
    const totalTime = props.total_time;
    if (index <= totalTime) {
      return "bg-success"; // Change this to the desired color class
    } else {
      return "bg-light";
    }
  };
  useEffect(() => {
    if (props.total_time >= 0) {
      // alert("Well done! You can improve more!");
    }
  }, [props.total_time]);

  const [selectedTab, setSelectedTab] = useState("guidedMeditation");

  // Function to handle tab selection
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <>
      {/* <div className="container d-flex justify-content-center flex-column m-5">
        <button onClick={funcRasa} className="btn btn-info">
          Start
        </button>
        <div className="d-flex flex-column m-5 align-items-center ">
          <div>
            <button
              className="btn btn-info mx-1"
              onClick={()=>{
                SpeechRecognition.startListening();
              }}
              // onClick={finalFunc}
            >
              Speak
            </button>
            <button
              className="btn btn-info mx-1"
              onClick={SpeechRecognition.stopListening}
            >
              Pause
            </button>
            <button className="btn btn-info mx-1" onClick={resetTranscript}>
              Reset
            </button>
          </div>
          <div className="my-3">
            <p className="text-center">Microphone {listening ? "ON" : "OFF"}</p>
            <h5>{transcript}</h5>
            <h5>{transcript===""?"yes null":"not null"}</h5> 
          </div>
        </div>
        <div id="graph-div" className={`${visibility} d-flex flex-column  align-items-center`} >
          <h1>graph</h1>
          <h1>graph</h1>
          <h1>graph</h1>
        </div>
      </div> */}
      <div className="">
        <div className="bgImg2 row ">
          <NavBar textColor="white" />
          <div className=" col-12 d-flex flex-column text-center  text-white row col-12">
            <h1 className="display-4">Your Journey To Mindfullness</h1>
            <p className="fontclass">Breathe and Relax</p>
          </div>
        </div>
        <div className="row ">
          <div className="d-flex justify-content-center p-4">
            {/* <h4 className="mx-4">Guideed Meditation</h4> */}
            {/* <h4 className="mx-4">Practise Mudras</h4> */}
            <button
              className={`btn mx-4 ${
                selectedTab === "guidedMeditation"
                  ? "btn-success"
                  : "btn-outline-success"
              }`}
              onClick={() => {
                handleTabClick("guidedMeditation");
                props.welcomeMsg();
              }}
            >
              Start Meditation
            </button>
            {/* <button
              className={`btn mx-4 ${
                selectedTab === "practiseMudras" ? "btn-success" : "btn-outline-success"
              }`}
              onClick={() => handleTabClick("practiseMudras")}
            >
              Practise Mudras
            </button> */}
          </div>
          <hr />
        </div>
        <div
          className=" row "
          id="id1"
          style={{
            display: selectedTab === "guidedMeditation" ? "block" : "none",
          }}
        >
          <div className="row">
            <div className="col-12  d-flex flex-column align-items-center my-2">
              <div className="col-12 px-3 py-2 p-1 d-flex flex-row justify-content-center  class-bg-mike MikemarginBox">
                <button
                  className="btn "
                  onClick={() => {
                    SpeechRecognition.startListening();
                  }}
                >
                  {listening ? (
                    <i
                      className="fa fa-microphone text-black fa-3x"
                      aria-hidden="true"
                    ></i>
                  ) : (
                    <i
                      className="fa fa-microphone-slash text-black fa-3x"
                      aria-hidden="true"
                    ></i>
                  )}
                </button>
                <button
                  className="mx-4  btn btn-outline-dark"
                  onClick={resetTranscript}
                >
                  Reset
                </button>
              </div>
              <div className="my-3 col-4 p-1 d-flex flex-row justify-content-center ">
                <p className="m-0 user-font text-center text-muted">
                  unmute when u want to speak!
                </p>
                {/* <p className="m-0 user-font text-center">{transcript}</p> */}
              </div>
              {/* Chat history section */}

              <div className="conversation-history m-3 class-history p-0">
                <p className="text-center">Conversation</p>
                {chatHistory.map((item, index) => (
                  <div
                    key={index}
                    className={
                      item.role === "user" ? "user-message" : "rasa-reply"
                    }
                  >
                    {item.role === "user" ? "User: " : "Convo Ai: "}
                    {item.message}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-12 d-flex flex-row justify-content-center justify-content-between">
              {/* <div className="donutGraph bg-warning" style={stylecircle}></div> */}

              <div class="col-12  d-flex flex-row text-center justify-content-center align-items-center">
                <div className="col-12 d-flex flex-row text-center  justify-content-center align-items-center">
                  {Array.from({ length: 11 }, (_, index) => (
                    <div
                      key={index}
                      className={`col-1 border border-1 p-2 ${getColorClass(
                        index
                      )}`}
                    >
                      {index} min
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-12  d-flex my-3 py-1 ">
              {/* <p className="mx-2">
                {props.total_time} completed from your actual time
              </p> */}
              <div className="col-5 marginLeft d-flex flex-row  justify-content-between">
                <div className="class-bg-rect d-flex flex-row p-2 ">
                  <div className="square "></div>
                  <p className="m-0 px-2"> movement count</p>
                </div>
                <div className="class-bg-rect d-flex flex-row p-2">
                  <p className="m-0">
                    {props.total_time} min for {props.mov_count} number of
                    movements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <h4 className="text-success text-center font">
          Well done u can improve more !
        </h4> */}
        {/* <div className="">
          <button className="btn btn-success">Click here to start</button>
        </div> */}
      </div>
      <div
        className="id2"
        style={{ display: selectedTab === "practiseMudras" ? "block" : "none" }}
      >
        <div className="d-flex justify-content-center p-5">
          <button className="btn btn-success text-center">Start</button>
        </div>
        {/* <h1>shamika</h1> */}
      </div>
      <Footer />
    </>
  );
}

export default MediDashboard;
