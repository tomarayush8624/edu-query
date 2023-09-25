import React from "react";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {ImCross} from "react-icons/im";

const AboutUs = () => {
    let about_ref = React.useRef();

    const [leftVal, setLeftVal] = React.useState(100);
    return <React.Fragment>
        <div onClick={() => setLeftVal(0)} className={`aboutUs_button`}>
            <AiOutlineArrowLeft />
        </div>
        <div ref={about_ref} style={{left: `${leftVal}vw`}} className={`aboutUs_page`}>
            <div className={``} onClick={() => setLeftVal(100)}>
                <ImCross size={40} className={`buttonCross`}/>
            </div>
            <h1 className={'aboutUs_heading'}>About Us:</h1>
        </div>
    </React.Fragment>
}

export default AboutUs;
