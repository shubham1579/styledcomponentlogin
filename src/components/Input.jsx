import styled from "styled-components";


export default function Input({type, placeholderText}){

    return (
        <>
            <InputP type={type} placeholder={placeholderText}></InputP>
        </>
    )

}

const InputP = styled.input`
    width: 75%;
    height: 50px;
    border-radius: 10px;
    padding-left: 15px;
    box-shadow: 0 4px 4px 0 #B5C9DB;
    border: none;
    &::placeholder{
        color: #2c2c2c;
        font-weight: 600;
    }
    @media only screen and (max-width: 399px){
        width: 75%;
        height: 40px;
        &::placeholder{
            font-weight: 100;
        }
    }
    @media only screen and (min-width: 400px) and (max-width: 799px){
        width: 75%;
        height: 45px;
    }
`