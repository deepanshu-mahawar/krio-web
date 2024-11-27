import styled from "styled-components";

export const HeadingSection = styled.div`
    /* padding: 360px 0px 0px 180px; */
    padding-left: 180px;

    @media screen and (max-width: 576px) {
        /* padding: 180px 15px 0px 15px; */
        padding: 0px 15px;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        /* padding: 200px 20px 0px 20px; */
        padding: 0px 20px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        /* padding: 250px 25px 0px 25px; */
        padding: 0px 25px;
    }
`;


export const Heading = styled.h1`
    color: ${({theme}) => theme.colors.background1};
    font-size: 85px;
    font-weight: ${({theme}) => theme.fontWeight.weight200};
    line-height: 120px;

    @media screen and (max-width: 576px) {
        font-size: 40px;
        line-height: 50px;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        font-size: 65px;
        line-height: 80px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 80px;
        line-height: 100px;
    }
`;

export const Span = styled.span`
    font-weight: ${({theme}) => theme.fontWeight.semibold};
`;

export const Paragraph = styled.p`
    color: ${({theme}) => theme.colors.background1};
    font-size: ${({theme}) => theme.fontSize.size18};
    font-weight: ${({theme}) => theme.fontWeight.weight300};
    line-height: ${({theme}) => theme.textLineHeight.medium};
    padding: 25px 0px;

    @media screen and (max-width: 576px) {
        font-size: 14px;
        line-height: 25px;
        padding: 10px 0px;

        br{
            display: none;
        }
    }

    @media (min-width: 577px) and (max-width: 768px) {
        font-size: 16px;
        line-height: 30px;
        padding: 15px 0px;

        br{
            display: none;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px){
        font-size: 18px;
        line-height: 40px;
        padding: 20px 0px;

        br{
            display: none;
        }
    }

`;

export const Button = styled.button`
    color: ${({theme}) => theme.colors.background1};
    font-size: 27px;
    border-bottom: 2px solid ${({theme}) => theme.colors.background1};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media screen and (max-width: 576px) {
        font-size: 16px;
        font-weight: 400;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        font-size: 20px;
        font-weight: 400;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 24px;
        font-weight: 400;
    }
`;

