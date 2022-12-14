import {RiTwitterLine, RiGithubLine, RiInstagramLine} from 'react-icons/ri'

const FooterBanner = () => {
  const StylesIcons = {
    width: "20px",
    height: "20px",
    color: "#0d3b66"
  }
  return (
    <>
        <div className='footer'>
          <div className='row' style={{height: "100%"}}>
                <div className='col-6 d-flex justify-content-center align-items-center' style={{height: "100%"}}>
                  <div className='d-flex justify-content-between align-items-center' style={{width: "60px", height: "60px"}}>
                    <a href='https://twitter.com/MSTechFan' target="_blank" style={{marginLeft: "5px"}} rel="noreferrer"><RiTwitterLine style={StylesIcons}/></a>
                    <a href='https://www.instagram.com/mstechfan/' target="_blank" style={{marginLeft: "5px"}} rel="noreferrer"><RiInstagramLine style={StylesIcons}/></a>
                    <a href='https://github.com/MSTechFan' target="_blank" style={{marginLeft: "5px"}} rel="noreferrer"><RiGithubLine style={StylesIcons}/></a>
                  </div>
                </div>
                <div className='col-6 d-flex justify-content-center align-items-center'>
                  <ul className='d-flex flex-row flex-wrap' style={{listStyle: "none"}}>
                    <a><li>About Us</li></a>
                    <a><li>Work with Us</li></a>
                    <a><li>Terms and Conditions</li></a>
                  </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default FooterBanner