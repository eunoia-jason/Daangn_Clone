import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainSection = () => {
  return (
    <Section>
      <Container>
        <MainImage>
          <MainImageTop
            srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-1-c84dd43a3a50742bc296bd36e8b9b1c4a487b8d36aaf67e7f90ecce80201cf60.webp"
            alt="우리동네 중고 직거래 사진"
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-1-efd09cb54044140d530c6647906303c669ca80a8b51473722fc2b1747a3d9047.png"
          />
        </MainImage>
        <div>
          <ServiceTitle>중고거래</ServiceTitle>
          <MainTitle>
            믿을만한
            <br />
            이웃 간 중고거래
          </MainTitle>
          <ServiceDesc>
            동네 주민들과 가깝고 따듯한 거래를
            <br />
            지금 경험해보세요.
          </ServiceDesc>
          <ButtonBar>
            <StyledLink to="/hot_articles">인기매물 보기</StyledLink>
            <StyledLink to="/trust">믿을 수 있는 중고거래</StyledLink>
          </ButtonBar>
        </div>
      </Container>
    </Section>
  );
};

export default MainSection;

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
