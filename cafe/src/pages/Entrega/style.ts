import styled from "styled-components";

interface AppProps {
    backgroundColor: string
}

export const EntregaContainer = styled.div`
    display: flex;
    max-width: 100rem;
    padding: 0 160px 0 160px;
    align-items: center;
    justify-content: space-between;

    & div:nth-child(1) {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    & h1 {
        font-weight: 800;
        color: ${props => props.theme["yellow-dark"]};
        font-size: 32px;
    }

    & h2 {
        font-size: 20px;
        color: ${props => props.theme["base-subtitle"]};
        font-weight: 400;
    }
`;

export const BoxInfoRequest = styled.div`
  padding: 40px;
  width: 526px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
  height: 270px;
  background-color: white;
  position: relative;
  border-radius: 6px 36px;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    border-radius: 6px 36px;
    z-index: -1;
    padding: 2px;
  }

  &::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
    border-radius: 6px 36px;
    z-index: -2;
  }
`;

export const InfoContent = styled.div<AppProps>`
    display: flex;
    gap: 12px;
    flex-direction: row !important;

    & div:nth-child(1) {
        background-color: ${props => props.theme[props.backgroundColor]};
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & p {
        font-size: 16px;
        font-weight: 400;
        line-height: 20.8px;
    }
`;