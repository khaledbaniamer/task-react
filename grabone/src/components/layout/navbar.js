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