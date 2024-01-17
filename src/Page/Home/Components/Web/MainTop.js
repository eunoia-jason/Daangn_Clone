import React from "react";
import styled from "styled-components";

const MainTop = () => {
  return (
    <Section style={{ paddingTop: "24px", backgroundColor: "#FFFAE0" }}>
      <Container>
        <div>
          <MainTitle>
            당신 근처의
            <br />
            지역 생활 커뮤니티
          </MainTitle>
          <ServiceDesc>
            동네라서 가능한 모든 것<br />
            당근에서 가까운 이웃과 함께해요.
          </ServiceDesc>
          <br />
          <ButtonBar>
            <DownloadButton
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.towneers.www"
            >
              <Img
                alt="Google Play"
                src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/google-play-white-0531cab5dbe15262e226cfb4acebeb316708ae0034d50b86ad4d809a03b6f5f0.svg"
              />
              <DownloadText>Google Play</DownloadText>
            </DownloadButton>
            <DownloadButton
              target="_blank"
              href="https://apps.apple.com/app/id1018769995"
            >
              <Img
                alt="App Store"
                src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/apple-store-white-9ebb10b431c549dd19f032f70e6762df307939b5add030265d9c2dea888b2d03.svg"
              />
              <DownloadText>App Store</DownloadText>
            </DownloadButton>
          </ButtonBar>
        </div>
        <MainImage>
          <MainImageTop
            srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-top-e765d561ee9df7f5ab897f622b8b5a35aaa70314f734e097ea70e6c83bdd73f1.webp"
            alt="중고거래, 동네생활 질문글, 알바와 동네업체"
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-top-eb44f81acb1938b57ba029196887cdd56fbb66dc46aa5d8c6d8392a7d8c9e671.png"
          />
        </MainImage>
      </Container>
    </Section>
  );
};

export default MainTop;

const Section = styled.section`
  display: block;
`;

const Container = styled.div`
  width: 1024px;
  height: 760px;
  margin: 0 auto;
  position: relative;
  background-color: #fffae0;
`;

const MainTitle = styled.h1`
  font-size: 54px;
  font-weight: 700;
  line-height: 73px;
  padding-top: 200px;
  margin-bottom: 3.2rem;
`;

const ServiceDesc = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #7c7c7c;
  line-height: 30px;
`;

const ButtonBar = styled.div`
  margin-top: 20px;
`;

const DownloadButton = styled.a`
  width: 180px;
  height: 56px;
  border-radius: 10px;
  background-color: #ff6f0f;
  box-sizing: border-box;
  text-decoration: none;
  padding: 14px 2rem;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  margin-right: 1rem;
`;

const Img = styled.img`
  fill: #fff;
  vertical-align: middle;
  display: inline-block;
`;

const DownloadText = styled.div`
  display: inline-block;
  color: #fff;
  font-size: 16px;
  margin-left: 8px;
  font-weight: 700;
  vertical-align: middle;
  line-height: 28px;
`;

const MainImage = styled.div`
  position: absolute;
  right: -84px;
  bottom: 0;
  width: 655px;
  height: 800px;
  background-color: #fffae0;
  background-repeat: no-repeat;
  background-size: 804px 685px;
`;

const MainImageTop = styled.img`
  position: absolute;
  right: -84px;
  bottom: 0;
  width: 655px;
  height: 800px;
  background-color: #fffae0;
  background-repeat: no-repeat;
  background-size: 804px 685px;
`;
