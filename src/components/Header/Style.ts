import styled from "styled-components";

export const HeaderSection = styled.header`
    height: 100px;
    width: 100vw;
    position: fixed;
    z-index: 2;
    padding: 0px 180px;
    background: ${({theme}) => theme.colors.background1};
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .logolink{
        height: 100px;
        padding: 10px 0px;
    }

    .logo{
        height: 100%;
        width: 100%;
    }

    .mobileIcons{
        color: black;
        font-size: 30px;
    }

    @media screen and (max-width: 576px) {
    height: 70px;
    padding: 0px 15px;
    
    .logolink{
        height: 70px;
        padding: 10px 0px;
    }

    .logo{
        height: 100%;
        width: 100%;
    }

    .mobileIcons{
        color: black;
        font-size: 20px;
    }
    }

    @media (min-width: 577px) and (max-width: 768px) {
        height: 80px;
        padding: 0px 20px;

        .logolink{
            height: 80px;
            padding: 5px 0px;
        }

        .logo{
            height: 100%;
            width: 100%;
        }

        .mobileIcons{
            color: black;
            font-size: 30px;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px)
    {
        height: 90px;
        padding: 0px 25px;

        .logolink{
            height: 90px;
            padding: 5px 0px;
        }

        .logo{
            height: 100%;
            width: 100%;
        }
    }
`;

export const ButtonSection = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
`;

export const Button = styled.button<{$active?:boolean}>`
    background: ${({$active,theme}) => $active ? theme.colors.primary : "transparent"};
    color: ${({$active,theme}) => $active ? theme.colors.background1 : theme.colors.background2};
    padding: ${({$active,theme}) => $active ? theme.padding.btnPadding : null};
    border-radius: ${({$active,theme}) => $active ? theme.borderRadius.radius : null};

    @media screen and (max-width: 576px) {
        display: none;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        font-size: 16px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 18px;
    }
`;

export const MobileIcons = styled.div`
    display: none;

    @media screen and (max-width: 576px) {
        display: flex;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        display: block;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        display: block;
    }
`;

export const MobileMenu = styled.div`
    position: fixed;
    top: 72px;
    left: 0px;
    width: 100%;
    height: 100vh;
    background-color: white;
    padding: 20px;
    text-align: center;

    .mobileMenu{
        display: block;
        margin: 20px;
        font-size: 14px;
        color: black;
        text-decoration: none;

        &:hover{
            background-color: black;
            color: white;
            padding: 10px 0px;
            border-radius: 50px;
        }
    }

    .logSignBtn{
        display: block;
        margin: 20px;
        font-size: 14px;
        color: black;
        text-decoration: none;

        &:hover{
            background-color: #a48ea6;
            color: white;
            padding: 10px 0px;
            border-radius: 50px;
        }
    }

    @media (min-width: 577px) and (max-width: 768px) {
        top: 82px;
        .mobileMenu{
            font-size: 16px;

            &:hover{
                padding: 15px 0px;
            }
        }
        .logSignBtn{
            display: none;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        top: 92px;
        .mobileMenu{
            font-size: 18px;
            &:hover{
                padding: 15px 0px;
            }
        }

        .logSignBtn{
            display: none;
        }
    }
`;

