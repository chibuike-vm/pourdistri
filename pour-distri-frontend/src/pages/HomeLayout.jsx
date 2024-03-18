import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styled from "styled-components";

const Wrapper = styled.section`
    /* 
        Website General Layout
        ===========
     */
    display: flex;
    flex-direction: column;
    height: 100%;

    .nav-bar,
    .main,
    .footer {
        flex-basis: auto;
    }

    .main {
        flex-grow: 2;
    }
    /* =========== */

    .main {
        max-width: 1500px;
        align-self: center;
    }

    .loading-animation div {
        height: 100px;
        width: 100px;
        background-color: blue;
        color: white;
        border-radius: 50px;
        text-align: center;
        transition-property: transform 3s;
        margin-bottom: 25rem;
    }

    .start-loading-animation div {
        transform: translate(95px, 91px);
        animation: 3s spin 1s infinite both linear;
    }

    .load-info {
        padding-top: 2.5rem;
    }

    @keyframes spin {
        from {
            transform: rotateX(360);
            opacity: 0.2;
        }

        25% {
            opacity: 0.4;
        }

        50% {
            opacity: 0.6;
        }

        75% {
            opacity: 0.8;
        }

        to {
            transform: translate(95px, 91px) rotate(320deg);
            opacity: 1;
        }
    }
`;

const HomeLayout = () => {
    const { state } = useNavigation();

    return (
        <Wrapper>
            <article className="nav-bar">
                <NavBar />
            </article>
            {state === "loading" ? (
                <article
                    className={`loading-animation ${
                        state === "loading" ? "start-loading-animation" : ""
                    }`}
                >
                    <div>
                        <p className="load-info">wait</p>
                    </div>
                </article>
            ) : (
                <article className="main">
                    <Outlet />
                </article>
            )}
            <article className="footer">
                <Footer />
            </article>
        </Wrapper>
    );
};
export default HomeLayout;
