import styled from "styled-components";

export const FooterSection = styled.footer`
    color: ${({theme}) => theme.colors.background1};
    padding: 50px 180px;
    background-color: ${({theme}) => theme.colors.background2};

    .line{
        border-color: #262626;
    }

    @media screen and (max-width: 576px) {
        display: none;
    }

    @media (min-width: 577px) and (max-width: 768px){
        display: none;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        display: none;
    }
`;

export const LogoSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;

    .logo{
        width: 18%;
    }
`;

export const Text = styled.p`
    font-size: 25px;
    font-weight: ${({theme}) => theme.fontWeight.light};
`;

export const ParagraphSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 0px;
`;

export const Text2 = styled.p`
    line-height: ${({theme}) => theme.textLineHeight.normal};
    font-weight: 200;
`;

export const IconSection = styled.div`
    display: flex;
    gap: 15px;
    height: 55px;
`;

export const Icons = styled.a`
    padding: 10px 12px;
    border: 1px solid ${({theme}) => theme.colors.background1};
    border-radius: 30px;

    .icon{
        font-size: ${({theme}) => theme.fontSize.size30};
    }
`;

export const LinkSection = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    font-weight: ${({theme}) => theme.fontWeight.weight300};
    font-size: ${({theme}) => theme.fontSize.size16};

    .listItems{
        display: flex;
        gap: 30px;
    }

    .vl{
        border-left: 1px solid #262626;
        padding-left: 30px;
    }
`;


export const FooterForMobile = styled.div`
    display: none;

  @media screen and (max-width: 576px) {
       display: block;
       background-color: black;
       padding: 0px 20px;
       padding-top: 40px;
       padding-bottom: 30px;

    .LogoLink{
        display: flex;
        flex-direction: column;
        width: 180px;
    }

    .para{
        color: white;
        padding-top: 20px;
        font-weight: 200;
        line-height: 25px;
        width: 100%;
        font-size: 14px;
    }

    .copyright{
        text-align: center;
        color: white;
        font-weight: 300;
        width: 100%;
        padding-top: 40px;
        font-size: 14px;
        font-weight: 200;
    }

    .follow{
        font-size: 18px;
        color: white;
        padding-top: 25px;
        font-weight: 300;
    }
  }  

  @media (min-width: 576px) and (max-width: 768px) {
       display: block;
       background-color: black;
       padding: 0px 30px;
       padding-top: 40px;
       padding-bottom: 30px;

    .LogoLink{
        display: flex;
        flex-direction: column;
        width: 200px;
    }

    .para{
        color: white;
        padding-top: 20px;
        font-weight: 200;
        line-height: 25px;
        width: 100%;
        font-size: 16px;
    }

    .copyright{
        text-align: center;
        color: white;
        font-weight: 300;
        width: 100%;
        padding-top: 40px;
        font-size: 16px;
        font-weight: 200;
    }

    .follow{
        font-size: 22px;
        color: white;
        padding-top: 25px;
        font-weight: 300;
    }
  }  

  @media (min-width: 768px) and (max-width: 1024px){ 
       display: block;
       background-color: black;
       padding: 0px 30px;
       padding-top: 40px;
       padding-bottom: 30px;

    .LogoLink{
        display: flex;
        flex-direction: column;
        width: 250px;
    }

    .para{
        color: white;
        padding-top: 20px;
        font-weight: 300;
        line-height: 25px;
        width: 100%;
        font-size: 18px;
    }

    .copyright{
        text-align: center;
        color: white;
        width: 100%;
        padding-top: 40px;
        font-size: 18px;
        font-weight: 300;
    }

    .follow{
        font-size: 22px;
        color: white;
        padding-top: 25px;
        font-weight: 300;
    }
  }  
`;



export const FollowIcons = styled.div`
    display: flex;
    gap: 10px;
    padding-top: 10px;
    padding-bottom: 40px;

    a{
        border: 1px solid white;
        border-radius: 50px;
        padding: 7px;
    }
    
    .icon{
        font-size: 15px;
        color: white;
    }

    @media (min-width: 577px) and (max-width: 768px){
        .icon{
        font-size: 20px;
        color: white;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        .icon{
            font-size: 18px;
            color: white;
        }
    }
    
`;

export const NavLink1 = styled.nav`

    ul{
        display: flex;
        flex-direction: column;
        gap: 18px;
        color: white;
        font-size: 14px;
        font-weight: 200;
    }

    a{
        &:hover{
            font-size: 18px;
            border-bottom: 1px solid white;
        }
    }

    @media screen and (max-width: 576px) {
        a{
            &:hover{
                font-size: 16px;
            }
        }
    }
    
    @media (min-width: 577px) and (max-width: 768px){
    a{
        font-size: 16px;
        &:hover{
            font-size: 18px;
            border-bottom: 1px solid white;
        }
    }

    }

    @media (min-width: 768px) and (max-width: 1024px) {
        a{
            font-size: 18px;
            font-weight: 300;
            &:hover{
                font-size: 20px;
                border-bottom: 1px solid white;
            }
        }
    }
`;



