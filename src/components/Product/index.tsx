import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="https://placehold.co/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi beatae
      incidunt dignissimos reprehenderit modi! Voluptas pariatur aliquam
      voluptatum illum, praesentium aspernatur placeat incidunt commodi
      assumenda nisi, modi magnam? Esse, excepturi.
    </Descricao>
  </Card>
)

export default Product
