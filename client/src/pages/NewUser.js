import NewUserForm  from '../components/NewUserForm'
import FooterBanner from '../components/FooterBanner'


const NewUser = () => {
  return (
    <div className='container-fluid page-container' >
        <div className='row mainSection content-wrap'>
          <div className='login' style={{marginTop: "50px", marginBottom: "50px"}}>
            <NewUserForm  />
          </div>
        </div>
          <FooterBanner />
    </div>
  )
}

export default NewUser