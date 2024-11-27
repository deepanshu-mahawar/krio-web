import styled from "styled-components";

export const ImageSection = styled.div`
    width: 50%;

    .image{
        border-radius: 50px;
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