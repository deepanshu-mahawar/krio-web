import styled from "styled-components";

export const MainSection = styled.div`
    
    display: flex;
    flex-direction: column;

    .divider{
        width: 200px;
        padding: 20px 0px;
    }

    @media screen and (max-width: 576px) {
        .divider{
        width: 100px;
        }
    }

    @media (min-width: 576px) and (max-width: 768px) {
        .divider{
        width: 150px;
        }
    }
`;

export const HeadingDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    .headline{
        border: 1px solid #a48ea6;
        width: 50px;
    }
`;

export const Heading = styled.h1`
    font-size: 25px;
    font-weight: 500;
    color: #a48ea6;

    @media screen and (max-width: 576px) {
        font-size: 18px;
    }

    @media (min-width: 576px) and (max-width: 768px) {
        font-size: 20px;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        font-size: 22px;
    }
`;

export const SubHeading = styled.h2`
    font-size: 50px;
    font-weight: 500;
    padding-top: 14px;

    @media screen and (max-width: 576px) {
        font-size: 30px;
    }

    @media (min-width: 576px) and (max-width: 768px) {
        font-size: 40px;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        font-size: 45px;
    }
`;

export const Paragraph = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 40px;

    @media screen and (max-width: 576px) {
        font-size: 14px;
        line-height: 30px;
    }

    @media (min-width: 576px) and (max-width: 768px) {
        font-size: 16px;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        font-size: 18px;
    }
`;

export const Button = styled.button`
    background: #a48ea6;
    width: fit-content;
    color: white;
    padding: 20px 40px;
    border-radius: 40px;
    font-size: 18px;
    font-weight: 300;
    margin-top: 30px;

    @media screen and (max-width: 576px) {
        font-size: 14px;
        padding: 15px 30px;
        margin-top: 15px;
    }

    @media (min-width: 576px) and (max-width: 768px) {
        padding: 15px 30px;
        font-size: 16px;
        margin-top: 20px;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        padding: 20px 30px;
        font-size: 18px;
        margin-top: 25px;
    }
`;

