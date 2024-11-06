import styled from "styled-components";


export const CoffeContainr = styled.div`
    max-width: 100%;
    padding: 32px 160px;
    position: relative;

    & h2 {
        font-size: 32px;
        font-weight: 800;
    }

    & div {
        margin-top: 32px;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: space-between;
    }
`;