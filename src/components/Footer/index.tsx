import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Ação"
              to="/categories#action"
            >
              AÇÃO
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de luta"
              to="/categories#fight"
            >
              LUTA
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Esporte"
              to="/categories#sports"
            >
              ESPORTES
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Simulação"
              to="/categories#simulation"
            >
              SIMULAÇÃO
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link title="Clique aqui para acessar as promoções" to="/#on-sale">
              Promoções
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar os futuros lançamentos"
              to="/#coming-soon"
            >
              Em Breve
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-Play Todos os direitos reservados.</p>
    </div>
  </Container>
)

export default Footer
