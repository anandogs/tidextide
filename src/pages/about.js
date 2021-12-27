import React from "react";
import Layout from "../components/layout";
import about from "../images/about-holder.png"

const About = () => {
 return (
    <Layout>
        <div className="block font-cabinet font-medium text-mobile mb-mob-work text-left ml-mob-sides mr-mob-sides">
        Tide x Tide is a design and something studio based between Pondicherry, Delhi and Goa.
        </div>
        <div>
            <img src={about}/>
        </div>
    </Layout>
 );
};

export default About