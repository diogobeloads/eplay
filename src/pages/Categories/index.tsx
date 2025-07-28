import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import star_wars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: '',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description: '',
    title: 'Zelda',
    system: 'Nintendo Switch',
    infos: ['5%', 'R$ 150,00'],
    image: zelda
  },
  {
    id: 3,
    category: 'Ação',
    description: '',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['10%', 'R$ 199,00'],
    image: star_wars
  },
  {
    id: 4,
    category: 'RPG',
    description: '',
    title: 'Diablo 4',
    system: 'Xbox Series',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação e exploração de masmorras, exclusivo para jogadores online, de 2023, desenvolvido e publicado pela Blizzard Entertainment. É o quarto título principal da série Diablo.',
    infos: ['17/08'],
    system: 'XBOX',
    title: 'Diablo 4',
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação e exploração de masmorras, exclusivo para jogadores online, de 2023, desenvolvido e publicado pela Blizzard Entertainment. É o quarto título principal da série Diablo.',
    infos: ['17/08'],
    system: 'XBOX',
    title: 'Zelda',
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação e exploração de masmorras, exclusivo para jogadores online, de 2023, desenvolvido e publicado pela Blizzard Entertainment. É o quarto título principal da série Diablo.',
    infos: ['17/08'],
    system: 'XBOX',
    title: 'Resident',
    image: resident
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação e exploração de masmorras, exclusivo para jogadores online, de 2023, desenvolvido e publicado pela Blizzard Entertainment. É o quarto título principal da série Diablo.',
    infos: ['17/08'],
    system: 'XBOX',
    title: 'Star Wars',
    image: star_wars
  }
]
const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
