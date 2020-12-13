import React from 'react'

export const Aboutcomp = (props) => {
  return (
    <div>
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="row content">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay={100}>
              <h2>{props.content.aboutheading1}</h2>
              <h3>{props.content.aboutheading2}</h3>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay={200}>
              <p>
                {props.content.para1}
              </p>
              <ul>
                <li><i className="ri-check-double-line" /> {props.content.list1}</li>
                <li><i className="ri-check-double-line" /> {props.content.list2}</li>
                <li><i className="ri-check-double-line" /> {props.content.list3}</li>
              </ul>
              <p className="font-italic">
                {props.content.para2}
              </p>
            </div>
          </div>
        </div>
      </section>{/* End About Section */}

    </div>
  )
}