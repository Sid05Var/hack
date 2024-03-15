import { Link } from "react-router-dom";


function NavBar(props) {
  return (
    <>
      <header className="col-12 ">
        <div className="d-flex justify-content-between p-3">
          <div className="d-flex">
            <p className={` text-${props.textColor} m-0 d-flex align-items-center font`}>Meditate</p>
            {/* <p className="text-black m-0 d-flex align-items-center font">Meditate</p> */}
            {/* <Link to="/about" className={`text-${props.textColor} m-0 d-flex align-items-center btn `}>About</Link> */}
            <Link to="/" className={`text-${props.textColor} m-0 d-flex align-items-center btn `}>Home</Link>
          </div>
          {/* <div>
            <button className="btn text-white">Login</button>
            <button className="btn btn-outline-light">Create an Account</button>
          </div> */}
        </div>
      </header>
    </>
  );
}
export default NavBar;
