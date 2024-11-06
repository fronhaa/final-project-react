import { useContext, useState } from "react"
import { CartContext } from "../../../contexts/CartContext"
import { ButtonWithIcon, CoffeActions, CoffeeAmountContainerWithText, CoffeeCardContainer, CoffeeName, Container, CurrencyValue, Spacer } from "./style"
import { DivValue } from "../../../pages/Home/Coffes/CoffeeCard/style"
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
        setAmount((state) => state + 1)
        setValueTotal((state) => state + value)
        updateList({ image, name, valueTotal, value, amount: coffeAmount + 1 })
        } else {
        setAmount((state) => state - 1)
        setValueTotal((state) => state - value)
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
                <DivValue>
                    <div>
                        <div>
                            <button onClick={() => handleChangeAmount(false)}>-</button>
                            <input type="nuber" value={amount} />
                            <button onClick={() => handleChangeAmount(true)}>+</button>
                        </div>
                    </div>
                </DivValue>
              <ButtonWithIcon onClick={() => handleRemoveCoffee()}>
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