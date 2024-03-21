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
    background-image: linear-gradient(#030712, #6b7280);
    color: #f9fafb;
    box-shadow: 0 -0.1rem 0.3rem rgb(0, 0, 0, 0.5);

    .footer-sub-container {
        max-width: 1500px;
        padding: 1rem;
        padding-top: 2rem;
    }

    .social-links-container {
        display: flex;
        flex-direction: row;
        font-size: 1.4rem;
        gap: 2rem;
        justify-content: center;
    }

    h3 {
        font-size: 1.05rem;
        text-align: center;
    }

    a {
        text-decoration: none;
        color: #f9fafb;
    }

    a:hover {
        text-decoration: none;
        color: #f43f5e;
    }

    span {
        letter-spacing: 0.15rem;
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
                    <h3>
                        &copy; 2024 <span>Pour</span>
                        <span>Distri,</span> All Rights Reserved.
                    </h3>
                </div>
            </div>
        </Wrapper>
    );
};
export default Footer;
