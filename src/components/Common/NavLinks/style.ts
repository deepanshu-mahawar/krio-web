import styled from "styled-components";

export const Navigations = styled.nav`
    text-align: center;
    font-size: 16px;
    color: black;
    background: transparent;
    font-weight: 400;

    @media (max-width: 1200px) {
        display: none;
    }
`;

export const NavMenus = styled.a<{$active?:boolean}>`
    margin: 0px 15px;
    background: ${({$active,theme}) => $active ? theme.colors.background2 : "transparent"};
    color: ${({$active,theme}) => $active ? theme.colors.background1 : theme.colors.background2};
    padding: ${({$active,theme}) => $active ? theme.padding.btnPadding : null};
    border-radius: ${({$active,theme}) => $active ? theme.borderRadius.radius : null};
`;
