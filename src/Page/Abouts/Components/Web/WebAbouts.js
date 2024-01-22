import React, { useEffect, useState } from "react";
import styled from "styled-components";
import defaultImage from "../../../../Assets/default_img.svg";
import { Link, Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { AboutItem } from "../../../../Atoms/AboutAtom";

const WebAbouts = () => {
  const [data, setData] = useState([]);
  const [, setAboutItem] = useRecoilState(AboutItem);

  //mock데이터 들고오기
  useEffect(() => {
    fetch("http://localhost:3000/data/dataList.json")
      .then((res) => res.json())
      .then((json) => setData(json.data));
  }, []);

  const handleCardClick = (item) => {
    setAboutItem(item);
  };

  return (
    <>
      <Outlet />
      <ArticleList>
        <ArticleTitle>중고거래 인기매물</ArticleTitle>
        <CardWrap>
          {data.map((item) => {
            return (
              <Card key={item.id} onClick={() => handleCardClick(item)}>
                <CardLink to={`/about/${item.id}`}>
                  <CardPhoto>
                    <Photo alt={item.title} src={defaultImage}></Photo>
                  </CardPhoto>
                  <div style={{ marginTop: "12px" }}>
                    <CardTitle>{item.title}</CardTitle>
                    <Price>{item.price.toLocaleString()}원</Price>
                    <Region>{item.region}</Region>
                    <Counts>
                      <span>관심 {item.interest}</span> ∙{" "}
                      <span>채팅 {item.chat}</span>
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

export default WebAbouts;

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
  padding: 5px 0;
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
