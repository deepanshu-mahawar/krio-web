import styled from "styled-components";

export const PortfolioSection = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 150px 80px 150px;

    @media screen and (max-width: 576px) {
        padding: 50px 15px 0px 15px;
    }

    @media (min-width: 576px) and (max-width: 768px) {
        padding: 50px 20px 0px 20px;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        padding: 80px 25px 0px 25px;
    }
`;

export const GridLayout = styled.div`
    display: grid;
    padding: 80px 0px;
    gap: 80px;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 576px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    @media (min-width: 576px) and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 10px 0px 30px 0px;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        display: flex;
        flex-direction: column;
        padding: 30px 0px;
        gap: 50px;
    }
`;

export const Button = styled.button`
    color: ${({theme}) => theme.colors.background1};
    padding: 20px 40px;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 40px;
    font-weight: 300;
    font-size: ${({theme}) => theme.fontSize.size18};

    @media screen and (max-width: 576px) {
        padding: 15px 30px;
        font-size: 14px;
        margin-top: 20px;
    }

    @media (min-width: 576px) and (max-width: 768px) {
        padding: 15px 30px;
        font-size: 16px;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        padding: 20px 30px;
        font-size: 18px;
    }
`;
