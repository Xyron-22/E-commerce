import React from "react";
import {BsTwitter, BsInstagram} from "react-icons/bs";

const Footer = () => {
    return (
        <div className="text-fc text-center mt-5 py-7 px-2.5 font-bold flex flex-col items-center gap-2.5 justify-center">
            <p>2023 Seven Zero Five All Rights Reserved</p>
            <p className="text-3xl flex gap-2.5">
                <BsTwitter></BsTwitter>
                <BsInstagram></BsInstagram>
            </p>
        </div>
    )
};

export default Footer;