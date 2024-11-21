import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { BoxInfoRequest, InfoContent, EntregaContainer } from "./style";
import Animation from '../../assets/Animation.json';
import Lottie from "lottie-react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from "react";

export function Entrega() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(!location.state){
            navigate('/');
        }
    }, []);

    if (!location.state) {
        return null;
    }

    return (
        <>
            <EntregaContainer>
                <div>
                    <h1>Uhu! Pedido confirmado</h1>
                    <h2>Agora é só aguardar que logo o café chegará até você</h2>

                    <BoxInfoRequest>
                        <InfoContent backgroundColor="purple">
                            <div><MapPin size={20} color="#fff" /></div>
                            <div>
                                <p>Entrega em <span>{location.state.adress.rua}, {location.state.adress.numero}</span></p>
                                <p>{location.state.adress.bairro} - {location.state.adress.cidade}, {location.state.adress.uf}</p>
                            </div>
                        </InfoContent>
                        <InfoContent backgroundColor="yellow">
                            <div><Timer size={20} color="white" /></div>
                            <div>
                                <p>Previsão de entrega</p>
                                <p>20 min - 30 min</p>
                            </div>
                        </InfoContent>
                        <InfoContent backgroundColor="yellow-dark">
                            <div><CurrencyDollar size={20} color="white" /></div>
                            <div>
                                <p>Pagamento na entrega</p>
                                <p><span>{location.state.methodPayment}</span></p>
                            </div>
                        </InfoContent>
                    </BoxInfoRequest>
                </div>

                <div>
                    <Lottie animationData={Animation} style={{width: '800px', height: '800px'}}/>
                </div>
            </EntregaContainer>
        </>
    );
}