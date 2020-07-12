import React from "react";
import AppPageBanner from "../AppPageBanner";
import WhyChooseUs from "../WhyChooseUs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import OurTeam from "../OurTeam";
import OurBrands from "../OurBrands";

class AboutPage extends React.Component {
  componentDidMount() {
    document.title = "Ekommart | About page";
  }

  render() {
    return (
      <div className="about-page-wrapper">
        <AppPageBanner title="About Page" />

        <div className="container our-story-wrapper">
          <div className="our-story-image">
            <img
              src="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/About-1.jpg"
              alt=""
            />
          </div>
          <div className="our-story-content">
            <h2>Our Story</h2>
            <p className="mr-bottom-20">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae soluta ipsam ea
              quibusdam aliquid recusandae consequuntur quas eius esse perferendis commodi quaerat
              magnam, hic adipisci debitis asperiores ad doloremque explicabo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nobis explicabo in,
              deserunt blanditiis illo eaque a, aliquid sunt nulla officiis? Dignissimos deserunt
              dolores eaque rem fugit officiis est inventore.
            </p>
            <div className="our-story-quote">
              <FaQuoteLeft />
              <p>
                Create stunning images with as much or as little control as you like thanks to a
                choice of Basic and Creative modes.
              </p>
              <FaQuoteRight />
              <div className="author-info">
                <span className="author-name">SEAN MORRISON</span>
                <div className="author-job">Photographer</div>
              </div>
            </div>
          </div>
        </div>
        <WhyChooseUs />
        <OurTeam />
        <OurBrands />
      </div>
    );
  }
}

export default AboutPage;
