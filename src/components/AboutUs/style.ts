import styled from "styled-components";

export const AboutSection = styled.main`
    display: flex;
    padding: 150px 180px;
    width: 100%;
    gap: 100px;
    
    @media screen and (max-width: 576px) {
        padding: 50px 15px 0px 15px;
        gap: 50px;
        flex-direction: column;
    }

    @media (min-width: 576px) and (max-width: 768px) {
        padding: 100px 20px 0px 20px;
        gap: 50px;
        flex-direction: column;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        padding: 100px 25px 0px 25px;
        gap: 50px;
        flex-direction: column;
    }
`;

export const TextSection = styled.div`
    width: 50%;
    padding: 10px 0px;

    .dividerLine{
        width: 30%;
        padding: 25px 0px;
    }

    @media screen and (max-width: 576px) {
        width: 100%;
    }

    @media (min-width: 576px) and (max-width: 768px) {
        width: 100%;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        width: 100%;
    }
`;