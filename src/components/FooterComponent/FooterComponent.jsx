import "./FooterComponent.css"

const FooterComponent = () => {
  return (
    <div>
        <div className="bgFooter">
            <div className="d-flex justify-content-center">
                <a href="https://www.instagram.com/accounts/login/" target="blank"><img className="iconFooter my-3" src="../icon/instagram.png" alt="InstagramLogo" /></a>
                <a href="https://www.facebook.com/login/" target="blank"><img className="iconFooter my-3" src="../icon/facebook.png" alt="" /></a>
                <a href="https://twitter.com/i/flow/login" target="blank"><img className="iconFooter my-3" src="../icon/twitter.png" alt="" /></a>
            </div>
            <div className="d-flex justify-content-center">
            <p className="textCss">2023 © Trade-inc</p>
            </div>
        </div>
    </div>
  )
}

export default FooterComponent