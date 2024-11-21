import {
  HeaderContainer,
  HeaderDiv,
  HeaderLogo,
  Location,
  Cart,
  NavMenu,
} from "./styles";
import { Link, useLocation } from "react-router-dom";
import Logo from '../../assets/Logo.png';
import { CardsThree, MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Modal } from "../Modal";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const { coffee } = useContext(CartContext);
  const [isCloseCart, setIsCloseCart] = useState(true);

  console.log('TES',location);

  useEffect(() => {
    if(location.state){
      closeModal();
      closeCart();
    }
  }, [location]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeCart = () => {
    setIsCloseCart(false);
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
            {coffee.length > 0 && <div style={{borderRadius: '50%', backgroundColor: 'red', position: 'absolute', width: '50%', top: '-7px', right: '-7px', color: 'white'}}>{coffee.length}</div>}
          </Cart>
        </NavMenu>
      </HeaderContainer>
    </HeaderDiv>
  );
}
