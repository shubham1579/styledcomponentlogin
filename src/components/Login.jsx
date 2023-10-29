import styled from "styled-components";
// import Button from "./Button";
import Input from "./Input";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";   


export default function Login({showLogin, setShowLogin}){

    const handleClick = () => {
        setShowLogin(false);
    }

    return (
        <>
            <LoginContainer>
                <ButtonContainer>
                    <Button height={'50px'} width={'208px'} fs={'28px'} borderRadius={'10px'} bgcolor={'white'}>Login</Button>
                    <Button showLogin={showLogin} onClick={handleClick} height={'50px'} width={'208px'} fs={'28px'} borderRadius={'10px'} bgcolor={'white'}>Sign Up</Button>
                </ButtonContainer>
                <InputContainer>
                    <Input type={'text'} placeholderText={'Enter Login ID'} />
                    <Input type={'password'} placeholderText={'Enter Password'} />
                </InputContainer>
                <CheckboxContainer>
                    <Checkbox type="checkbox"></Checkbox><Span>Remember me</Span>
                </CheckboxContainer>
                <OtherButtonsContainer>
                    <ForgotPWLink>Forgot Your Password?</ForgotPWLink>
                    <Button width={'180px'} height={'45px'} fs={'28px'} borderRadius={'25px'} bgcolor={'#B5C9DB'}>Login</Button>
                </OtherButtonsContainer>
                <IconContainer>
                    <IconParagraph>
                        or connect with Social media
                    </IconParagraph>
                    <IconContainerInner>
                        <FaYoutube></FaYoutube>
                        <FaInstagram></FaInstagram>
                        <FaTwitter></FaTwitter>
                        <FaFacebookSquare></FaFacebookSquare>
                    </IconContainerInner>
                </IconContainer>
            </LoginContainer>
        </>
    )

}

const LoginContainer = styled.div`
    width: 55%;
    padding-top: 2rem;
    @media only screen and (max-width: 799px) {
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
    height: 25%;
    @media only screen and (max-width: 399px){
        width: 80%;
    }
    @media only screen and (min-width: 400px) and (max-width: 799px){
        width: 77%;
    }
    @media only screen and (min-width: 800px) and (max-width: 1300px){
        width: 80%;
    }
`;

const Button = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: ${(props) => props.fs};
    color: ${(props) => !props.showLogin ? 'black' : 'grey'};
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
        width: 150px;
        height: 45px;
        font-size: 22px;
    }
    @media only screen and (min-width: 800px) and (max-width: 1300px){
        width: 40%;
        height: 45px;
        font-size: 22px;
    }
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 22%;
    @media only screen and (max-width: 399px){
        height: 38%;
    }
    @media only screen and (min-width: 400px) and (max-width: 799px){
        height: 36%;
    }
`;

const CheckboxContainer = styled.div`
    width: 78%;
    margin: auto;
    margin-top: 15px;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 399px){
        width: 81%;
        margin-top: 10px;
    }
    @media only screen and (min-width: 400px) and (max-width: 799px){
        width: 79%;
        margin-top: 10px;
    }
`

const Checkbox = styled.input`
    width: 15px;
    height: 15px;
    display: inline-block;
    @media only screen and (max-width: 399px){
        width: 12px;
        height: 12px;
    }
`;

const Span = styled.span`
    margin-left: 5px;
    font-size: 18px;
    @media only screen and (max-width: 399px){
        font-size: 13px;
        margin-left: 2px;
    }
    @media only screen and (min-width: 400px) and (max-width: 799px){
        font-size: 16px;
        margin-left: 2px;
    }
`;

const OtherButtonsContainer = styled.div`
    width: 77%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15%;
    @media only screen and (max-width: 399px){
        width: 79%;
        height: 8%;
        margin-top: 1rem;
    }
    @media only screen and (min-width: 400px) and (max-width: 799px){
        width: 77%;
        height: 8%;
        margin-top: 1rem;
    }
`;

const ForgotPWLink = styled.a`
    color: grey;
    text-decoration: none;
    font-size: 18px;
    &:hover{
        cursor: pointer;
    }
    @media only screen and (max-width: 399px){
        font-size: 14px;
    }
    @media only screen and (min-width: 400px) and (max-width: 799px){
        font-size: 16px;
    }
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 15%;
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
    @media only screen and (max-width: 399px){
        font-size: 14px;
    }
    @media only screen and (min-width: 400px) and (max-width: 799px){
        font-size: 16px;
    }
`

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
    @media only screen and (max-width: 799px){
        font-size: 25px;
    }
`;