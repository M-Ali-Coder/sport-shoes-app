import React from "react";
import AppPageBanner from "../AppPageBanner";

class ContactPage extends React.Component {
  componentDidMount() {
    document.title = "Ekommart | Contact page";
  }
  render() {
    return (
      <div className="contact-page-wrapper">
        <AppPageBanner title="Contact" />

        <div className="container">
          <div className="row">
            <div className="column">
              <form autoComplete="off">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                <label htmlFor="country">Country</label>
                <select id="country" name="country">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
                <label htmlFor="subject">Subject</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  style={{ height: "170px" }}
                ></textarea>
                <input type="submit" value="Submit" />
              </form>
            </div>
            <div className="column">
              <div className="our-team-members">
                <div className="item">
                  <div className="team-member-item-image">
                    <img
                      src="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/contact-1.png"
                      alt=""
                    />
                  </div>
                  <div className="member-name">Jhon Doe</div>
                  <div className="about-member">
                    <p>Senior Marketing Manager</p>
                    <p>Phone: + 844 123 444 77 88</p>
                    <p>Email: contact@example.com</p>
                  </div>
                </div>
                <div className="item">
                  <div className="team-member-item-image">
                    <img
                      src="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/contact-1.png"
                      alt=""
                    />
                  </div>
                  <div className="member-name">Jhon Doe</div>
                  <div className="about-member">
                    <p>Senior Marketing Manager</p>
                    <p>Phone: + 844 123 444 77 88</p>
                    <p>Email: contact@example.com</p>
                  </div>
                </div>
                <div className="item">
                  <div className="team-member-item-image">
                    <img
                      src="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/contact-1.png"
                      alt=""
                    />
                  </div>
                  <div className="member-name">Jhon Doe</div>
                  <div className="about-member">
                    <p>Senior Marketing Manager</p>
                    <p>Phone: + 844 123 444 77 88</p>
                    <p>Email: contact@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
