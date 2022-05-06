import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Card = styled.div`
    width: 550px;
    height: 900px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    border-width: 2px;
    border-style: solid;
    border-radius: 20px;
`

export const CardTopo = styled.div`
    width: 550px;
    height: 450px;
    background-color: red;
    border-radius: 20px;
    justify-content: space-around;
    align-items: center;
    display: flex;
    flex-direction: row;
`

export const Img = styled.img`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 120px;
`

export const Main = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #DADFE8;
`

export const Cartao = styled.div`
    display: block;
    background-color: #FCC719;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
`

export const CartaoAgua = styled.div`
    display: block;
    background-color: #76BEFE;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
`

export const CartaoTrevas = styled.div`
    display: block;
    background-color: #BA68C8;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
`

export const CartaoDragao = styled.div`
    display: block;
    background-color: #f1a541;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
`
export const CartaoFogo = styled.div`
    display: block;
    background-color: #f54f4f;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
`
export const CartaoGrama = styled.div`
    display: block;
    background-color: #49D0B0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
`


export const CartaoTopo = styled.div`
    padding: 30px 40px 0;
`

export const Detalhes = styled.div`
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Nome = styled.div`
    margin-bottom: 3px ;
`

export const Tipo = styled.div`
    font-size: 12px;
    background-color:#FFFFFF;
    opacity: 0.7;
    border-radius: 10px;
    padding: 2px 2px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 60px;
    height: 15px;
    align-items: center;
    justify-content: center;
    display: flex;
`

export const Imagem = styled.img`
    width: 350px;
    height: 350px;
`

export const Infromacoes = styled.div`
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    padding: 80px 30px 50px;
    margin-top: -70px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`
export const InfromacoesH3 = styled.div`
    font-size: 20px;
    margin-bottom: 15px;
    border-bottom: 1px solid #6B727A;
`

export const InformacoesUlLi = styled.div`
    border-bottom: 1px solid #C3C4C5;
    padding: 0 0 5px;
    margin-bottom: 5px;
    font-size: 15px;
`


export const Status = styled.div`
    padding: 0 10px;
    width: 180px;
    padding: 0 0 5px;
    margin-bottom: 5px;
    font-size: 15px;
`

export const Habilidades = styled.div`
    padding: 0 10px;
    width: 180px;
`

export const HabilidadesUl = styled.div`
    border-bottom: 1px solid #C3C4C5;
    padding: 0 0 5px;
    margin-bottom: 5px;
    font-size: 15px;
`

export const Body = styled.div`
    font-family: 'Poppins', sans-serif;

`

export const PokeDex = styled.div`
    display: flex;
    gap: 30px;
    padding: 30px 0;
`

export const Listagem = styled.div`
    max-width: 200px;
`

export const ListPokemon = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    background-color: #6B727A;
    color: #FFFFFF;
    padding: 0 5px;
    cursor: pointer;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    min-height: 70px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.15s ease-in-out;
    text-decoration: none;

    &.active {
        background-color: red;
    }
`

export const ImagemNav = styled.img`
    width: 25%;
    border-radius: 50%;
`