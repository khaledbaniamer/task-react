import '../style/sidebar.css'

const Sidebar = ()=>{
    return(
        <>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-lg-3 col-xs-12" id="sidebar">
                        
                            <h3 style={{color:"#01b2ee"}}>Discover</h3>
                            <hr/>
                            <p><a className="anchorSide" href="#"style={{color:"black"}}>Featured Auckland deals</a><span className="float-end text-secondary">125</span></p>
                            <p><a className="anchorSide" href="#" style={{color:"black"}}>Collections</a><span className="float-end text-secondary">37</span></p>
                            <p><a className="anchorSide" href="#" style={{color:"black"}}>Activities, Events & Outdoors</a><span className="float-end text-secondary">57</span></p>
                            <p><a className="anchorSide" href="#" style={{color:"black"}}>Picked for You</a><span className="float-end text-secondary">41</span></p>
                            <p><a className="anchorSide" href="#" style={{color:"black"}}>Store</a><span className="float-end text-secondary">125</span></p>
                            <p><a className="anchorSide" href="#" style={{color:"black"}}>Restaurants, Bars, Cafes</a><span className="float-end text-secondary">83</span></p>
                            <p><a className="anchorSide" href="#" style={{color:"black"}}>Beauty, Massage & Spa</a><span className="float-end text-secondary">94</span></p>
                            <p><a className="anchorSide" href="#" style={{color:"black"}}>House & Garden</a><span className="float-end text-secondary">125</span></p>
                            <p><a className="anchorSide" href="#" style={{color:"black"}}>Fitness & Sports</a><span className="float-end text-secondary">66</span></p>
                            <p><a className="anchorSide" href="#" style={{color:"black"}}>Automotive</a><span className="float-end text-secondary">23</span></p>

                    </div>

                    <di className="col-lg-9 col-sm-12 row" >
                    <div class="col-lg-6 col-sm-6  mb-4">
                        <div class="card">
                        <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top"/>
                        <div className="overlay">
                            <div className="texthover">Luxury Five-Star Auckland Stay for Two at Cordis Auckland incl. Buffet Breakfast, $50 Food & Beverage Credit, Drinks, Pool & Spa Access, Daily Parking & Late Checkout - Options to Stay in the Pinnacle Tower</div>
                        </div>
  
                        <div class="card-body">
                            <h5 class="card-title">Entry for 2 people to Sculptureum</h5>
                            <p class="card-text" style={{color:"#01b2ee"}}>Sculptureum</p>
                            <p class="card-text">Matakana</p>

                            <div>
                                <small>434 bought</small>
                                <span className="float-end"><del className="mx-3">$90</del><span style={{color:"#01b2ee",fontSize:"1.9rem"}}>$35</span></span>
                            </div>

                        </div>
                        </div>
                        </div>
                    <div class="col-lg-6 mb-4 col-sm-6">
                        <div class="card">
                        <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top"/>
                        <div className="overlay">
                            <div className="texthover">Luxury Five-Star Auckland Stay for Two at Cordis Auckland incl. Buffet Breakfast, $50 Food & Beverage Credit, Drinks, Pool & Spa Access, Daily Parking & Late Checkout - Options to Stay in the Pinnacle Tower</div>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title">Entry for 2 people to Sculptureum</h5>
                            <p class="card-text" style={{color:"#01b2ee"}}>Sculptureum</p>
                            <p class="card-text">Matakana</p>

                            <div>
                                <small>434 bought</small>
                                <span className="float-end"><del className="mx-3">$90</del><span style={{color:"#01b2ee",fontSize:"1.9rem"}}>$49</span></span>
                            </div>

                        </div>
                        </div>
                        </div>
                    </di>
                </div>
            </div>

            <div className="m-4 p-4 text-center sendEmail">
                <span style={{color:"#01b2ee"}}>Get the best deals delivered direct to your inbox each day</span>
                <input type="text" Placeholder="Enter Email Address"/>
                <input type="submit" Placeholder="Enter Email Address" value="Subscribe"/>

            </div>
        </>
    )
}

export default Sidebar;