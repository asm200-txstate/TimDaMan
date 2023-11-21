import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box style={{width: "inherit" }}>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>Information</Heading>
            <FooterLink href="/about">
              About Us
            </FooterLink>
            <FooterLink href="#">
              
            </FooterLink>
            <FooterLink href="#">
              
            </FooterLink>
          </Column>
          <Column>
            <Heading>Games</Heading>
            <FooterLink href="/game">
              Trivia
            </FooterLink>
            <FooterLink href="#">
              
            </FooterLink>
            <FooterLink href="#">
              
            </FooterLink>
            <FooterLink href="#">
              
            </FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Mark Tschirhart
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/timothymaraj/">
              Timothy Maraj
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/david-mojica-9b6090188/">
              David Mojica
            </FooterLink>

            <FooterLink href="https://www.linkedin.com/in/calvinalbin/">
              Calvin Albin
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/axel-sanchez-moreno/">
              Axel Sanchez Moreno
            </FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                                <span
                                  style={{
                                    marginLeft: "10px",
                                  }}
                                >
                                    Facebook
                                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/txstengineering/?hl=en">
              <i className="fab fa-instagram">
                                <span
                                  style={{
                                    marginLeft: "10px",
                                  }}
                                >
                                    Instagram
                                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://twitter.com/txstCS">
              <i className="fab fa-twitter">
                                <span
                                  style={{
                                    marginLeft: "10px",
                                  }}
                                >
                                    Twitter
                                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <i className="fab fa-youtube">
                                <span
                                  style={{
                                    marginLeft: "10px",
                                  }}
                                >
                                    Youtube
                                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};
export default Footer;