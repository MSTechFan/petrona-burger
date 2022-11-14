import FooterBanner from '../components/FooterBanner'
import NavBar from '../components/NavBar'
import CarouselItem from '../components/CarouselItem'
import { Cards } from '../components/Cards'

const Home = (props) => {
  // const [cartState, setCarState] = useState(9)
  return (
    <div className='page-container'>
        <div className='content-wrap'>
          <NavBar/>
          <div className='row'>
            <CarouselItem />
          </div>
          <div className='d-flex flex-row flex-wrap justify-content-evenly' style={{margin: "20px 0"}}>
            {Cards}
          </div>
          <FooterBanner />
        </div>
    </div>
        
  )
}

export default Home