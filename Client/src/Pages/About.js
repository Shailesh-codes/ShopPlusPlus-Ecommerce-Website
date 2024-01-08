import React from 'react'
import Layout from '../Components/Layout/Layout'

const About = () => {
    return (
        <Layout title={"About us- ShopPlus"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p className="text-justify mt-2">

                        <h1 style={{ fontFamily: "roboto" }}>The ShopPlusPlus Group</h1>
                        The ShopPlusPlus Group is one of India's leading digital commerce
                        entities and includes group companies Flipkart, Myntra, Flipkart Wholesale,
                        Flipkart Health+, Cleartrip and ANS Commerce.
                    </p>
                </div>
            </div>
        </Layout >
    );
};

export default About;