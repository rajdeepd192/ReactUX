import React from 'react'

export const Whyuscomp = (props) => {
  return (
    <div>
      {/* ======= Why Us Section ======= */}
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-right">
              <div className="content">
                <h3>{props.content.head1}</h3>
                <p>
                  {props.content.para1}
                </p>
                <div className="text-center">
                  <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-receipt" />
                      <h4>{props.content.head2}</h4>
                      <p>{props.content.para2}</p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={200}>
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-cube-alt" />
                      <h4>Ullamco laboris ladore pan</h4>
                      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={300}>
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-images" />
                      <h4>Labore consequatur</h4>
                      <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                    </div>
                  </div>
                </div>
              </div>{/* End .content*/}</div>
          </div></div></section>

    </div>
  )
}