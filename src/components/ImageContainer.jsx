import styled from "styled-components";
import Group from '../images/Group.png';


export default function ImageContainer(){

    return (
        <>
            <ImageCont>
                <Image src={Group}></Image>
            </ImageCont>
        </>
    )

}

const ImageCont = styled.div`
    width: 45%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 799px){
        width: 100%;
    }
`;

const Image = styled.img`
    width: 80%;
    height: auto;
    @media only screen and (max-width: 399px){
        width: 50%;
    }
    @media only screen and (min-width: 400px) and (max-width: 799px){
        width: 42%;
    }
`;