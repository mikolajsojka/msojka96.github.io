import React from "react";
import "./Contact.css";
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';

class Contact extends React.Component {
  render() {
    return (
      <div className="about" id="A3" data-aos={this.props.direction}>
        <div className="ainfo">
           <CallIcon className="icons"/> &nbsp; 690-819-235
        </div>
        <div className="ainfo">
           <MailIcon className="icons"/> &nbsp; mikolaj.sojka@gmail.com
        </div>
      </div>
    );
  }
}

export default Contact;
