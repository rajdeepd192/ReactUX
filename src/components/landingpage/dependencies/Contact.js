import React from 'react'

export const Contactcomp = (props) => {
  return (
    <div>
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <div className="section-title">
                <h2>Contact</h2>
                <p>{props.content.contactbody}</p>
              </div>
            </div>
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay={100}>
              <iframe style={{ border: 0, width: '100%', height: 270 }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} allowFullScreen />
              <div className="info mt-4">
                <i className="icofont-google-map" />
                <h4>Location:</h4>
                <p>{props.content.Location}</p>
              </div>
              <div className="row">
                <div className="col-lg-6 mt-4">
                  <div className="info">
                    <i className="icofont-envelope" />
                    <h4>Email:</h4>
                    <p>{props.content.email_1} </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="info w-100 mt-4">
                    <i className="icofont-phone" />
                    <h4>Call:</h4>
                    <p>{props.content.number_1}</p>
                  </div>
                </div>
              </div>
              <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate" />
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validate" />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validate" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                  <div className="validate" />
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>{/* End Contact Section */}

    </div>
  )
}