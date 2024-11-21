import { ShoppingCart } from "@phosphor-icons/react";
import { CoffeeType } from "..";
import { Cart } from "../../../../components/Header/styles";
import { CardCoffeDiv, DivButtonsAddDecrease, DivText, DivValue } from "./style";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";

export function CardCoffe({img, name, description, value, tag}: CoffeeType) {

    const [amount, setAmount] = useState(1)
    const [valueTotal, setValueTotal] = useState(value)
    const { addCoffee } = useContext(CartContext)

    function handleChangeAmount(plus: boolean) {
        if (plus) {
        setAmount((state) => state + 1)
        setValueTotal((state) => state + value)
        } else {
        if (amount === 1) {
            return
        }
        setAmount((state) => state - 1)
        setValueTotal((state) => state - value)
        }
    }

    function handleAddtoCart() {
        addCoffee({
        name,
        valueTotal,
        amount,
        value,
        image: img,
        });
    }

    return (
        <>
            <CardCoffeDiv>

                <DivText>
                    <img src={img} alt="Imagem do café" />
                    <div>
                        {tag.map(element => (
                            <span key={element.id}>{element.name}</span>
                        ))}
                    </div>
                    <h3>{name}</h3>
                    <label>{description}</label>
                </DivText>

                <DivValue>
                    <div>
                        <span>R$</span> 
                        <h4>{Number(value?.toFixed(2))?.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                        })}</h4>
                    </div>

                    <div>
                        <DivButtonsAddDecrease padding={8} height={38} width={72} marginTop={0} flexWrap={'nowrap'}>
                            <button onClick={() => handleChangeAmount(false)}>-</button>
                            <input value={amount} />
                            <button onClick={() => handleChangeAmount(true)}>+</button>
                        </DivButtonsAddDecrease>
                        <div>
                            <Cart backgroundColor="purple-dark">
                                <ShoppingCart size={20} color="white" onClick={handleAddtoCart}/>
                            </Cart>
                        </div>
                    </div>
                </DivValue>
            </CardCoffeDiv>
        </>
    );
}