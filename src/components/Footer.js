import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
      <section className="row  lastSection flex-column p-3 ">
        <div className=" col-12  d-flex justify-content-between">
          <h4>Meditation</h4>
          <div className="d-flex">
          <Link to="/about" className="text-black m-0 d-flex align-items-center btn ">About</Link>
            <Link to="/" className="text-black m-0 d-flex align-items-center btn ">Home</Link>
          </div>
        </div>
        <hr />
        <div className="col-12 d-flex  justify-content-center my-2">
          <div>
            <h4>Our Contact</h4>
            <p className="m-0">abc@gmail.com</p>
            <p className="m-0">+(91)932567766</p>
          </div>
          <div className="paddingClass">
            <h4>Feedback</h4>
            {/* <Link to="/feedback" className="text-black m-0 d-flex align-items-center btn ">Click here for Feedback</Link> */}
            <Link to="/feedback">Give Feedback</Link>
          </div>
        </div>
        {/* <!-- <img src="./images/contactimg.png" alt="" className="contactImgWidth"> --> */}
      </section>
    </>
  );
}

export default Footer;
