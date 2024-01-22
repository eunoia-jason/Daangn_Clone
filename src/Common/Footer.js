import React from "react";
import styled from "styled-components";
import PlayStore from "../Assets/PlayStore";
import AppStore from "../Assets/AppStore";

const Footer = () => {
  return (
    <div>
      <FooterRoot>
        <Div>
          <Section>
            <InnerSection>
              <Text>당근 앱 다운로드</Text>
              <ButtonBar>
                <DownloadButton
                  target="_blank"
                  href="https://daangn.onelink.me/oWdR/duyc3blt?afdp=karrot://open?from=website&deep_link_value=karrot://open?from=website"
                >
                  <div style={{ display: "flex" }}>
                    <AppStore />
                  </div>
                </DownloadButton>
                <DownloadButton
                  target="_blank"
                  href="https://daangn.onelink.me/oWdR/duyc3blt?afdp=karrot://open?from=website&deep_link_value=karrot://open?from=website"
                >
                  <div style={{ display: "flex" }}>
                    <PlayStore />
                  </div>
                </DownloadButton>
              </ButtonBar>
            </InnerSection>
            <Nav aria-label="footer">
              <Ul>
                <Li>
                  <A target="_blank" href="/fleamarket">
                    중고거래
                  </A>
                </Li>
                <Li>
                  <A target="_blank" href="/nearby-stores">
                    동네업체
                  </A>
                </Li>
                <Li>
                  <A target="_blank" href="/jobs">
                    당근알바
                  </A>
                </Li>
                <Li>
                  <A target="_blank" href="/realty">
                    부동산 직거래
                  </A>
                </Li>
                <Li>
                  <A target="_blank" href="/car">
                    중고차 직거래
                  </A>
                </Li>
              </Ul>
              <Ul>
                <Li>
                  <A target="_blank" href="/business">
                    당근비즈니스
                  </A>
                </Li>
                <Li>
                  <A target="_blank" href="/chat">
                    채팅하기
                  </A>
                </Li>
              </Ul>
              <Ul>
                <Li>
                  <A target="_blank" href="/faqs">
                    자주 묻는 질문
                  </A>
                </Li>
                <Li>
                  <A target="_blank" href="/about">
                    회사 소개
                  </A>
                </Li>
                <Li>
                  <A target="_blank" href="/about/jobs">
                    인재 채용
                  </A>
                </Li>
              </Ul>
            </Nav>
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
  gap: 10px;
`;

const DownloadButton = styled.a`
  margin-top: 0.8rem;
  margin-left: 0;
  display: flex;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;

const Nav = styled.nav`
  line-height: 1.4;
  font-size: 1.4rem;
  display: flex;
  max-width: 76.8rem;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  width: 33%;
  list-style-type: disc;
`;

const Li = styled.li`
  margin-bottom: 1.6rem;
  width: fit-content;
  list-style: none;
  margin: 1.6rem;
`;

const A = styled.a`
  color: #212124;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration-line: underline;
  }
`;
