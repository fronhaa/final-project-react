import {
  HeaderContainer,
  HeaderDiv,
  HeaderLogo,
  Location,
  Cart,
  NavMenu,
} from "./styles";
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.png';
import { CardsThree, MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Modal } from "../Modal";
import { useState } from "react";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HeaderDiv>
      {isModalOpen && <Modal isModalOpen={isModalOpen} closeModal={closeModal}/>}
      <HeaderContainer>
        <HeaderLogo src={Logo}/>
        <NavMenu>
          <Location >
            <MapPin size={20} color="#8047F8" />
            <span>Porto Alegre, RS</span>
          </ Location>
          <Cart backgroundColor="yellow-light" onClick={openModal}>
            <ShoppingCart size={20} color="#C47F17" />
            {/* <div style={{borderRadius: '50%', backgroundColor: 'red', position: 'absolute', width: '50%', top: '-7px', right: '-7px', color: 'white'}}>1</div> */}
          </Cart>
        </NavMenu>
      </HeaderContainer>
    </HeaderDiv>
  );
}
