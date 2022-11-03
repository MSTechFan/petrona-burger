import FooterBanner from '../components/FooterBanner'
import NavBar from '../components/NavBar'
import Main from '../layouts/Main'

const Home = (props) => {
  // const [cartState, setCarState] = useState(9)
  return (
    <div className='page-container'>
        <div className='content-wrap'>
          <NavBar/>
          <Main />
          <FooterBanner />
        </div>
    </div>
        
  )
}

export default Home