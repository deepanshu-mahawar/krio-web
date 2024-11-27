import styled from "styled-components";

export const Section = styled.main`
    display: flex;
    justify-content: center;
    border: 2px solid ${({theme}) => theme.colors.background2};
    margin: 100px 180px;
    border-radius: 55px;
    box-shadow: 0px -13px #a68ea8;
`;

export const TextSection = styled.div`
    width: 60%;
    padding: 50px;
`;

export const Heading = styled.h1`
    font-size: 55px;
    font-weight: ${({theme}) => theme.fontWeight.semibold};
`;

export const Paragraph = styled.p`
    font-size: ${({theme}) => theme.fontSize.size18};
    line-height: ${({theme}) => theme.textLineHeight.medium};
    color: #535152;
`;
export const Form = styled.div`
    display: flex;
    width: 100%;
    padding: 25px 0px;
    gap: 30px;
`;

export const FormSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    font-size: ${({theme}) => theme.fontSize.size20};
    font-weight: ${({theme}) => theme.fontWeight.semibold};
    margin-bottom: 10px;
`;

export const InputField = styled.input`
    border: 2px solid #535152;
    border-radius: 50px;
    padding: 20px 30px;

    &::placeholder{
        color: ${({theme}) => theme.colors.background2};
        font-size: ${({theme}) => theme.fontSize.size18};
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
`;

export const Button = styled.button`
    background: ${({theme}) => theme.colors.primary};
    padding: 20px 80px;
    margin-top: 20px;
    border-radius: 50px;
    color: ${({theme}) => theme.colors.background1};
    font-size: ${({theme}) => theme.fontSize.size20};
`

export const ImageSection = styled.div`
    width: 50%;
`;
