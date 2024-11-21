import styled from "styled-components";
import { keyframes } from "styled-components";

interface ColorProps {
    color: string;
};

const move = keyframes`
  from {
    transform: rotate(0deg) scale(12) translateX(-20px);
  }
  to {
    transform: rotate(360deg) scale(18) translateX(20px);
  }
`;

const generateDots = (count) => {
    let textShadow = "";

    const colors = ['#DBAC2C', '#8047F8'];

    for (let i = 0; i < count; i++) {
      const x = (-0.5 + Math.random() * 3).toFixed(2);
      const y = (-0.5 + Math.random() * 3).toFixed(2);

      const color = colors[Math.floor(Math.random() * colors.length)];
      textShadow += `${x}em ${y}em 12px ${color}, `;
    }
    return textShadow.slice(0, -2);
};

export const BannerContainer = styled.div`
    position: relative;
    max-width: 100%;
    height: 544px;
    margin: 0 auto;
    padding: 32px 160px;
    backdrop-filter: blur(160px);
    overflow: hidden;
    background: #fff;
    display: block;
    font-size: 52px;

    &::before,
    &::after {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 3em;
        height: 3em;
        content: '.';
        mix-blend-mode: screen;
        animation: ${move} infinite ease-in-out alternate;
        text-shadow: ${(props) => generateDots(100)};
    }

    &::before {
        animation-duration: 10s;
        animation-delay: -27s;
    }

    &::after {
        animation-duration: 10s;
        animation-delay: -32s;
    }
`;

export const DivFlex = styled.div`
    display: flex;
    align-items: unset;
    justify-content: space-between;
    margin-top: 92px;
`;

export const DivInfo = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    & h2 {
        font-size: 48px;
        line-height: 65px;
    }

    & p {
        font-size: 20px;
    }
`;

export const DivInfoImportant = styled.div`
`;

export const ImgBanner = styled.img`
    width: 560px;
    height: 430px;
`;

export const BoxInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    margin-top: 65px;
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