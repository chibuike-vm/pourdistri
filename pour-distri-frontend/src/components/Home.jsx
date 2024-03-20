/* eslint-disable react/prop-types */
import styled from "styled-components";
import heroSvg from "../assets/images/hero.svg";
import wineTastingSvg from "../assets/images/happy-consumer.svg";

const Wrapper = styled.article`
    text-align: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 3.56rem;

    p {
        font-size: 1.1rem;
        text-align: left;
        letter-spacing: 0.1rem;
        line-height: 1.5rem;
        padding: 0.5rem;
    }

    h1 {
        font-size: 1.6rem;
        line-height: 1.3;
        background-image: linear-gradient(to left, #111827, #881337, #6b7280);
        padding: 1rem;
        border-radius: 0 1rem 1.5rem;
        box-shadow: 0 0 2rem #d1d5db;
        color: #fff1f2;
    }

    .logo-title {
        letter-spacing: 0.15rem;
        display: block;
    }

    img {
        display: block;
        margin: 0 auto;
        height: 15rem;
        width: 90%;
    }

    @media only screen and (width > 280px) {
        margin-top: 4.1rem;

        h1 {
            font-size: 2rem;
        }
    }

    @media only screen and (width >= 768px) {
        h1 {
            font-size: 2.5rem;
        }

        .logo-title {
            display: inline;
        }

        img {
            height: 17rem;
        }
    }

    @media only screen and (width >= 912px) {
        margin-top: 6.1rem;
    }
`;

const Home = () => {
    return (
        <Wrapper>
            <h1>
                Welcome to <span className="logo-title">PourDistri</span>
            </h1>
            <img src={heroSvg} alt="Hero Image" />
            <p>
                Discover the perfect blend of convenience and excellence with
                PourDistri, your premier destination for sourcing and
                distributing the finest cocktails worldwide. At PourDistri,
                we&apos;re committed to revolutionizing the way cocktails are
                distributed, connecting producers and distributors seamlessly to
                bring the best libations to every corner of the globe. Whether
                you&apos;re a seasoned distributor looking to expand your
                offerings or a passionate producer eager to showcase your
                creations, PourDistri provides the platform and support you need
                to thrive in the ever-evolving world of mixology. Join us on our
                journey to elevate the cocktail experience and unlock new
                opportunities with PourDistri today.
            </p>
            <img src={wineTastingSvg} alt="Wine Tasting Image" />
        </Wrapper>
    );
};
export default Home;
