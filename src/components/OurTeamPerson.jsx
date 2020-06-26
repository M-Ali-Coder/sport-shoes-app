import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const OurTeamPerson = ({ img, name, job }) => {
  return (
    <div className="column">
      <div className="teammate-image">
        <img src={img} alt="person-1" className="mr-bottom-30" />
      </div>
      <div className="teammate-info">
        <div className="teammate-name">{name}</div>
        <div className="teammate-job">{job}</div>
      </div>
      <div className="follow-teammate">
        <Link to="#">
          <FaFacebookF />
        </Link>
        <Link to="#">
          <FaInstagram />
        </Link>
        <Link to="#">
          <FaTwitter />
        </Link>
        <Link to="#">
          <FaYoutube />
        </Link>
      </div>
      <div className="teammate-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci maxime architecto
        exercitationem consectetur optio debitis.
      </div>
    </div>
  );
};

export default OurTeamPerson;
