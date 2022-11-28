import FooterBanner from '../components/FooterBanner'
import NavBar from '../components/NavBar'
import CarouselItem from '../components/CarouselItem'
import  Cards  from '../components/Cards'

const Home = () => {
  // const [cartState, setCarState] = useState(9)
  return (
    <div className='page-container'>
        <div className='content-wrap'>
          <NavBar/>
          <div className='row'>
            <CarouselItem />
          </div>
          <Cards />
          <FooterBanner />
        </div>
    </div>
        
  )
}

export default Home