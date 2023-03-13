import background from "./../Images/lines.png"

function Footer() {
    return (
        <div>
            <div className="footer">
                <div backgroundFooter>
                    <img className="backgroundImg" src={background} alt="background footer"/>
                </div>
                <div className="contentFooter">
                <div></div>
                <p>All Right Reserved Copyright For <span>Mvn</span></p>
                </div>
            </div>
        </div>  
    )
}

export default Footer;