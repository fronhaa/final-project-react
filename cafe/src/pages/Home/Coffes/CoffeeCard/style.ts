import styled from "styled-components";

interface DivButtonsAddDecreaseProps {
    padding: number,
    height: number,
    width:number,
    marginTop:number,
    flexWrap?: string
};

export const CardCoffeDiv = styled.div`
    width: 256px;
    height: 310px;
    border-radius: 6px 36px;
    background-color: ${props => props.theme["base-card"]};
    display: flex;
    justify-content: center;
    position: relative;
`;

export const DivText = styled.div`
    position: absolute;
    top: -35px;

    & img {
        width: 120px;
        height: 120px;
        margin-left: 50%;
        transform: translate(-50%);
        margin-top: -20px;
    }

    & div {
        display: flex;
        justify-content: center;
        gap: 4px;
        top: 80px;
        width: 100% ;
        position: absolute;
    }

    & span {
        padding: 4px 8px;
        background-color: ${props => props.theme["yellow-light"]};
        font-size: 10px;
        color: ${props => props.theme["yellow-dark"]};
        border-radius: 100px;
        height: 21px;
        text-align: center;
        font-weight: 700;
    }

    & h3 {
        font-size: 20px;
        font-weight: 700;
        width: 100%;
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }

    & label {
        text-align: center;
        color: ${props => props.theme["base-label"]};
        margin-top: -15px;
        font-weight: 400;
        line-height: 18.2px;
        padding: 0px 20px 0px 20px;
    }
`;

export const DivValue = styled.div`
    display: flex !important;
    flex-direction: row !important;
    gap: 0 !important;
    margin-top: 0px !important;
    height: 38px !important;
    align-items: center;
    position: relative;
    width: 100%;
    top: 250px;
    padding: 0px 25px 0px 25px;

    & div:nth-child(1) {
        & span {
            align-self: flex-end;
            display: flex;
        }
    }

    & div {
        position: relative;
        gap: 4px;
        align-items: center;
        margin-top: 0;

        & h4 {
            font-size: 20px;
            font-weight: 800;
            color: ${props => props.theme["base-text"]};
        }

        & span {
            font-size: 14px;
            font-weight: 400;
            background-color: transparent;
            color: ${props => props.theme["base-text"]};
            padding-top: 4px;
        }

        & button {
            border: none;
        }
    }
`;

export const DivButtonsAddDecrease = styled.div<DivButtonsAddDecreaseProps>`
    background-color: ${props => props.theme["base-button"]};
    padding: ${props => props.padding}px;
    border-radius: 6px;
    display: flex;
    flex-direction: row !important;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    flex-wrap: ${props => props.flexWrap} !important;

    & button {
        background-color: ${props => props.theme["base-button"]} !important;
        margin-top: ${props => props.marginTop}px !important;
        color: ${props => props.theme['purple']} !important;
        padding: 0 !important;
        width: 50px !important;
        font-size: 20px !important;
        cursor: pointer;
    }

    & input {
        border: none;
        background: transparent;
        text-align: center;
        width: 20px;
        height: 21px;
    };
`;