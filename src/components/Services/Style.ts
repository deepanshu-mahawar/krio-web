import styled from "styled-components";

export const PortfolioSection = styled.main`
    display: flex;
    flex-direction: column;
    padding: 100px 180px 80px 180px;


    @media screen and (max-width: 576px) {
        padding: 50px 15px 0px 15px;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        padding: 50px 20px 0px 20px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 50px 25px 0px 25px;
    }
`;

export const GridLayout = styled.div`
    display: grid;
    padding-top: 50px;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: 576px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

