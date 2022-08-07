import '../style/nav.css';

const Navbar = ()=>{
    return(
<>
<nav>
      <div className="logo">
        <a>GrabOne</a>
      </div>

      <div className="rest">
          <div className ="location">

            <div class="dropdown">
                <a class="locationDrop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-geo-alt"></i>
                auckland
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">auckland</a></li>
                  <li><a class="dropdown-item" href="#">auckland</a></li>
                  <li><a class="dropdown-item" href="#">auckland</a></li>
                </ul>
             <a><i class='fas fa-angle-down'></i></a>
             </div>


          </div>

          <div className ="favourite">
          <a><i class="bi bi-heart"></i></a>

          </div>

          <div className ="cart">
          <a><i class="bi bi-cart"></i></a>
          
          </div>

          <div className ="account">
          <div class="dropdown">
                <a class="" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-person"></i>
                
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">My Account</a></li>
                  <li><a class="dropdown-item" href="#">Gifts</a></li>
                  <li><a class="dropdown-item" href="#">My Subscriptios</a></li>
                  <li><a class="dropdown-item" href="#">My Purchases</a></li>
                  <li><a class="dropdown-item" href="#">Login</a></li>
                </ul>
             <a><i class='fas fa-angle-down'></i></a>
             </div>

          </div>

          <div className ="subscribe">
              <a><i class="bi bi-envelope"></i></a>
              <span>Subscribe</span>
          </div>
      </div>
</nav>
<div className="minNavbar">
      <div className="d-flex d-flex justify-content-around">

        <div className="browseCategories my-3">
          <a className="" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="">Browse Categories</span>
               
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Category 1 </a></li>
                  <li><a className="dropdown-item" href="#">Category 2</a></li>
                  <li><a className="dropdown-item" href="#">Category 3 </a></li>
                  <li><a className="dropdown-item" href="#">Category 4 </a></li>
                  <li><a className="dropdown-item" href="#">Category 5 </a></li>
                </ul>
             <a ><i className='fas fa-angle-down'></i></a>
          </div>

          <div className="whatNew my-auto">
             <span>what's New</span>
          </div>

          <div className="tranding my-auto">
            <span>Tranding</span>
          </div>

          <div className="forYou my-auto">
            <span>For You</span>
          </div>

          <div className="shopProducts my-auto">
            <span>Shop Products</span>
          </div>

        <div className="input-icons d-flex flex-row my-auto">
            <i className="bi bi-search px-2"></i>
            <input className="input-field px-5" type="text" placeholder="Search GrabOne" />
       </div>
      </div>
      
</div>
<div className="responsiveNabr">
      <div className="iconResponsive">
        <i class="bi bi-house"></i>
        <p>Home</p>
      </div>

      <div className="iconResponsive">
        <i class="bi bi-search"></i>
        <p>Search</p>
      </div>
      <div className="iconResponsive">
        <i class="bi bi-grid"></i>
        <p>Categories</p>
      </div>
      <div className="iconResponsive">
        <i class="bi bi-cart"></i>
        <p>Cart</p>
      </div>
      <div className="iconResponsive">
        <i class="bi bi-person">
        <p>Account</p>
      </i></div>
</div>
</>
)}

export default Navbar;