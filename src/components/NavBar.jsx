import { NavLink } from "react-router-dom";
import { nav as navData } from "../data/nav";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import styled from "styled-components";

const Wrapper = styled.header`
    background-image: linear-gradient(to right, #4b5563, #030712);
    position: fixed;
    right: 0;
    left: 0;
    z-index: 20;
    padding: 0 0.5rem;

    section {
        width: 100%;
        margin: 0 auto;
        max-width: 1200px;
    }

    .header-div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header-div h1 {
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
        color: #fff1f2;
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
        background-image: linear-gradient(to right, #737373, #525252, #262626);
    }

    .nav-bar h2 {
        letter-spacing: 0.1rem;
        color: #fff1f2;
        font-size: 1.15rem;
        padding-left: 2rem;
    }

    .nav-bar h2:hover {
        transform: scale(1.05);
    }

    .nav-bar a {
        text-decoration: none;
    }

    .links-container-div {
        padding: 0 0.5rem;
    }

    .active h2 {
        background-color: #fff1f2;
        box-shadow: 0 0 0.4rem #030712;
        color: #030712;
        border-radius: 0 0.4rem 0;
        padding: 0.15rem 0.5rem;
    }

    .toggle-nav-bar {
        display: none;
    }

    .close-button-div {
        align-self: flex-end;
        padding: 1rem;
        color: white;
    }

    button {
        background-color: transparent;
        border: 0;
        font-size: 1.2rem;
        padding: 0;
    }

    .hamburger-button {
        color: white;
        font-size: 1.7rem;
    }

    .close-button {
        font-size: 1.7rem;
        color: white;
    }

    @media only screen and (width > 280px) {
        .header-div h1 {
            font-size: 1.25rem;
            margin: 0;
            padding: 0.75rem 0;
        }
    }

    @media only screen and (width >= 850px) {
        section {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }

        .header-div {
            width: 20%;
        }

        .header-div h1 {
            width: 100%;
            padding: 0.5rem 0;
        }

        .nav-bar {
            position: static;
            display: flex;
            flex-direction: row;
            width: 80%;
            justify-content: flex-end;
            gap: 1rem;
            background-image: none;
        }

        .links-container-div h2 {
            text-align: center;
        }

        .hide-menu-button,
        .close-button-div {
            display: none;
        }

        .links-container-div .active > h2 {
            border-radius: 0 0.4rem 0;
        }
    }
`;

const NavBar = () => {
    const [isNavbarClose, setIsNavbarClose] = useState(true);

    return (
        <Wrapper>
            <section>
                <div className="header-div">
                    <h1>PourDistri</h1>
                    <button
                        type="button"
                        onClick={() => setIsNavbarClose(!isNavbarClose)}
                        className="hide-menu-button"
                    >
                        <IoMdMenu className="hamburger-button" />
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
                            <IoMdClose className="close-button" />
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
