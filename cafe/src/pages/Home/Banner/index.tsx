import { BannerContainer, DivFlex, DivInfo, ImgBanner, BoxInfo, BoxCircle } from "./style";
import ImageBanner from '../../../assets/ImageBanner.png';
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export function Banner() {
    return (
        <BannerContainer>
            <DivFlex>
                <DivInfo>
                    <h2>Encontre o café perfeito para qualquer hora do dia</h2>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                    <BoxInfo>
                        <div>
                            <div>
                                <BoxCircle color="yellow-dark" >
                                    <ShoppingCart size={20} color="white" />
                                </BoxCircle>
                                Compra simples e segura
                            </div>
                            <div>
                                <BoxCircle color="yellow" >
                                    <Timer size={20} color="white" />
                                </BoxCircle>
                                Entrega rápida e rastreada
                            </div>
                        </div>

                        <div>
                            <div>
                                <BoxCircle color="base-text" >
                                    <Package size={20} color="white" />
                                </BoxCircle>
                                Embalagem mantém o café intacto
                            </div>
                            
                            <div>
                                <BoxCircle color="purple" >
                                    <Coffee size={20} color="white" />
                                </BoxCircle>
                                O café chega fresquinho até você
                            </div>
                        </div>
                    </BoxInfo>
                </DivInfo>

                <ImgBanner src={ImageBanner}/>
            </DivFlex>
        </BannerContainer>
    );
}