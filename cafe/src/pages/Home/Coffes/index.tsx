import { CoffeContainr } from "./style";
import Tradicional from '../../../assets/Tradicional.png';
import Americano from '../../../assets/Americano.png';
import Cremoso from '../../../assets/Cremoso.png';
import Gelado from '../../../assets/Gelado.png';
import ComLeite from '../../../assets/ComLeite.png';
import Latte from '../../../assets/Latte.png';
import Capuccino from '../../../assets/Capuccino.png';
import Macchiato from '../../../assets/Macchiato.png';
import Mocaccino from '../../../assets/Mocaccino.png';
import ChocoQuente from '../../../assets/ChocoQuente.png';
import Cubano from '../../../assets/Cubano.png';
import Havaiano from '../../../assets/Havaiano.png';
import Arabe from '../../../assets/Arabe.png';
import { CardCoffe } from "./CoffeeCard";

interface Tag {
    id: number;
    name: string;
}

export interface CoffeeType {
    img: string
    name: string
    description: string
    value: number
    tag: Tag[]
}           

export function Coffe() {

    const coffes: CoffeeType[] = [
        {
            img: Tradicional,
            name: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            value: 9.9,
            tag: [{ id: 1, name: 'TRADICIONAL' }],
            },
        {
            img: Americano,
            name: 'Expresso Americano',
            description: 'Expresso diluído, menos intenso que o tradicional',
            value: 10.9,
            tag: [{ id: 2, name: 'TRADICIONAL' }],
        },
        {
            img: Cremoso,
            name: 'Expresso Cremoso',
            description: 'Café expresso tradicional com espuma cremosa',
            value: 10.0,
            tag: [{ id: 3, name: 'TRADICIONAL' }],
        },
        {
            img: Gelado,
            name: 'Expresso Gelado',
            description: 'Bebida preparada com café expresso e cubos de gelo',
            value: 12.9,
            tag: [
                { id: 4, name: 'TRADICIONAL' },
                { id: 5, name: 'GELADO' },
            ],
        },
        {
            img: ComLeite,
            name: 'Café com Leite',
            description: 'Meio a meio de expresso tradicional com leite vaporizado',
            value: 9.9,
            tag: [
                { id: 6, name: 'TRADICIONAL' },
                { id: 7, name: 'COM LEITE' },
            ],
        },
        {
            img: Latte,
            name: 'Latte',
            description:
                'Uma dose de café expresso com o dobro de leite e espuma cremosa',
            value: 10.9,
            tag: [
                { id: 8, name: 'TRADICIONAL' },
                { id: 9, name: 'COM LEITE' },
            ],
        },
        {
            img: Capuccino,
            name: 'Capuccino',
            description:
                'Bebida com canela feita de doses iguais de café, leite e espuma',
            value: 11.9,
            tag: [
                { id: 10, name: 'TRADICIONAL' },
                { id: 11, name: 'COM LEITE' },
            ],
        },
        {
            img: Macchiato,
            name: 'Macchiato',
            description:
            'Café expresso misturado com um pouco de leite quente e espuma',
            value: 12.9,
            tag: [
            { id: 12, name: 'TRADICIONAL' },
            { id: 13, name: 'COM LEITE' },
            ],
        },
        {
            img: Mocaccino,
            name: 'Mocaccino',
            description: 'Café expresso com calda de chocolate, pouco leite e espuma',
            value: 13.9,
            tag: [
              { id: 14, name: 'TRADICIONAL' },
              { id: 15, name: 'COM LEITE' },
            ],
        },
        
        
        {
            img: ChocoQuente,
            name: 'Chocolate Quente',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            value: 15.9,
            tag: [
              { id: 18, name: 'ESPECIAL' },
              { id: 19, name: 'COM LEITE' },
            ],
          },
        {
            img: Cubano,
            name: 'Cubano',
            description:
              'Drink gelado de café expresso com rum, creme de leite e hortelã',
            value: 16.9,
            tag: [
              { id: 20, name: 'ESPECIAL' },
              { id: 21, name: 'ALCOÓLICO' },
              { id: 22, name: 'GELADO' },
            ],
        },
        {
            img: Havaiano,
            name: 'Havaiano',
            description: 'Bebida adocicada preparada com café e leite de coco',
            value: 16.9,
            tag: [{ id: 23, name: 'ESPECIAL' }],
        },
        {
            img: Arabe,
            name: 'Árabe',
            description: 'Bebida preparada com grãos de café árabe e especiarias',
            value: 16.9,
            tag: [{ id: 24, name: 'ESPECIAL' }],
        },
        /* {
            img: irlandes,
            name: 'Irlandês',
            description: 'Bebida preparada com grãos de café árabe e especiarias',
            value: 16.9,
            tag: [
              { id: 25, name: 'ESPECIAL' },
              { id: 26, name: 'ALCOÓLICO' },
            ],
        }, */
    ]; 

    return (
        <>
            <CoffeContainr>
                <h2>Nossos cafés</h2>
                <div>
                    {coffes.map(element => (
                        <CardCoffe 
                        key={element.name}
                        img={element.img} 
                        name={element.name} 
                        description={element.description} 
                        value={element.value} 
                        tag={element.tag} />
                    ))}
                </div>
            </CoffeContainr>
        </>
    );
}