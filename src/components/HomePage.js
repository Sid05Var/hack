import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import axios from "axios";

function HomePage(props) {
  // python code axios
  // const cameraOn = async () => {
  //   console.log("clicked!");
  //   try {
  //     let url = "http://localhost:3000/run-python";
  //     let response = await axios.get(url);
  //     console.log("result = " + response.data);
  //     // GraphData();
  //   } catch (error) {
  //     console.log("error : " + error);
  //     alert("python code server side error");
  //   }
  // };
  return (
    <>
      <main className="container-fluid ">
        <section className="row bgImg">
          <NavBar />
          <section className="col-12 d-flex flex-column justify-content-center align-items-center">
            <h1 className=" text-white display-2  ">MEDITATION</h1>
            <h3 className=" py-5 text-white">
              “Strive to still your thoughts. Make your mind one-pointed in
              meditation.”
            </h3>
            {/* <Link onClick={props.welcomeMsg} to="/dashboard" className="btn btn-outline-light buttonWidth "> */}
            {/* <Link
              onClick={props.welcomeMsg}
              to="/dashboard"
              className="btn btn-outline-light buttonWidth "
            >
              GET STARTED
            </Link> */}
            <Link
              // onClick={() => {
              //   // props.cameraOnFunc
              //   props.welcomeMsg(); // call the welcome message function
              //   // props.setClicked(false); // set clicked state to false
              // }}
              to="/dashboard"
              className="btn btn-outline-light buttonWidth"
            >
              GET STARTED
            </Link>
          </section>
        </section>
        <section className="row  my-5 secondSection">
          <h1 className=" text-center section2HeadingColor colorGreen">
            Why Meditation?
          </h1>
          <h4 className="py-3 text-center colorBrown">
            A Brief description about meditation benefits...
          </h4>
          <div className="col-4 px-3">
            <div className="card rounded-0 border border-0 card1">
              {/* <!-- <div className="card-header bg-secondary">header with card-header</div> --> */}
              <div className="card-body border border-0 p-0 cardHover">
                <img src="./images/img2.jpg" alt="" className="cardImg" />
                <div className="p-3">
                  <h5 className="card-title my-2 colorBrown">
                    1. REDUCES STRESS
                  </h5>
                  <p className="card-text colorBrown">
                    Meditation can produce a deep state of relaxation and a
                    tranquil mind. During meditation, you focus your attention
                    and eliminate the stream of jumbled thoughts that may be
                    crowding your mind and causing stress. This process may
                    result in enhanced physical and emotional well-being.
                  </p>
                  <a href="/" className="text-black colorBrown">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 px-3">
            <div className="card rounded-0 border border-0 card1">
              {/* <!-- <div className="card-header bg-secondary">header with card-header</div> --> */}
              <div className="card-body border border-0 p-0 cardHover">
                <img src="./images/img4.jpg" alt="" className="cardImg" />
                <div className="p-3">
                  <h5 className="card-title my-2 colorBrown">
                    2. PROMOTES PRODUCTIVITY
                  </h5>
                  <p className="card-text colorBrown">
                    Meditation can produce a deep state of relaxation and a
                    tranquil mind. During meditation, you focus your attention
                    and eliminate the stream of jumbled thoughts that may be
                    crowding your mind and causing stress. This process may
                    result in enhanced physical and emotional well-being.
                  </p>
                  <a href="/" className="text-black colorBrown">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 px-3">
            <div className="card rounded-0 border border-0 card1">
              {/* <!-- <div className="card-header bg-secondary">header with card-header</div> --> */}
              <div className="card-body border border-0 p-0 cardHover">
                <img src="./images/img3.jpg" alt="" className="cardImg" />
                <div className="p-3">
                  <h5 className="card-title my-2 colorBrown">
                    3. HELPS YOU STAY FOCUSED
                  </h5>
                  <p className="card-text colorBrown">
                    Meditation can produce a deep state of relaxation and a
                    tranquil mind. During meditation, you focus your attention
                    and eliminate the stream of jumbled thoughts that may be
                    crowding your mind and causing stress. This process may
                    result in enhanced physical and emotional well-being.
                  </p>
                  <a href="/" className="text-black colorBrown">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p></p>
        </section>

        <section className="row  my-5 thirdSection p-4 ">
          <div className="col-12  d-flex justify-content-between  ">
            <img
              src="./images/img10.png"
              alt=""
              className="meditationImgWidth"
            />
            <div className="col-6 my-5">
              {/* <a href="/" className="h5 colorGreen ">
                About Our Goal
              </a> */}
              <h1 className="colorGreen m-0 display-2">Here and now</h1>
              <h1 className="colorGreen m-0 display-4">is where meditation</h1>
              <h1 className="colorGreen m-0 display-5">begins...</h1>
              <p className="text-muted my-4">
                "Nurture a deeper understanding of yourself by nurturing the
                connection between your mind,body, and spirit via our meditation
                website". <br /> We are here to create magic in your lives.Get
                started!
              </p>
              {/* <button className="btn btn-outline-success buttonWidth ">
                GET STARTED
              </button> */}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
export default HomePage;
