import { FaDiscord, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { IconContext } from "react-icons";

import './SocialIcons.css'

const SocialIcons = () => {
    return (
    <IconContext.Provider value={{ color:"white", size:"1.5em"}}>
    <div className="socialIcons">
      <FaDiscord />
      <FaFacebookF />
      <FaInstagram />
      <FaTwitter />
    </div>
    </IconContext.Provider>
    )
}

export default SocialIcons;