import { Link } from "react-router-dom"; // Link를 사용해 페이지 이동
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFire, faHeart, faSearch, faUser, faTicket } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      {/* 로고 */}
      <div className="header__logo">
        <Link to="/">
          <FontAwesomeIcon icon={faTicket} className="header__ticketIcon" />
        </Link>
      </div>

      {/* 네비게이션 */}
      <ul className="header__navigation">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="header__icon" /> 홈
          </Link>
        </li>
        <li>
          <Link to="/popular">
            <FontAwesomeIcon icon={faFire} className="header__icon" /> NEW 요즘 대세 콘텐츠
          </Link>
        </li>
        <li>
          <Link to="/wishlist">
            <FontAwesomeIcon icon={faHeart} className="header__icon" /> 내가 찜한 컨텐츠
          </Link>
        </li>
        <li>
          <Link to="/search">
            <FontAwesomeIcon icon={faSearch} className="header__icon" /> 찾아보기
          </Link>
        </li>
      </ul>

      {/* 프로필 아이콘 */}
      <div className="header__userProfile">
        <FontAwesomeIcon icon={faUser} className="header__profileIcon" />
      </div>
    </div>
  );
}

export default Header;
