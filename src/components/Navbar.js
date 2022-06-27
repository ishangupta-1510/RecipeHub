import React, {useState} from "react";
import { Link } from "react-router-dom";
import { faHome, faList } from "@fortawesome/free-solid-svg-icons"
import Sidebar from "./Sidebar";
function Navbar() {
  const [showsidebar, setshowsidebar] = useState(false);
  function closesidebar() {
    setshowsidebar(false);
  }
    const links = [
        {
            name: "HOME",
            path: "/",
            icon: faHome
        },
        {
            name: "RECIPIES",
            path: "/recipies",
            icon: faList
        }
    ]
  return (
    <>
      {/* <Sidebar links = {links} /> */}
      <div className="navbar">
        <Link to="/" className="ftc">
          R<span className="bit">ec</span>ipesHub
        </Link>
        <div className="links">
          { links.map(link => (
              <Link to={link.path} key={link.name}>{link.name}</Link>
          ))}
        </div>
        <div onClick={
            !showsidebar ? (
              () => setshowsidebar(true)
            ) : (
              () => setshowsidebar(false)
            )
          } className={showsidebar ? "sidebar-btn active" : "sidebar-btn"}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showsidebar && <Sidebar links={links} close={closesidebar} />}
    </>
  );
}

export default Navbar;
