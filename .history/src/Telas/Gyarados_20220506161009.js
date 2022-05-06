import { Cartao, CartaoTopo, Detalhes, InfromacoesH3, InformacoesUlLi, Habilidades, HabilidadesUl, Imagem, Infromacoes, Nome, Status, Tipo } from "../Styles";
import GyaradosImage from '../Images/gyarados.png'

export default function Gyarados() {
    return (
        <>
            <Cartao>
              <CartaoTopo>
                <Detalhes>
                  <Nome><h2>Gyarados</h2></Nome>
                  <span>#002</span>
                </Detalhes>

                <Tipo><span>Água</span></Tipo>
                <Imagem src={GyaradosImage}></Imagem>
              </CartaoTopo>

              <Infromacoes>
                <Status>
                <InfromacoesH3>Status</InfromacoesH3>
                      <InformacoesUlLi>HP: 400</InformacoesUlLi>
                      <InformacoesUlLi>Ataque: 800</InformacoesUlLi>
                      <InformacoesUlLi>Defesa: 600</InformacoesUlLi>
                      <InformacoesUlLi>Velocidade: 150</InformacoesUlLi>
                      <InformacoesUlLi>Total: 1950</InformacoesUlLi>
                </Status>

                <Habilidades>
                <InfromacoesH3>Habilidades</InfromacoesH3>
                      <HabilidadesUl>Carga de fogo</HabilidadesUl>
                      <HabilidadesUl>Estouro de chama</HabilidadesUl>
                </Habilidades>
              </Infromacoes>
            </Cartao>
        </>
    )
}