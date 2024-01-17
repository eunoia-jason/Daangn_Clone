import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainSection = () => {
  return (
    <Section>
      <Container>
        <MainImage>
          <MainImageTop
            srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-2-78a84106155b4b2c341b6425515a90782dc08a6f443ba0bb622700ef788d2e19.webp"
            alt="이웃과 함께하는 동네생활"
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-2-c99a6862a786b8f801c08ea8e76cfc0c06b5f86442c90ff7bffef0f99146321e.png"
          />
        </MainImage>
        <div>
          <ServiceTitle>동네생활</ServiceTitle>
          <MainTitle>
            이웃만 아는
            <br />
            동네 정보와 이야기
          </MainTitle>
          <ServiceDesc>
            우리동네의 다양한 정보와 이야기를
            <br />
            공감과 댓글로 나누어요.
          </ServiceDesc>
          <Ul>
            <Li>
              <Icon
                style={{
                  backgroundImage: `url("https://d1unjqcospf8gs.cloudfront.net/assets/home/main/rebranded-icon-story-1-f7be38c51a389f415e9c0ae94294a80d10a744c3006a2e3a5978c11f8fc8d5d5.svg")`,
                }}
              />
              <Text>동네모임</Text>
              <ItemDesc>
                근처 이웃들과 동네
                <br />
                이야기를 해보세요.
              </ItemDesc>
            </Li>
            <Li>
              <Icon
                style={{
                  backgroundImage: `url("https://d1unjqcospf8gs.cloudfront.net/assets/home/main/rebranded-icon-story-2-5611a1d6fccb1e6b28adac130948d9701358f94fe7eb31daa224493bbd875c36.svg")`,
                }}
              />
              <Text>동네질문</Text>
              <ItemDesc>
                궁금한 게 있을 땐
                <br />
                이웃에 물어보세요.
              </ItemDesc>
            </Li>
            <Li>
              <Icon
                style={{
                  backgroundImage: `url("https://d1unjqcospf8gs.cloudfront.net/assets/home/main/rebranded-icon-story-3-5a01573654c91fafeb8253238bac8a718edb7fdf3e49ce8b1a7b89c4aebc6f61.svg")`,
                }}
              />
              <Text>동네분실센터</Text>
              <ItemDesc>
                무언가를 잃어버렸다면
                <br />
                글을 올려보세요.
              </ItemDesc>
            </Li>
          </Ul>
        </div>
      </Container>
    </Section>
  );
};

export default MainSection;

const Section = styled.section`
  display: block;
  background-color: #fff8f1;
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

const Ul = styled.ul`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;

const Li = styled.li`
  margin-right: 1rem;
  margin-left: 0;
  width: 124px;
  margin: 1.6rem;
`;

const Icon = styled.div`
  width: 56px;
  height: 56px;
  background-size: 56px 56px;
`;

const Text = styled.div`
  margin-bottom: 0.8rem;
  margin-top: 1.6rem;
  font-size: 1.4rem !important;
  line-height: 1.5;
  font-weight: bold;
`;

const ItemDesc = styled.div`
  font-weight: 400;
  font-size: 13px;
  color: #7c7c7c;
  line-height: 17px;
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
