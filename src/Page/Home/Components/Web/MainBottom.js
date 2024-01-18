import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainBottom = () => {
  return (
    <Section>
      <Container>
        <MainImage>
          <MainImageTop
            srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-business-cc45c805de4a639e259aea606640042d09bccf358e8d20f50af325dd994aceef.webp"
            alt="내 근처에서 찾는 동네업체"
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-business-cc45c805de4a639e259aea606640042d09bccf358e8d20f50af325dd994aceef.webp"
          />
        </MainImage>
        <div>
          <ServiceTitle>동네업체</ServiceTitle>
          <MainTitle>
            내 근처에서 찾는
            <br />
            동네업체
          </MainTitle>
          <ServiceDesc>
            이웃들의 추천 후기를 확인하고
            <br />
            동네 곳곳의 업체들을 찾을 수 있어요.
          </ServiceDesc>
          <ButtonBar>
            <StyledLink to="/nearby-stores">당근 동네업체 보기</StyledLink>
          </ButtonBar>
        </div>
      </Container>
    </Section>
  );
};

export default MainBottom;

const Section = styled.section`
  display: block;
  background-color: #f6fdec;
`;

const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
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
