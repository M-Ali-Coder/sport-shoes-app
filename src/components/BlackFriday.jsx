import React from "react";
import { MdClose } from "react-icons/md";

class BlackFriday extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  }

  blackOfferTimer = null;

  countDownTimer() {
    this.blackOfferTimer = setInterval(() => {
      const countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
      const now = new Date().getTime();
      const distance = countDownDate - now;

      this.setState({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        min: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        sec: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
  }

  handleClose() {
    this.setState({ isOpen: false });
    this.blackOfferTimer && clearInterval(this.blackOfferTimer);
  }

  componentDidMount() {
    this.countDownTimer();
  }

  render() {
    const { isOpen, days, hours, min, sec } = this.state;

    return (
      <>
        {isOpen && (
          <div className="black-friday">
            <div className="black-friday-wrapper">
              <div className="deal-toolbar-text">
                <div>
                  <strong>Black Friday. </strong>
                  <strong className="save-up"> Save up to 50%!</strong>
                </div>
              </div>
              <div className="deal-ends-timer">
                <div className="vertical-sperator" />
                <strong>Deal Ends: </strong>
                <div className="timer-square">
                  {days}
                  <span>H</span>
                </div>

                <div className="timer-square">
                  {hours}
                  <span>H</span>
                </div>
                <div className="timer-square">
                  {min}
                  <span>M</span>
                </div>
                <div className="timer-square">
                  {sec}
                  <span>S</span>
                </div>
                <div className="vertical-sperator" />
                <a href="/" className="learn-more">
                  Learn More
                </a>
              </div>
              <div className="close" onClick={() => this.handleClose()}>
                <MdClose />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default BlackFriday;
