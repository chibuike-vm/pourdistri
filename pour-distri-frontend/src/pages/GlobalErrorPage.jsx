import { Link, useRouteError } from "react-router-dom";
import status404Img from "../assets/images/page_not_found.svg";
import styled from "styled-components";

const Wrapper = styled.section`
    width: 90%;
    margin: 6rem auto;
    text-align: center;

    div {
        width: 100%;
    }

    img {
        display: block;
        width: 100%;
    }

    p {
        font-size: 1.3rem;
    }

    .back-home-link {
        text-decoration: none;
        text-transform: capitalize;
        font-size: 1.2rem;
        letter-spacing: 0.05rem;
        font-weight: 700;
        color: #93c5fd;
    }

    h2 {
        font-size: 1.2rem;
        text-align: center;
    }

    span {
        color: #ffe4e6;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
    }

    @media only screen and (width >= 912px) {
        margin-top: 10rem;
    }
`;

const GlobalErrorPage = () => {
    const error = useRouteError();
    return (
        <Wrapper>
            {error.status === 404 ? (
                <div>
                    <img
                        src={status404Img}
                        alt="Page Not Found Image"
                        height={200}
                        width={300}
                    />
                    <p>
                        Resource not found! Kindly go back to the{" "}
                        <Link to="/" className="back-home-link">
                            home page
                        </Link>
                    </p>
                </div>
            ) : (
                <div>
                    <h2>
                        <span>error: </span>
                        {error.message}
                    </h2>
                    <p>
                        Please, kindly go back to the{" "}
                        <Link to="/" className="back-home-link">
                            home page
                        </Link>
                    </p>
                </div>
            )}
        </Wrapper>
    );
};
export default GlobalErrorPage;
