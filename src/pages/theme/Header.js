import { Link, useNavigate } from "react-router-dom";
import LMB from "../../assets/brand/LMB.png";

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('isLogin');
    navigate('/login');
    
  };

  return (
    
    <div class="pagehead" id="pagehead">
    <div className="header">
      <div className="one">
        <Link to="/" className="link">
          <ul>
            <li><img src={LMB} id="logo" alt="Logo" /></li>
            <li id="name">LIBRI<br /><span id="mahiti">MAHITI</span></li>
          </ul>
        </Link>
      </div>
      <div className="two">
        <ul>
          <div class="twoset">
            <Link to="/browse" className="link">
            <li className="browselink browse"><span>BROWSE</span></li>
            </Link>
          <li>
            <form action="user?page=userbsearch" method="post">
              <input type="search" name="query" id="search" placeholder="Search..." />
              <button type="" className="search_button"><Link to="/search" className="link"><i class="sear" className="fas fa-search sear"></i></Link></button>
            </form>
          </li>
          </div>
          <div className="toshow">
            <li id="signupsignup" className="headlink" >SIGN UP</li>
            <li className="headlink" id="loginlogin" >LOGIN</li>
            {/* onClick={onl} onClick={ons} */}
          </div>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Header;
