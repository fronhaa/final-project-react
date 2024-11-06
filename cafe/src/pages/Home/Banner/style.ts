import styled from "styled-components";

interface ColorProps {
    color: string;
};

export const BannerContainer = styled.div`
    max-width: 100%;
    height: 544px;
    margin: 0 auto;
    padding: 32px 160px;
`;

export const DivFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 92px;
`;

export const DivInfo = styled.div`
    width: 670px;

    & h2 {
        font-size: 48px;
    }

    & p {
        font-size: 20px;
    }
`;

export const DivInfoImportant = styled.div`
`;

export const ImgBanner = styled.img`
    width: 476px;
    height: 360px;
`;

export const BoxInfo = styled.div`
    width: 670px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    margin-top: 50px;
    gap: 12px;

    & div {
        display: flex;
        flex-direction: column;
        gap: 12px;

        & div {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            gap: 8px;
        }
    }
`;

export const BoxCircle = styled.div<ColorProps>`
    border-radius: 50%;
    background-color: ${props => props.theme[props.color]};
    width: 32px;
    height: 32px;
`;