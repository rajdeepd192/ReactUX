import React from 'react'

export const Ctacomp=(props)=>{
    return(
        <div>
            {/* ======= Cta Section ======= */}
            <section id="cta" className="cta">
                <div className="container">
                    <div className="text-center" data-aos="zoom-in">
                        <h3>{props.content.text1}</h3>
                        <p> {props.content.para1}</p>
                        <a className="cta-btn" href="#">{props.content.text1}</a>
                    </div>
                </div>
            </section>{/* End Cta Section */}

        </div>
    )
}