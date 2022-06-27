import React from 'react'
import { Link,Location } from "react-router-dom";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Sidebar({links, close}) {
  return (
    <div>
        <div className="sidebar" onClick={close}>
        { links.map(link => (
          <Link className='sidebar-link' to={link.path} key={link.name} >
              <FontAwesomeIcon className='sidebar-icon' icon={link.icon}></FontAwesomeIcon>
              {link.name}
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar