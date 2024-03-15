import axios from "axios";
function RasaPg() {


  const funcRasa = async () => {
    console.log("clicked!");
    try {
      //rasa code axios
      let url = "http://localhost:5005/webhooks/rest/webhook";
      const data ={
        "sender" : "shamika",
        "message" : "good"
    }
      let response = await axios.post(url, data);
      console.log("result = " + response.data[0].text);
    } catch (error) {
      console.log("error : " + error);
      alert("server side error in rasa");
    }
  };
  
  //***********text to voice***********
  // let speech = new SpeechSynthesisUtterance();
  // let textToVoice = () => {
  //   // let a = document.getElementById("id_h1").innerHTML
  //   // console.log("text = "+a)

  //   speech.text = document.getElementById("id_h1").innerHTML
  //   console.log(speech.text);
  //   window.speechSynthesis.speak(speech);
  // };

  let speech = new SpeechSynthesisUtterance();

  let textToVoice = () => {
    // Set the desired text
    speech.text = document.getElementById("id_h1").innerHTML;

    // Fetch available voices
    let voices = window.speechSynthesis.getVoices();

    // Find the desired voice (Google UK English Female)
    let desiredVoice = voices.find(
      (voice) => voice.name === "Google UK English Female"
    );

    if (desiredVoice) {
      // Set the desired voice
      speech.voice = desiredVoice;
      console.log(speech.text);
      window.speechSynthesis.speak(speech);
    } else {
      console.error("Desired voice not available");
    }
  };

  // Ensure that the 'voiceschanged' event is handled to fetch voices
  window.speechSynthesis.onvoiceschanged = () => {
    // Fetch available voices and update state or use them directly
    let voices = window.speechSynthesis.getVoices();
    // You can update your state or use the voices directly in your application
  };

  return (
    <>
      <h1 id="id_h1">shamika is my name</h1>
      <button onClick={funcRasa} className="btn btn-info">
        Get started rasa
      </button>
      <button
        // disabled={text1.length === 0}
        onClick={textToVoice}
        className="btn btn-info m-2 my-1"
      >
        Listen
      </button>
    </>
  );
}

export default RasaPg;
