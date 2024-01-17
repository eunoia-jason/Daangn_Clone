import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainSemiMiddle = () => {
  return (
    <Section>
      <Container>
        <MainImage>
          <MainImageTop
            srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-3-fa126bf72868e1a60f6a67dde54d8a39d51e70ee5df415ebf0ab3175e23d8ee1.webp"
            alt="당근하듯 쉽고 편한 동네 알바 구하기"
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-3-c105057eecd5aecd8343a3ad6b396e64a79ee75d54b3e6239eb231779ab0db04.png"
          />
        </MainImage>
        <div>
          <ServiceTitle>알바</ServiceTitle>
          <MainTitle>
            걸어서 10분!
            <br />
            동네 알바 구하기
          </MainTitle>
          <ServiceDesc>
            당근하듯 쉽고, 편하게
            <br />
            당근 알바로 동네 알바를 구할 수 있어요.
          </ServiceDesc>
          <ButtonBar>
            <StyledLink to="/jobs">내근처 알바 보기</StyledLink>
          </ButtonBar>
        </div>
      </Container>
    </Section>
  );
};

export default MainSemiMiddle;

const Section = styled.section`
  display: block;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ServiceTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: #ff6f0f;
  margin-bottom: 10px;
`;

const MainTitle = styled.h1`
  font-size: 42px;
  line-height: 57px;
  margin-bottom: 10px;
`;

const ServiceDesc = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #7c7c7c;
  line-height: 30px;
`;

const ButtonBar = styled.div`
  margin-top: 3.2rem;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  line-height: 23.76px;
  font-weight: 700;
  background-color: #e9ecef;
  color: #212529;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  padding: 12px 2rem;
  display: inline-block;
  margin-right: 10px;

  &:hover {
    background-color: #d9dcdf;
  }
`;

const MainImage = styled.div`
  display: inline-block;
  background-size: 655px 750px;
  width: 655px;
  height: 750px;
`;

const MainImageTop = styled.img`
  background-size: 655px 750px;
  width: 655px;
  height: 750px;
`;
