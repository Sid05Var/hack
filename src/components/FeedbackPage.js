import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function FeedbackPage() {
  let rectNo = 100;
  let [rectStyle, setRectStyle] = useState({ width: "50px", height: "100px" });

  useEffect(() => {
    if (rectNo >= 100) {
      setRectStyle({ width: "50px", height: "200px" });
    }
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render

  return (
    <>
      <NavBar />
      <h1>feedback page</h1>
      <Footer/>

      {/* <div></div> */}
      {/* <div class="container abc2">
        <div class="row">
            <div class="col-10 bg-warning">
              <p className="">a</p>
            </div>
            <div class="col-6 bg-success">
              <p className="">a</p>
            </div>
            <div class="col-10 bg-info">
              <p className="">a</p>
            </div>
            <div class="col-5 bg-secondary">
              <p className="">a</p>
            </div>
            <div class="col-8 bg-danger">
              <p className="">a</p>
            </div>
        </div>
      </div> */}
      
    </>
  );
}
export default FeedbackPage;
