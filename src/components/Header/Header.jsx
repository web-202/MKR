import './Header.scss';
import {useNavigate} from "react-router-dom";

function Header({currentPage}) {
    const navigate = useNavigate();

    const navigateTo = (to) => navigate(to);

    return (
        <>
            <div className="header">
                <ul className="header-navigation">
                    <li className="header-navigation__item">
                                     <span
                                         className={currentPage === "main" ? "header-navigation__link  header-navigation__link_active" : "header-navigation__link "}
                                         onClick={() => navigateTo("/")}>
                                          Головна
                                     </span>
                    </li>

                    <li className="header-navigation__item">
                                    <span
                                        className={currentPage === "about" ? "header-navigation__link  header-navigation__link_active" : "header-navigation__link "}
                                        onClick={() => navigateTo("/about")}>
                                        Про продукт
                                    </span>
                    </li>
                </ul>


            </div>
        </>
    );
}

export default Header;