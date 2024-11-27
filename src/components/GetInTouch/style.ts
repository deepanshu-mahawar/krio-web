import styled from "styled-components";

export const MainSection = styled.main`
    padding: 100px 180px;

    @media screen and (max-width: 576px) {
        padding: 50px 15px 0px 15px;
    }

    @media (min-width: 576px) and (max-width: 768px) {
        padding: 50px 20px 0px 20px;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        padding: 50px 25px 0px 25px;
    }
`;

export const ShadowDiv = styled.div`
    box-shadow: -2px 5px 60px 0px #969090;
    border-radius: 60px;
`;

export const Section = styled.div`
    display: flex;
    justify-content: center;
    border: 2px solid ${({theme}) => theme.colors.background2};
    border-radius: 55px;
    box-shadow: 0px -13px #a68ea8;

    @media screen and (max-width: 576px) {
        box-shadow: 0px -8px #a68ea8;
    }

    @media (min-width: 576px) and (max-width: 768px) {
        box-shadow: 0px -10px #a68ea8;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        box-shadow: 0px -10px #a68ea8;
    }
`;

export const TextSection = styled.div`
    width: 60%;
    padding: 50px;

    @media screen and (max-width: 576px) {
        width: 100%;
        padding: 30px;
    }

    @media (min-width: 576px) and (max-width: 768px) {
        width: 100%;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        width: 100%;
    }
`;

export const Heading = styled.h1`
    font-size: 55px;
    font-weight: ${({theme}) => theme.fontWeight.semibold};

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
    font-size: ${({theme}) => theme.fontSize.size18};
    line-height: ${({theme}) => theme.textLineHeight.medium};
    color: #535152;

    @media screen and (max-width: 576px) {
        font-size: 14px;
        line-height: 30px;
    }

    @media (min-width: 576px) and (max-width: 768px) {
        font-size: 16px;
        line-height: 35px;
    }
`;
export const Form = styled.div`
    display: flex;
    width: 100%;
    padding: 25px 0px;
    gap: 30px;

    @media screen and (max-width: 576px) {
        display: flex;
        flex-direction: column;
        padding: 15px 0px;
        gap: 20px;
    }
`;

export const FormSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 576px) {
        width: 100%;
    }
`;

export const Label = styled.label`
    font-size: ${({theme}) => theme.fontSize.size20};
    font-weight: ${({theme}) => theme.fontWeight.semibold};
    margin-bottom: 10px;

    @media screen and (max-width: 576px) {
        font-size: 15px;
    }
`;

export const InputField = styled.input`
    border: 2px solid #535152;
    border-radius: 50px;
    padding: 20px 30px;

    &::placeholder{
        color: ${({theme}) => theme.colors.background2};
        font-size: ${({theme}) => theme.fontSize.size18};
    }    

    @media screen and (max-width: 576px) {
        padding: 10px 20px;

        &::placeholder{
            font-size: 14px;
        }
    }

`;

export const MessageSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TextAreaLabel = styled.label`
    font-size: ${({theme}) => theme.fontSize.size20};
    font-weight: ${({theme}) => theme.fontWeight.semibold};
    padding-bottom: 10px;

    @media screen and (max-width: 576px) {
        font-size: 15px;
    }

`;

export const TextArea = styled.textarea`
    border: 2px solid #535152;
    border-radius: 15px;
    padding-top: 20px;
    padding-left: 25px;

    &::placeholder{
        color: ${({theme}) => theme.colors.background2};
        font-size: ${({theme}) => theme.fontSize.size18};
    }

    @media screen and (max-width: 576px) {
        padding: 10px 20px;
        &::placeholder{
            font-size: 14px;
        }
    }
    
`;

export const Button = styled.button`
    background: ${({theme}) => theme.colors.primary};
    padding: 20px 80px;
    margin-top: 20px;
    border-radius: 50px;
    color: ${({theme}) => theme.colors.background1};
    font-weight: 400;
    font-size: 18px;

    @media screen and (max-width: 576px) {
        font-size: 14px;
        padding: 15px 30px;
    }

    @media (min-width: 576px) and (max-width: 768px) {
       font-size: 16px;
       padding: 15px 30px;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        font-size: 18px;
        padding: 20px 30px;
    }
`;

export const ImageSection = styled.div`
    width: 50%;

    @media screen and (max-width: 576px) {
        display: none;
    }

    @media (min-width: 576px) and (max-width: 768px) {
        display: none;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        display: none;
    }
`;
