import React, { useCallback, useContext, useEffect, useState } from "react"
import { ButtonPayment, ButtonText, ContentContainer, DeliveryFormContainer, DivAdress, DivContentSeeRequest, DivPayment, DivSeeRequest, IconSubText, IconText, InputContainer, InputGeneric, InputWrapper, ModalContainer, ModalContent, SubTitleContainer, XStyled } from "./style"
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { Bounce, toast, ToastPosition } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { coffeeCartType } from "../../reduces/cart/reducer";
import { CoffeeCard } from "./CoffeeCard";


interface ModalProps {
  closeModal: (value: boolean) => void;
  isModalOpen: boolean
}

export function Modal({isModalOpen, closeModal}: ModalProps) {
    const { coffee } = useContext(CartContext)
    const [total, setTotal] = useState(0)
    const [delivery, setDelivery] = useState(3.5)
    const navigate = useNavigate()
    const [adress, setAdress] = useState({
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
    })

    const [methodPayment, setMethodPayment] = useState('')
    function getTotal() {
        console.log("Calculando total para coffee:", coffee);
    
        const totalValue = (coffee || []).reduce((acc, item) => {
            return acc + (item?.valueTotal || 0);
        }, 0);
    
        console.log("Valor total calculado:", totalValue);
        setTotal(totalValue);
        setDelivery(3.5);
    }
    
    useEffect(() => {
        console.log("useEffect disparado com coffee:", coffee);
        getTotal();
    }, [coffee, getTotal]);

  function handleConfirmDelivery() {
    const toastOptions = {
        position: "top-right" as ToastPosition,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    };

    if (methodPayment === '') {
      toast.info('Necessita de um metodo de pagamento', toastOptions)
      return
    }
    if (adress.cep === '') {
      toast.info('Necessita de um CEP', toastOptions)
      return
    }
    if (adress.rua === '') {
      toast.info('Necessita de um Rua', toastOptions)
      return
    }
    if (adress.numero === '') {
      toast.info('Necessita de um Número', toastOptions)
      return
    }
    if (adress.bairro === '') {
      toast.info('Necessita de um Bairro', toastOptions)
      return
    }
    if (adress.cidade === '') {
      toast.info('Necessita de um Bairro', toastOptions)
      return
    }
    if (adress.uf === '') {
      toast.info('Necessita de um uf', toastOptions)
      return
    }

    const state = {
      methodPayment,
      value: total + delivery,
      adress,
    }
    navigate('/checkout', { state })
  }

  return (
    <>
        <ModalContainer>
          <ModalContent>
            <XStyled onClick={() => closeModal(!isModalOpen)} />

            <ContentContainer>
                <div>
                    <h2>Contemple seu pedido</h2>
                    <div>
                        <DivAdress>
                            <DeliveryFormContainer>
                                <SubTitleContainer>
                                    <IconText>
                                        <MapPinLine size={22} color="#c47f17" />
                                        <span>Endereço de Entrega</span>
                                    </IconText>
                                    <IconText>
                                        <IconSubText>
                                        Informe o endereço onde deseja receber seu pedido
                                        </IconSubText>
                                    </IconText>
                                </SubTitleContainer>
                                <InputGeneric
                                $width="40%"
                                type="text"
                                placeholder="CEP"
                                onChange={(event) =>
                                    setAdress({ ...adress, cep: event.target.value })
                                }
                                />
                                <InputGeneric
                                type="text"
                                placeholder="Rua"
                                onChange={(event) =>
                                    setAdress({ ...adress, rua: event.target.value })
                                }
                                />
                                <InputContainer>
                                <InputGeneric
                                    $width="40%"
                                    type="text"
                                    placeholder="Número"
                                    onChange={(event) =>
                                    setAdress({ ...adress, numero: event.target.value })
                                    }
                                />
                                <InputWrapper>
                                    <InputGeneric
                                    $width="100%"
                                    type="text"
                                    placeholder="Complemento"
                                    onChange={(event) =>
                                        setAdress({ ...adress, complemento: event.target.value })
                                    }
                                    />
                                </InputWrapper>
                                </InputContainer>
                                <InputContainer>
                                    <InputGeneric
                                        $width="40%"
                                        type="text"
                                        placeholder="Bairro"
                                        onChange={(event) =>
                                        setAdress({ ...adress, bairro: event.target.value })
                                        }
                                    />
                                    <InputGeneric
                                        $width="40%"
                                        type="text"
                                        placeholder="Cidade"
                                     onChange={(event) =>
                                        setAdress({ ...adress, cidade: event.target.value })
                                        }
                                    />
                                    <InputGeneric
                                        $width="20%"
                                        type="text"
                                        placeholder="UF"
                                        onChange={(event) =>
                                        setAdress({ ...adress, uf: event.target.value })
                                        }
                                    />
                                </InputContainer>
                            </DeliveryFormContainer>
                        </DivAdress>

                        <DivPayment>
                            <DeliveryFormContainer>
                                <SubTitleContainer>
                                <IconText>
                                    <CurrencyDollar size={22} color="#8047f8" />
                                    <span>Pagamento</span>
                                </IconText>
                                <IconText>
                                    <IconSubText>
                                    O pagamento é feito na entrega. Escolha a forma que deseja
                                    pagar
                                    </IconSubText>
                                </IconText>
                                </SubTitleContainer>
                                <InputContainer>
                                    <ButtonPayment
                                        onClick={() => setMethodPayment('Cartão de Crédito')}
                                     style={{
                                        backgroundColor:
                                            methodPayment === 'Cartão de Crédito' ? '#ebe5f9' : '',
                                        }}
                                    >
                                        <CreditCard size={22} color="#8047f8" />
                                        <ButtonText>Cartão de Crédito</ButtonText>
                                    </ButtonPayment>
                                    <ButtonPayment
                                        onClick={() => setMethodPayment('Cartão de Débito')}
                                        style={{
                                        backgroundColor:
                                            methodPayment === 'Cartão de Débito' ? '#ebe5f9' : '',
                                        }}
                                    >
                                        <Bank size={22} color="#8047f8" />
                                        <ButtonText>Cartão de Debíto</ButtonText>
                                    </ButtonPayment>
                                    <ButtonPayment
                                        onClick={() => setMethodPayment('Dinheiro')}
                                        style={{
                                        backgroundColor:
                                            methodPayment === 'Dinheiro' ? '#ebe5f9' : '',
                                        }}
                                    >
                                        <Money size={22} color="#8047f8" />
                                        <ButtonText>Dinheiro</ButtonText>
                                    </ButtonPayment>
                                </InputContainer>
                            </DeliveryFormContainer>
                        </DivPayment>
                    </div>
                </div>

                <div>
                    <h2>Cafés selecionados</h2>
                    <DivSeeRequest>
                        <DivContentSeeRequest>

                        {coffee.map((item: coffeeCartType) => (
                            <CoffeeCard
                                image={item.image}
                                name={item.name}
                                value={item.value}
                                valueTotal={item.valueTotal}
                                amount={item.amount}
                                key={item.name}
                            />
                            ))}

                        </DivContentSeeRequest>

                        <div>
                            <div>
                                <span>Total de itens</span>
                                <div>
                                    <span>R$</span>
                                    <span>29,70</span>
                                </div>
                            </div>
                            <div>
                                <span>Entrega</span>
                                <div>
                                    <span>R$</span>
                                    <span>3,50</span>
                                </div>
                            </div>
                            <div>
                                <span>Total</span>
                                <div>
                                    <span>R$</span>
                                    <span>33,20</span>
                                </div>
                            </div>
                            <button onClick={handleConfirmDelivery}>CONFIRMAR PEDIDO</button>
                        </div>
                    </DivSeeRequest>
                </div>
            </ContentContainer>
          </ModalContent>
        </ModalContainer>
    </>
  )
}