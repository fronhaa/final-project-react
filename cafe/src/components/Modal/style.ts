import { X } from 'phosphor-react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  z-index: 900;
  transform: all .5s ease-in-out;

  animation: ${fadeIn} 0.2s ease-in-out;

  & button {
    background-color: ${(props) => props.theme['background']};
  }
`


export const ModalContent = styled.div`
  background-color: ${(props) => props.theme['background']};
  padding: 20px;
  border-radius: 5px;
  min-width: 1160px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  position: relative;
`;

export const XStyled = styled(X)`
  color: ${(props) => props.theme['gray-900']};
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: bold;
  transition: color .2s ease-in-out;

  &:hover {
    cursor: pointer;
    color: red;
  }
`;

export const ContentContainer = styled.div`
    justify-content: space-between;
    display: flex;

    & div:nth-child(1) {
        & div {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
    }

    & h2 {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 16px;
        line-height: 23.4px;
        color: ${props => props.theme['base-subtitle']};
    }
`;

export const DivSeeRequest = styled.div`
    background-color: ${props => props.theme['base-card']};
    border-radius: 6px 44px;
    padding: 40px;
    width: 448px;
    max-height: 80vh;

    & div {
        display: flex;
        flex-direction: column;
        gap: 12px;

        & button {
            background-color: ${props => props.theme['yellow']};
            width: 100%;
            padding: 12px 8px;
            border-radius: 6px;
            color: ${props => props.theme['white']};
            font-weight: 700;
            line-height: 22.4px;
            font-size: 14px;
            border: none;
            margin-top: 30px;
            cursor: pointer;
        }

        & div {
            display: flex;
            flex-direction: row;
            gap: 5px !important;
            align-items: center;
            justify-content: space-between;
        }
    }
`;

export const DivContentSeeRequest = styled.div`
    overflow-y: auto;
    max-height: 340px;
`;

export const DivAdress = styled.div`
    background-color: ${props => props.theme['base-card']};
    width: 640px;
    height: 372px;
    border-radius: 6px;
`;

export const DivPayment = styled.div`
    background-color: ${props => props.theme['base-card']};
    width: 640px;
    height: 207px;
    border-radius: 6px;
`;

export const DeliveryFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
`

export const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const IconText = styled.div`
  display: flex;
  flex-direction: row !important;
  gap: 0.5rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const IconSubText = styled.span`
  font-weight: normal;
  color: ${(props) => props.theme['base-label']};
  padding-left: 1.875rem;
`

export const InputGeneric = styled.input<{ $width?: string }>`
  background-color: ${(props) => props.theme['base-hover']};
  border: none;
  border-radius: 8px;
  width: ${(props) => props.$width || '100%'};
  height: 2.625rem;
  font-size: 1rem;
  padding-left: 1rem;
`

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  &::after {
    content: 'Opcional';
    position: absolute;
    right: 8px;
    top: 50%;
    font-size: 15px;
    transform: translateY(-50%);
    font-style: italic;
    margin-right: 1rem;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  gap: 12px;
  justify-content: space-between;
`

export const ButtonPayment = styled.button`
  background-color: ${(props) => props.theme['base-button']};
  display: flex;
  gap: 0.5rem;
  border: none;
  padding: 16px .5rem 16px .5rem;
  align-items: center;
  width: 11.175rem;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
`

export const ButtonText = styled.span`
  color: ${(props) => props.theme['base-label']};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 900;
`