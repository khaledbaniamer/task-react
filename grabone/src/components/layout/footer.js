import '../style/footer.css';


const Footer = ()=>{
    return(
        <>
        <hr/>
        <div className="letterResponsive">
                <h6>Newsletter Signup</h6>
                <p>Sign up for our daily emails and we'll send you all the best <br/> deals, tailored for you.</p>
                <input name="register_email" type="email" value="" placeholder="Enter email address" class="email-subscription__input"></input>
                <a className="subscribebtn" href="#" >Subscribe</a>
            </div>
        <footer>
            
            <div className="social">
                <div>
                    <h6>Follow us on</h6>
                </div>

                <div className="socialIcon">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>

                <div className="exclusive">
                    <h6>Get app exclusive deals</h6>
                </div>

                <div className="exclusivebtn" >
                    <i class="bi bi-phone"></i> 
                    <span>Get app exclusive deals</span>
                </div>
            </div>

            <div className="grabOne">
                <h6>GrabOne</h6>
                <p>Contact Us</p>
                <p>About Us</p>
                <p>Trems & Returns</p>
                <p>Blog</p>
                <p>Gift Card</p>
            </div>

            <div className="accout">
                <h6>My Account</h6>
                <p>My Account</p>
                <p>My Cart</p>
                <p>My Coupons</p>
                <p>FAQ</p>

            </div>

            <div className="merchants">
                <h6>Merchants</h6>
                <p>Run a Deal</p>
                <p>Merchant Centre</p>
            </div>

            <div className="letter">
                <h6>Newsletter Signup</h6>
                <p>Sign up for our daily emails and we'll send you all the best <br/> deals, tailored for you.</p>
                <input name="register_email" type="email" value="" placeholder="Enter email address" class="email-subscription__input"></input>
                <a className="subscribebtn" href="#" >Subscribe</a>
            </div>


        </footer>
        <hr/>
        <div className="copyright">
                <h6> <span>Privacy Policy</span> © 2022 GrabOne Limited</h6>

        </div>
        </>
    )
}

export default Footer;