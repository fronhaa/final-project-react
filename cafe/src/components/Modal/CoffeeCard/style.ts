import { styled } from 'styled-components'

interface CoffeButtonProps {
    width: number;
    height: number;
    padding: number;
    marginTop: number;
}

export const CoffeeCardContainer = styled.div`
  display: flex !important;
  //padding: 0 2rem;
  gap: 1rem;
  justify-content: space-between;
  flex-direction: row !important;
  width: 100%;
  position: relative;
`
export const CoffeeAmountContainerWithText = styled.div`
  display: flex !important;
  flex-direction: row !important;
  gap: 0.5rem;
  position: relative;
  width: 100%;

  & > span:first-of-type {
    font-weight: 400;
    color: ${props => props.theme['base-subtitle']};
    font-size: 16px;
    position: absolute;
    top: 20px;
    left: 20px;
  }
`
export const CoffeeName = styled.span`
  font-size: 1rem;
  font-weight: 900;
  top: -35px !important;
  text-align: baseline;
`

export const CoffeActions = styled.div`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  flex-direction: row !important;
  top: 2px;
  left: 20px;
`

export const ButtonWithIcon = styled.button<CoffeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${(props) => props.theme['base-button']} !important;
  gap: 0.5rem;
  border-radius: 8px;
  padding-left: ${props => props.padding}px;
  padding-right: ${props => props.padding}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-top: ${props => props.marginTop}px !important;

  & span {
    font-weight: 400;
    font-size: 12px;
    color: ${(props) => props.theme['base-text']}
  }
`
export const CurrencyValue = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 900;
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  text-align: center;
  position: absolute;
  top: 4px;
  right: 0;
`
export const Spacer = styled.div`
  width: 90%;
  border-bottom: 2px solid ${(props) => props.theme['base-button']};
  align-self: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`