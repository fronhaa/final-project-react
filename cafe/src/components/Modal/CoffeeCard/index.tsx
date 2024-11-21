import { useContext, useState } from "react"
import { CartContext } from "../../../contexts/CartContext"
import { ButtonWithIcon, CoffeActions, CoffeeAmountContainerWithText, CoffeeCardContainer, CoffeeName, Container, CurrencyValue, Spacer } from "./style"
import { DivButtonsAddDecrease, DivValue } from "../../../pages/Home/Coffes/CoffeeCard/style"
import { Trash } from "phosphor-react"
import { coffeeCartType } from "../../../reduces/cart/reducer"


export function CoffeeCard({
    image,
    name,
    valueTotal,
    value,
    amount,
  }: coffeeCartType){

    const [coffeAmount, setAmount] = useState(amount)
    const [totalValue, setValueTotal] = useState(valueTotal)
    const { updateList, removeList } = useContext(CartContext)

    function handleChangeAmount(plus: boolean) {
        if (plus) {
        setAmount((state) => state + 1);
        setValueTotal((state) => state + value)
        updateList({ image, name, valueTotal, value, amount: coffeAmount + 1 })
        } else {
        if (coffeAmount === 1) {
          return;
        }
        setAmount((state) => state - 1)
        setValueTotal((state) => state - value);
        updateList({ image, name, valueTotal, value, amount: coffeAmount - 1 })
        }
    }

    function handleRemoveCoffee() {
        removeList({ image, name, valueTotal, value, amount: coffeAmount })
    }

    return (
        <Container>
        <CoffeeCardContainer>
          <img src={image} alt="" width={80} />
          <CoffeeAmountContainerWithText>
            <CoffeeName>{name}</CoffeeName>
            <CoffeActions>
                <DivButtonsAddDecrease padding={8} height={40} width={72} marginTop={0}>
                    <button onClick={() => handleChangeAmount(false)}>-</button>
                    <input value={coffeAmount} />
                    <button onClick={() => handleChangeAmount(true)}>+</button>
                </DivButtonsAddDecrease>
                <ButtonWithIcon height={40} width={91} padding={8} marginTop={0} onClick={() => handleRemoveCoffee()}>
                    <Trash size={20} color="#8047f8" />
                    <span>Remover</span>
                </ButtonWithIcon>
            </CoffeActions>
          </CoffeeAmountContainerWithText>
          <CurrencyValue>
            {Number(totalValue?.toFixed(2))?.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            })}
          </CurrencyValue>
        </CoffeeCardContainer>
        <Spacer />
      </Container>
    );
}