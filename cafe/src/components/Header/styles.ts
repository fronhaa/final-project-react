import styled from "styled-components";

interface backgroundColorProps {
  backgroundColor: string;
};

export const HeaderDiv = styled.div`
  max-width: 100%;
  background-color: ${(props) => props.theme.electric};
`;

export const HeaderContainer = styled.div`
  max-width: 100rem;
  padding: 32px 160px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  width: 85px;
  height: 40px;
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 12px;

  & a {
    color: ${(props) => props.theme["gray-900"]};
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme["primary-300"]};
    }
  }
`;

export const Location = styled.button`
  display: flex;
  gap: 4px;
  background-color: ${props => props.theme["purple-light"]};
  padding: 8px;
  border-radius: 6px;
  align-items: center;
  border: none;

  & span {
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme["purple-dark"]};
    line-height: 18.2px;
  }
`;

export const Cart = styled.button<backgroundColorProps>`
  background-color: ${props => props.theme[props.backgroundColor]};
  padding: 8px;
  border-radius: 6px;
  align-items: center;
  display: flex;
  text-decoration: none;
  border: none;
  position: relative;
`;