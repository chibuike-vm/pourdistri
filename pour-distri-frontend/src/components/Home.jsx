/* eslint-disable react/prop-types */
import styled from "styled-components";
import heroSvg from "../assets/images/hero.svg";
import wineTastingSvg from "../assets/images/happy-consumer.svg";
import SearchForm from "./SearchForm";

const Wrapper = styled.article`
    width: 100%;
    margin: 0 auto;
    margin-top: 3.56rem;
    padding: 0 0.5rem;

    p {
        font-size: 1rem;
        text-align: left;
        line-height: 1.5rem;
        margin-top: 0.4rem;
    }

    h1 {
        font-size: 1.3rem;
        text-align: center;
        margin-bottom: 0;
    }

    img {
        display: block;
        margin: 0 auto;
        width: 100%;
    }

    article {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 5rem;
    }

    @media only screen and (width > 280px) {
        margin-top: 4.1rem;
    }

    @media only screen and (width >= 768px) {
        h1 {
            font-size: 1.5rem;
        }
    }

    @media only screen and (width >= 912px) {
        margin-top: 4rem;
    }
`;

const Home = () => {
    return (
        <section>
            <article
                style={{
                    marginTop: "2.8rem",
                    backgroundImage:
                        "linear-gradient(to right, #4b5563, #030712)",
                    position: "fixed",
                    top: "0rem",
                    left: "0",
                    right: "0",
                }}
            >
                <SearchForm />
            </article>
            <Wrapper>
                <article>
                    <div>
                        <img src={wineTastingSvg} alt="Wine Tasting Image" />
                    </div>
                    <div>
                        <img src={heroSvg} alt="Hero Image" />
                    </div>
                </article>
                <h1>
                    Welcome to <span className="logo-title">PourDistri</span>
                </h1>
                <p>
                    Discover the perfect blend of convenience and excellence
                    with PourDistri, your premier destination for sourcing and
                    distributing the finest cocktails worldwide. At PourDistri,
                    we&apos;re committed to revolutionizing the way cocktails
                    are distributed, connecting producers and distributors
                    seamlessly to bring the best libations to every corner of
                    the globe. Whether you&apos;re a seasoned distributor
                    looking to expand your offerings or a passionate producer
                    eager to showcase your creations, PourDistri provides the
                    platform and support you need to thrive in the ever-evolving
                    world of mixology. Join us on our journey to elevate the
                    cocktail experience and unlock new opportunities with
                    PourDistri today.
                </p>
            </Wrapper>
        </section>
    );
};
export default Home;
