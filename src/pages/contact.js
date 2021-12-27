import React from "react";
import Layout from "../components/layout";
import about from "../images/about-holder.png"

const About = () => {
 return (
    <Layout>
        <div className="ml-mob-sides mr-mob-sides">
        <div className="block font-cabinet font-medium text-mobile mb-3 text-left">
            We’d love to hear from you.
        </div>
        <div className="font-cabinet font-regular text-mob-footer">
            <h4 className="text-mob-uppercase-heading">EMAIL</h4>
        </div>
        <div className="block font-cabinet font-medium text-mobile mb-3 text-left ">
            boo@tidextide.in
        </div>
        <div className="font-cabinet font-regular text-mob-footer">
            <h4 className="text-mob-uppercase-heading">PHONE</h4>
        </div>
        <div className="block font-cabinet font-medium text-mobile mb-3 text-left ">
            +91 991 009 8042
        </div>
        <div className="font-cabinet font-regular text-mob-footer">
            <h4 className="text-mob-uppercase-heading">POST</h4>
        </div>
        <div className="block font-cabinet font-medium text-mobile mb-3 text-left ">
            Serenity Beach, Pondicherry or Silversands Beach, Goa
        </div>


        </div>
        <div className="mt-[2.875rem]">
            <img src={about}/>
        </div>
    </Layout>
 );
};

export default About