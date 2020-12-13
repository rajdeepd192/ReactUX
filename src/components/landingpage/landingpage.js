import React from 'react';
import axios from 'axios';

import { Testimonialcomp, Teamscomp, Portfoliocomp, Aboutcomp, Clientcomp, Contactcomp, Ctacomp, Countscomp, Herocomp, Servicecomp, Whyuscomp } from './dependencies';

let contactContent = {
  email_1: "Rajdeep.Das@Fincorp.com",
  number_1: "+9162913688",
  Location: "A108 Adam Street, New York, NY 535022",
  contactbody: "Reach out to us. Our support team will typically revert within one business day."
};

let testimonialcontent = {
  testbody: "One of the leading org. in our domain. We do our best to excel in the project delivery and customer support."
}

let aboutbody = {
  aboutheading1: "Eum ipsam laborum deleniti velitena",
  aboutheading2: "Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave",
  para1: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
  para2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  list1: "Ullamco laboris nisi ut aliquip ex ea commodo consequa",
  list2: "Duis aute irure dolor in reprehenderit in voluptate velit",
  list3: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in"
}

let ctabody = {
  para1: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  text1: "Call To Action"
}

let whyusbody = {
  head1: "Why Choose Bethany for your company website?",
  head2: "Corporis voluptates sit",
  para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit",
  para2: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip"
}

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact_content: {email_1:""},
      fetched: false
    }
  }

  componentDidMount() {
    console.log('Component did mount!')
    this.getList();
  }

  getList() {
    axios.get("http://localhost:8080/test/contact")
      .then(response => {
        console.log(response.data);
         console.log(this.state);
        // this.setState({ fetched: true, contact_content: response.data });
        
        this.setState((state) => {
          // Important: read `state` instead of `this.state` when updating.
          return { fetched: true, contact_content: response.data };

        });
        console.log(this.state);
      })
  }
  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <Herocomp />
        <Clientcomp />
        <Aboutcomp content={aboutbody} />
        <Countscomp />
        <Whyuscomp content={whyusbody} />
        <Ctacomp content={ctabody} />
        <Servicecomp />
        <Portfoliocomp />
        <Testimonialcomp content={testimonialcontent} />
        <Teamscomp />
        <Contactcomp content={this.state.contact_content} />

      </React.Fragment>
    );
  }
}


export default LandingPage;