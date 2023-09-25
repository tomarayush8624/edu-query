import {motion} from "framer-motion";
import React from "react";
import UniversityCard from "../../components/UniversityCard/UniversityCard";
const Home = () => {

    return (
        <motion.div
            animate={{y: 0, opacity: 1}}
            initial={{y: 100, opacity: 0}}
            transition={{duration: 1, ease: "easeInOut"}}
            className="home_div"
        >
            <div className="new_button">
                <h1>Add New:</h1>
            </div>
            <div className="cardDiv">
                <UniversityCard/>
            </div>
        </motion.div>
    );
};

export default Home;