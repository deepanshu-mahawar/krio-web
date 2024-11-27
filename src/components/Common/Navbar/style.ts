import styled from "styled-components";

export const MainContainer = styled.nav`
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background: white;
    height: 90px;
    width: 100vw;

    @media screen and (max-width: 576px) {
        height: 70px;
        position: fixed;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        height: 70px;
        position: fixed;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        height: 90px;
        position: fixed;
    }
`;

export const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0px 180px;
    color: black;
    font-weight: 400;
    font-size: 16px;

    @media screen and (max-width: 576px) {
        padding: 0px 15px;
        font-size: 14px;
    }
    
    @media (min-width: 577px) and (max-width: 768px) {
        padding: 0px 20px;
        font-size: 14px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 0px 25px;
    }
`;

export const LogoSection = styled.div`
    width: fit-content;
    height: 70px;

    .logo{
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 576px) {
        height: 60px;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        height: 60px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        height: 80px;
    }

`;

export const Navigations = styled.ul`
    display: flex;
    height: 100%;
    align-items: center;

    @media screen and (max-width: 576px) {
        display: none;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        display: none;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        display: none;
    }
`;

export const ListItem = styled.li<{$active? : boolean}>`
    padding: 10px 20px;
    padding: ${({$active,theme}) => $active ? theme.padding.btnPadding : null};
    background: ${({$active,theme}) => $active ? theme.colors.background2 : theme.colors.background1};
    color: ${({$active,theme}) => $active ? theme.colors.background1 : theme.colors.background2};
    border-radius: ${({$active,theme}) => $active ? theme.borderRadius.radius : null};

    /* padding: 10px 20px;
    &:hover{
        background: black;
        color: white;
        border-radius: 30px;
    } */
`;

export const Buttons = styled.ul`
    display: flex;
    height: 100%;
    align-items: center;

    @media screen and (max-width: 576px) {
        display: none;
    }
    
    @media (min-width: 577px) and (max-width: 768px) {
        display: none;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        display: flex;
    }
`;

export const Btn = styled.li<{$active? : boolean}>`
    padding: 10px 20px;
    padding: ${({$active,theme}) => $active ? theme.padding.btnPadding : null};
    background: ${({$active,theme}) => $active ? theme.colors.primary : theme.colors.background1};
    color: ${({$active,theme}) => $active ? theme.colors.background1 : theme.colors.background2};
    border-radius: ${({$active,theme}) => $active ? theme.borderRadius.radius : null};
    /* padding: 10px 20px;
    &:hover{
        background: #a48ea6;
        color: white;
        border-radius: 30px;
    } */
`;


//For mobile responsive
export const MobileIcon = styled.div`
    display: none;

    .icons{
        font-size: 20px;
    }
    @media screen and (max-width: 576px) {
        display: block;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        display: block;

        .icons{
            font-size: 22px;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        display: block;

        .icons{
            font-size: 25px;
        }
    }
`;

export const MobileMenuSection = styled.nav`
    position: fixed;
    top: 71px;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    padding: 10px 0px;
    font-size: 14px;
    background: white;


    @media (min-width: 768px) and (max-width: 1024px) {
        top: 91px;
        font-size: 16px;
    }
`;

export const MobileNavigations = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
    width: 100%;
`;

export const MobileListItem = styled.li`
    padding: 10px 0px;
    width: 80%;
    &:hover{
        color: white;
        background: black;
        border-radius: 30px;
        font-weight: 300;
    }
`;

export const MobileBtn = styled.li`
    padding: 10px 0px;
    width: 80%;
    &:hover{
        color: white;
        background: #a48ea6;
        border-radius: 30px;
        font-weight: 300;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        display: none;
    }
`;



