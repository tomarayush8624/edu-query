import "../src/App.scss";
import React from "react";
import "../src/components/Navbar/Navbar.scss";
import {motion, AnimatePresence} from "framer-motion";
import CollegeImage from '../src/ULogo.png'
import "../src/components/styles/LogInPage.scss"
import {AiFillRead, AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineUserAdd} from 'react-icons/ai'
import AboutUs from "./pages/About/About";
import Lottie from "lottie-react";
import LottieAnimationData from "../src/animation_lmroya1c.json"
import Home from "./pages/Home/Home";

function App() {
    const [navbarState, setNavbarState] = React.useState(0);

    function handleState(stateNumber) {
        setNavbarState(stateNumber);
    }

    function handleChange() {
        loaderOne.current.style.left = "0";
        loaderThree.current.style.left = "0";
        loaderTwo.current.style.left = "0";

        setTimeout(() => {
            loaderOne.current.style.left = "100vw";
            loaderThree.current.style.left = "100vw";
            loaderTwo.current.style.left = "100vw";
        }, 1500);
    }

    const [currentMode, setMode] = React.useState("Dark");
    let loaderOne = React.useRef(),
        loaderTwo = React.useRef(),
        loaderThree = React.useRef();

    console.log(navbarState);
    return (
        <div className="App">
            <AboutUs/>
            {/* loader 1 */}
            <div
                ref={loaderOne}
                className="loader_div"
                style={{
                    backgroundColor: "white",
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    zIndex: 100,
                    left: "100vw",
                    transition: "all 250ms",
                }}
            ></div>
            {/* loader 2 */}
            <div
                ref={loaderTwo}
                className="loader_div"
                style={{
                    backgroundColor: "black",
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    zIndex: 100,
                    left: "100vw",
                    transition: "all 250ms",
                    transitionDelay: "0.15s"
                }}
            ></div>
            {/* loader 3 */}
            <div
                ref={loaderThree}
                className="loader_div"
                style={{
                    backgroundColor: "white",
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    zIndex: 100,
                    left: "100vw",
                    transition: "all 250ms",
                    transitionDelay: "0.30s",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "4rem",
                    fontWeight: "600"
                }}
            >Content Coming Up!
            </div>
            <nav>
                <h1>EDU.Query
                    <div className={`underline_div`}/>
                </h1>
                <ul>
                    <li onClick={() => {
                        handleState(0);
                        handleChange()
                    }}>Home
                    </li>
                    <li onClick={() => {
                        handleState(1);
                        handleChange()
                    }}>LogIn/SignUp
                    </li>
                    <li onClick={() => {
                        handleState(2);
                        handleChange()
                    }}>Contact Us
                    </li>
                    <li onClick={() => {
                        handleState(3);
                        handleChange()
                    }}>User Settings
                    </li>

                </ul>
            </nav>
            <section>
                <AnimatePresence>
                    {navbarState === 0 ? (
                        <React.Fragment>
                            <h1 className="uni_h1">Universities: </h1>
                            <Home/>
                        </React.Fragment>
                    ) : navbarState === 1 ? (
                        <LogIn/>
                    ) : navbarState === 2 ? (
                        <ContactUs/>
                    ) : (
                        <UserSetting/>
                    )}
                </AnimatePresence>
            </section>
        </div>
    );
}

export default App;


const LogIn = () => {
    const [initialState, setInitialState] = React.useState(0);
    return <React.Fragment>
        <AnimatePresence>
            {initialState === 0 ?
                <motion.div animate={{opacity: 1, y: 0}} initial={{opacity: 0, y: 100}}
                            transition={{duration: 0.8, ease: "easeInOut", delay: 2}}
                            exit={{opacity: 0}}
                            className={`main_div`}>
                    <h1 className={`main_heading`}>LogIn/SignUp
                        <div className={`underline`}/>
                    </h1>
                    <div className={`form_div`}>
                        <h1>Username:</h1>
                        <input placeholder={`Enter username: `}/>
                    </div>
                    <div className={`form_div`}>
                        <h1>Password:</h1>
                        <input type={'password'} placeholder={`Enter password: `}/>
                    </div>
                    <div className={`button_div`}>
                        <div>Submit <AiOutlineArrowDown className={`icons`}/></div>
                    </div>
                    <div onClick={() => setInitialState(1)} className={`button_div2`}>
                        <div>SignUp Instead <AiOutlineUserAdd className={'icons'}/></div>
                    </div>
                </motion.div>
                :

                <motion.div animate={{opacity: 1, y: 0}} initial={{opacity: 0, y: 100}}
                            transition={{duration: 0.8, ease: "easeInOut"}} className={`signUp_div`}>
                    <div className={`left-side`}>
                        <h1 className={`main_heading`}>SignUp Form
                            <div className={`underline`}/>
                        </h1>
                        <form>
                            <h1 className={`email_inputTest`}>Email Id: </h1>
                            <input placeholder={`Enter email: `} className={`email_input`}/>
                            <h1 className={`password_inputTest`}>Password: </h1>
                            <input placeholder={"Enter password: "} type={'password'} className={`password_input`}/>
                            <button>SignUp</button>
                        </form>

                    </div>
                    <div className={`right-side`}>
                        <div className={`animation_div`}>
                            <Lottie style={{marginRight: "3rem"}} animationData={LottieAnimationData}/>
                        </div>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    </React.Fragment>;
};

const ContactUs = () => {
    return <div></div>;
};

const UserSetting = () => {
    return <div></div>;
};


