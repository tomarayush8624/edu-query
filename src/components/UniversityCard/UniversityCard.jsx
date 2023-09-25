import {motion} from "framer-motion";
import CollegeImage from "../../ULogo.png";
import React from "react";

const UniversityCard = () => {
    return (
        <motion.div whileHover={{scale: 1.05}} className="uni_card">
            <div className="uni_card_img_div">
                <img src={CollegeImage} alt=""/>
            </div>
            <h1>Chitkar University</h1>
        </motion.div>
    );
};


export default UniversityCard;