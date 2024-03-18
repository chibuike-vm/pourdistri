import { NavLink } from "react-router-dom";
import { nav as navData } from "../assets/data/nav";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import styled from "styled-components";

const Wrapper = styled.header`
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 0.1rem 0.3rem;

    section {
        width: 90%;
        margin: 0 auto;
        color: white;
        max-width: 1500px;
    }

    .header-div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header-div h1 {
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
    }

    section > div > button {
        font-size: 1.1rem;
    }

    .nav-bar {
        position: fixed;
        z-index: 10;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        background-color: #b93c3c;
    }

    .nav-bar h2 {
        letter-spacing: 0.1rem;
        color: white;
        text-transform: capitalize;
        font-size: 1.6rem;
        padding-left: 2rem;
    }

    .nav-bar h2:hover {
        color: #a1be76;
        transform: scale(1.05);
        box-shadow: 0 0 0.4rem black;
        border-radius: 0.4rem;
    }

    .nav-bar a {
        text-decoration: none;
    }

    .links-container-div {
        padding: 0 0.4rem;
    }

    .active h2 {
        background-color: rgb(255, 255, 255);
        box-shadow: 0 0 0.4rem black;
        color: black;
        border-radius: 0.4rem;
        padding: 0 0.4rem;
    }

    .toggle-nav-bar {
        display: none;
    }

    .close-button-div {
        align-self: flex-end;
        padding: 1rem;
    }

    @media only screen and (width >= 375px) {
        .header-div h1 {
            font-size: 1.5rem;
            letter-spacing: 0.2rem;
        }

        section > div > button {
            font-size: 1.3rem;
        }
    }

    @media only screen and (width >= 850px) {
        section {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 1rem;
        }

        .header-div {
            width: 30%;
        }

        .header-div h1 {
            width: 100%;
            letter-spacing: 0.2rem;
        }

        .nav-bar {
            position: static;
            display: flex;
            flex-direction: row;
            width: 70%;
            justify-content: flex-end;
            gap: 1rem;
            background-color: transparent;
        }

        .links-container-div h2 {
            text-align: center;
            font-size: 1.3rem;
        }

        .hide-menu-button,
        .close-button-div {
            display: none;
        }
    }
`;

const NavBar = () => {
    const [isNavbarClose, setIsNavbarClose] = useState(true);

    return (
        <Wrapper>
            <section>
                <div className="header-div">
                    <h1>CocktailConduit</h1>
                    <button
                        type="button"
                        onClick={() => setIsNavbarClose(!isNavbarClose)}
                        className="hide-menu-button"
                    >
                        <IoMdMenu />
                    </button>
                </div>
                <nav
                    className={`nav-bar ${
                        isNavbarClose ? "toggle-nav-bar" : ""
                    }`}
                >
                    <div className="close-button-div">
                        <button
                            type="button"
                            onClick={() => setIsNavbarClose(!isNavbarClose)}
                        >
                            <IoMdClose />
                        </button>
                    </div>
                    {navData.map((eachNavData) => {
                        const { title, path } = eachNavData;
                        return (
                            <div key={title} className="links-container-div">
                                <NavLink to={path}>
                                    <h2
                                        onClick={() =>
                                            setIsNavbarClose(!isNavbarClose)
                                        }
                                    >
                                        {title}
                                    </h2>
                                </NavLink>
                            </div>
                        );
                    })}
                </nav>
            </section>
        </Wrapper>
    );
};
export default NavBar;
