import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import defaultImage from "../../../../Assets/default_img.svg";
import { useRecoilState } from "recoil";
import { AboutItem, AboutSeller } from "../../../../Atoms/AboutAtom";
import { Credential } from "../../../../Atoms/LoginAtom";
import axios from "axios";

const WebFleamarket = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [user] = useRecoilState(Credential);
  const [, setAboutItem] = useRecoilState(AboutItem);
  const [, setAboutSeller] = useRecoilState(AboutSeller);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/forSale/read`
        );

        setData(response.data);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (item) => {
    console.log(item);
    setAboutItem(item);
    setAboutSeller(item.user);
  };

  const handleAddClick = () => {
    navigate("/addform");
  };

  return (
    <>
      <Section>
        <Cover>
          <Title>
            믿을만한
            <br />
            이웃 간 중고거래
          </Title>
          <Description>
            동네 주민들과 가깝고 따뜻한 거래를
            <br />
            지금 경험해보세요.
          </Description>
          <DivImg>
            <SpanImg>
              <Img
                srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/fleamarket-39d1db152a4769a6071f587fa9320b254085d726a06f61d544728b9ab3bd940a.webp "
                alt="믿을만한 이웃 간 중고거래"
                src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/fleamarket-39d1db152a4769a6071f587fa9320b254085d726a06f61d544728b9ab3bd940a.webp"
              />
            </SpanImg>
          </DivImg>
        </Cover>
      </Section>
      <ArticleList>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "757px",
            margin: "0 auto",
          }}
        >
          <div style={{ width: "112px" }} />
          <ArticleTitle>중고거래 인기매물</ArticleTitle>
          {user === null ? (
            <div style={{ width: "112px" }} />
          ) : (
            <LogoutButton onClick={handleAddClick}>새 매물 등록</LogoutButton>
          )}
        </div>
        <CardWrap>
          {data.map((item) => {
            return (
              <Card key={item.id} onClick={() => handleCardClick(item)}>
                <CardLink to={`/about/${item.id}`}>
                  <CardPhoto>
                    <Photo
                      style={item.imageUrl === null ? { padding: "5px 0" } : {}}
                      alt={item.title}
                      src={
                        item.imageUrl === null ? defaultImage : item.imageUrl
                      }
                    ></Photo>
                  </CardPhoto>
                  <div style={{ marginTop: "12px" }}>
                    <CardTitle>{item.title}</CardTitle>
                    <Price>{item.price.toLocaleString()}원</Price>
                    <Region>{item.region}</Region>
                    <Counts>
                      <span>관심 {item.interest}</span> ∙{" "}
                      <span>조회 {item.view}</span>
                    </Counts>
                  </div>
                </CardLink>
              </Card>
            );
          })}
        </CardWrap>
        <ListMore>
          <ArticleMore to="/hot_articles">인기매물 더 보기</ArticleMore>
        </ListMore>
      </ArticleList>
    </>
  );
};

export default WebFleamarket;

const Section = styled.section`
  height: 315px;
  padding: 0 16px 0 16px;
  background-color: #fff1aa;
  display: block;
`;

const Cover = styled.div`
  position: relative;
  height: 100%;
  box-sizing: border-box;
  padding-top: 50px;
  max-width: 768px;
  margin: 0 auto;
`;

const Title = styled.h1`
  line-height: 1.5;
  font-size: 34px;
  letter-spacing: -0.32px;
  font-weight: 700;
`;

const Description = styled.span`
  line-height: 1.32;
  font-size: 18px;
  letter-spacing: -0.18px;
  margin-top: 16px;
  display: block;
`;

const DivImg = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  right: 0;
  height: 315px;
  width: 416px;
`;

const SpanImg = styled.span`
  box-sizing: border-box;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: block;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  border: none;
  margin: auto;
  width: 0;
  height: 0;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
  display: block;
`;

const ArticleList = styled.section`
  padding-top: 64px;
  display: block;
`;

const ArticleTitle = styled.h1`
  font-size: 32px;
  line-height: 43.2px;
  text-align: center;
  font-weight: 700;
`;

const CardWrap = styled.div`
  width: 757px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 40px;
`;

const Card = styled.article`
  width: 223px;
  margin-bottom: 56px;
  display: block;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: #212529;
  user-select: none;
`;

const CardPhoto = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #f8f9fa;
  box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
`;

const Photo = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid transparent;
`;

const CardTitle = styled.h2`
  font-size: 16px;
  letter-spacing: -0.02px;
  color: #212529;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  line-height: 1.5;
  font-weight: normal;
`;

const Price = styled.div`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 4px;
`;

const Region = styled.div`
  font-size: 13px;
  color: #212529;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  line-height: 1.5;
`;

const Counts = styled.div`
  color: #868e96;
  font-size: 13px;
`;

const ListMore = styled.div`
  padding-bottom: 80px;
  text-align: center;
`;

const ArticleMore = styled(Link)`
  text-decoration: underline;
  cursor: pointer;
  font-size: 1.6rem !important;
  line-height: 1.5;
  letter-spacing: -0.3px;
  color: #212529;
  font-weight: bold;
`;

const LogoutButton = styled.button`
  line-height: 1.3;
  font-size: 1.6rem;
  display: block;
  white-space: nowrap;
  background-color: white;
  font-weight: 700;
  min-height: 4rem;
  padding: 0 1.6rem;
  border-radius: 0.4rem;
  border: 1px solid #d1d3d8;
  cursor: pointer;
  width: fit-content;

  &:hover {
    background-color: #f2f3f6;
    color: #21212480;
    transition: background-color 0.15s;
    will-change: background-color;
  }
`;
