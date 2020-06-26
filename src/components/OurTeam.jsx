import React from "react";
import OurTeamPerson from "./OurTeamPerson";

const OurTeam = () => {
  return (
    <div className="container meet-out-team">
      <h1>Our Team</h1>
      <div className="row">
        <OurTeamPerson
          img="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/about-1.png"
          name="jhon doe"
          job="designer"
        />
        <OurTeamPerson
          img="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/about-2.png"
          name="jan gray"
          job="public relations"
        />
        <OurTeamPerson
          img="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/about-3.png"
          name="jully wood"
          job="customer support"
        />
        <OurTeamPerson
          img="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/about-4.png"
          name="troy gray"
          job="markting director"
        />
      </div>
    </div>
  );
};

export default OurTeam;
