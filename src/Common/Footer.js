import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <FooterRoot>
        <Div>
          <Section>
            <InnerSection>
              <Text>당근 앱 다운로드</Text>
              <ButtonBar></ButtonBar>
            </InnerSection>
          </Section>
        </Div>
      </FooterRoot>
    </div>
  );
};

export default Footer;

const FooterRoot = styled.footer`
  display: block;
  background-color: white;
  color: #212124;
  border-top: 1px solid #eaebee;
  padding: 0 1.6rem;
  box-sizing: border-box;
  width: 100%;
  max-width: 100vw;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 76.8rem;
  margin: 0 auto;
`;

const Section = styled.section`
  display: block;
  padding: 4.8rem 0;
`;

const InnerSection = styled.section`
  float: right;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  line-height: 1.4;
  font-size: 1.4rem;
  font-weight: 700;
`;

const ButtonBar = styled.div`
  display: flex;
`;
