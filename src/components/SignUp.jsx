import styled from "styled-components";
import Input from "./Input";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export default function SignUp({showLogin, setShowLogin}){

    const handleClick = () => {
        setShowLogin(true);
    }

    return (
        <>
            <SignUpContainer>
                <ButtonContainer>
                    <Button showLogin={!showLogin} onClick={handleClick} height={'50px'} width={'208px'} fs={'28px'} borderRadius={'10px'} bgcolor={'white'}>Login</Button>
                    <Button showLogin={showLogin} height={'50px'} width={'208px'} fs={'28px'} borderRadius={'10px'} bgcolor={'white'}>Sign Up</Button>
                </ButtonContainer>
                <InputContainer>
                    <Input type={'text'} placeholderText={'Enter Your Name'} />
                    <Input type={'text'} placeholderText={'Enter Your Username'} />
                    <Input type={'password'} placeholderText={'Enter Password'} />
                    <Input type={'password'} placeholderText={'Confirm Password'} />
                </InputContainer>
                <OtherButtonsContainer>
                    <Button width={'180px'} height={'45px'} fs={'28px'} borderRadius={'25px'} bgcolor={'#B5C9DB'}>Sign Up</Button>
                </OtherButtonsContainer>
                <IconContainer>
                    <IconParagraph>
                        or signup with Social media
                    </IconParagraph>
                    <IconContainerInner>
                        <FaYoutube></FaYoutube>
                        <FaInstagram></FaInstagram>
                        <FaTwitter></FaTwitter>
                        <FaFacebookSquare></FaFacebookSquare>
                    </IconContainerInner>
                </IconContainer>
            </SignUpContainer>
        </>
    )

}

const SignUpContainer = styled.div`
    width: 55%;
    padding-top: 2rem;
    @media only screen and (max-width: 399px) {
        width: 100%;
        padding-top: 0;
    }
    @media only screen and (min-width: 400px) and (max-width: 799px) {
        width: 100%;
        padding-top: 0;
    }
`;

const ButtonContainer = styled.div`
    width: 77%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20%;
    @media only screen and (max-width: 399px){
        width: 80%;
    }
    @media only screen and (min-width: 400px) and (max-width: 799px){
        width: 77%;
    }
`;

const Button = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: ${(props) => props.fs};
    color: ${(props) => props.showLogin ? 'grey' : 'black'};
    border-radius: ${(props) => props.borderRadius};
    cursor: pointer;
    border: none;
    background-color: ${(props) => props.bgcolor};
    box-shadow: 0 4px 4px 0 #B5C9DB;
    @media only screen and (max-width: 399px){
        width: 90px;
        height: 28px;
        font-size: 14px;
    }
    @media only screen and (min-width: 400px) and (max-width: 799px){
        width: 140px;
        height: 40px;
        font-size: 22px;
    }
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 45%;
    @media only screen and (max-width: 399px){
        height: 65%;
    }
    @media only screen and (min-width: 400px) and (max-width: 799px){
        height: 65%;
    }
`;

const OtherButtonsContainer = styled.div`
    width: 77%;
    margin: 15px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 9%;
    @media only screen and (min-width: 400px) and (max-width: 799px){
        margin: 20px auto;
    }
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 10%;
    margin: 10px auto;
    @media only screen and (max-width: 399px){
        width: 70%;
        margin-top: 20px;
    }
    @media only screen and (min-width: 400px) and (max-width: 799px){
        width: 50%;
        margin-top: 16px;
    }
`;

const IconParagraph = styled.p`
    font-size: 1.2em;
    text-align: center;
    margin: 0;
    margin-bottom: 5px;
    @media only screen and (max-width: 399px){
        font-size: 14px;
    }
    @media only screen and (min-width: 400px) and (max-width: 799px){
        font-size: 16px;
    }
`;

const IconContainerInner = styled.div`
    width: 75%;
    margin: auto;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
    @media only screen and (max-width: 399px){
        font-size: 25px;
    }
    @media only screen and (min-width: 400px) and (max-width: 799px){
        font-size: 25px;
    }
`;