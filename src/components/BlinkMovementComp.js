import axios from "axios";
function BlinkMovementComp() {
  const funcRasa = async () => {
    console.log("clicked!");
    try {
      // python code axios
      let url = "http://localhost:3000/run-python";
      let response = await axios.get(url);
      console.log("result = " + response.data);
    } catch (error) {
      console.log("error : " + error);
      alert("server side error");
    }
  };

 
  return (
    <>
      <h1 className="idh1">Python code button</h1>
      <button onClick={funcRasa} className="btn btn-info">
        Get started python
      </button>
    </>
  );
}

export default BlinkMovementComp;
