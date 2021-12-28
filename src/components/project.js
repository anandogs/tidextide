import * as React from "react"
import Layout from "./layout";

const Project = () => {
    return (
        <Layout>
            <div className="relative -z-10">
                <div className="ml-mob-project-sides ">
                    <img src="project-img-holder.png"/>
                </div>
                <div className="ml-mob-sides mr-mob-sides font-cabinet font-medium text-mobile absolute bottom-[5%]">
                    No. 3 Clive Road
                </div>
            </div>
            <div className="ml-mob-sides mr-mob-sides w-[7.6875rem]">
            <div className="font-cabinet font-regular text-mob-footer mt-4">
                <p className="font-cabinet font-regular text-mob-footer">threecliveroad.com</p>
            </div>
            <div className="font-cabinet font-regular text-mob-footer mt-4">
                <h4 className="text-mob-uppercase-heading leading-[.9375rem] tracking-widest">SCOPE</h4>
                <p>Packaging</p>
                <p>Digital</p>
                <p>Miscellaneous</p>
            </div>
            <div className="font-cabinet font-regular text-mob-footer mt-4">
                <h4 className="text-mob-uppercase-heading leading-[.9375rem] tracking-widest">YEAR</h4>
                <p>2021</p>
            </div>
            <div className="font-cabinet font-regular text-mob-footer mt-4">
                <h4 className="text-mob-uppercase-heading leading-[.9375rem] tracking-widest">CREDITS</h4>
                <p>Photography by No. 3 Clive Road</p>
            </div>
            </div>
            <div className="ml-mob-sides mr-mob-sides font-cabinet font-regular text-mob-footer mt-4">
                <p>No. 3 Clive Road is a luxury Indian brand specialising in
                    exquisite hand blended teas and bespoke locally produced 
                    accessories. The brand uses
                    design, quality and innovation
                    to bring a moment of elegance
                    of a bygone era into the homes
                    and lifestyles of today.
                </p>
            </div>

        </Layout>
    );
};

export default Project