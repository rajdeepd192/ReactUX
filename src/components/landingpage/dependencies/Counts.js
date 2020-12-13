import React from 'react'

export function Countscomp(){
    return(
        <div>
            {/* ======= Counts Section ======= */}
            <section id="counts" className="counts">
                <div className="container">
                    <div className="row counters">
                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">232</span>
                            <p>Clients</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">521</span>
                            <p>Projects</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">1,463</span>
                            <p>Hours Of Support</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">15</span>
                            <p>Hard Workers</p>
                        </div>
                    </div>
                </div>
            </section>{/* End Counts Section */}

        </div>
    )

}