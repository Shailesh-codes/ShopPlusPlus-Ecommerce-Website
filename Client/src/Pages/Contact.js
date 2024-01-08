import React from "react";
import Layout from "../Components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
    return (
        <Layout title={"Contact Us- Shop++"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/contactus.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <h1 className="bg-dark p-2 text-white text-center">CONTACT WITH US</h1>
                    <p className="text-justify mt-2">
                        Once you place your order on any online shopping store,
                        the next obvious thing to do is wait for your product to arrive.
                        This wait can be quite anxiety-ridden if you do not get updates
                        about your order or do not receive support post-delivery of your order
                        However, with the Flipkart Help Centre,
                        your wait becomes exciting, and your shopping experience becomes joyful,
                        thanks to all the support it provides related to your order.
                    </p>
                    <p className="mt-3">
                        <BiMailSend /> : www.help@ShopPlusPlus.com
                    </p>
                    <p className="mt-3">
                        <BiPhoneCall /> : 012-3456789
                    </p>
                    <p className="mt-3">
                        <BiSupport /> : 1800-0000-0000 (toll free)
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;