import {
    FaGithubSquare,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 3rem;
    box-shadow: 0 -0.1rem 0.3rem rgb(0, 0, 0, 0.5);

    .footer-sub-container {
        max-width: 1500px;
    }

    .social-links-container {
        display: flex;
        flex-direction: row;
        font-size: 1.8rem;
        gap: 2rem;
    }

    h3 {
        font-size: 1.2rem;
        text-align: center;
    }

    a {
        text-decoration: none;
        color: white;
    }

    a:hover {
        text-decoration: none;
        color: #7fdf3b;
    }
`;

const Footer = () => {
    return (
        <Wrapper>
            <div className="footer-sub-container">
                <div className="social-links-container">
                    <a
                        href="https://github.com/chibuike-vm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithubSquare />
                    </a>
                    <a
                        href="https://www.facebook.com/chibuike.mba.94?mibextid=9R9pXO"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="http://www.linkedin.com/in/chibuike-mba-427323177"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://x.com/dev_chibuike?t=AlB4tSKyhag1nA5i3Ilqhg&s=09"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaTwitter />
                    </a>
                </div>
                <div>
                    <h3>&copy; 2024, All rights reserved.</h3>
                </div>
            </div>
        </Wrapper>
    );
};
export default Footer;
