import { useState } from "react";
import styled from "styled-components";
import ImageContainer from "./ImageContainer";
import Login from "./Login";
import SignUp from "./SignUp";

export default function MainContainer(){

    const [showLogin, setShowLogin] = useState(true);

    return (
        <>
            <MainLoginContainer>
                <ImageContainer />
                {showLogin ? <Login showLogin={showLogin} setShowLogin={setShowLogin} /> : <SignUp showLogin={showLogin} setShowLogin={setShowLogin} />}
            </MainLoginContainer>
        </>
    )

}

const MainLoginContainer = styled.div`
    /* border: 2px solid red; */
    height: 80vh;
    width: 80vw;
    display: flex;
    @media only screen and (max-width: 399px) {
        flex-direction: column;
        width: 98vw;
        height: 98vh;
        margin-top: 5rem;
    }
    @media only screen and (min-width: 400px) and (max-width: 799px) {
        flex-direction: column;
        width: 98vw;
        height: 98vh;
        margin-top: 3rem;
    }
`;