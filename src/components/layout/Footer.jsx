import React from "react";
import {AiFillInstagram,AiFillLinkedin,AiFillGithub} from "react-icons/ai";
const Footer = () => {
  return <footer>
    <div>
        <h2>
            Burger Bounce
        </h2>
        <p>We are trying to give you the best taste possible. </p>
        <br />
        <em>
          We give attention to genuine feedback.
        </em>
        <strong>
          All rights reserved @burgerBounce
        </strong>
    </div>
    <aside>
      <h4>Follow us</h4>
        <a href="https://www.linkedin.com/in/anamika-gour-701a641a4/"><AiFillLinkedin/></a>
        <a href="https://github.com/Anamika1-cpu"><AiFillGithub/></a>
        <a href="https://github.com/Anamika1-cpu"><AiFillInstagram/></a>

    </aside>
  </footer>;
};

export default Footer;
