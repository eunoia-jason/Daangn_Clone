import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import { AccessToken, Credential } from "../../../../Atoms/LoginAtom";
import { AboutItem } from "../../../../Atoms/AboutAtom";
import defaultImage from "../../../../Assets/default_img.svg";

const WebMy = () => {
  const navigate = useNavigate();
  const [credential, setCredential] = useRecoilState(Credential);
  const [, setAccessToken] = useRecoilState(AccessToken);
  const [aboutItem, setAboutItem] = useRecoilState(AboutItem);
  const [data, setData] = useState([]);

  //mock 데이터 들고오기
  useEffect(() => {
    fetch("http://localhost:3000/data/dataList.json")
      .then((res) => res.json())
      .then((json) => setData(json.data));
  }, []);

  const handleCardClick = (item) => {
    setAboutItem(item);
  };

  const handleLogoutClick = () => {
    googleLogout();
    localStorage.removeItem("accessToken");
    setCredential(null);
    setAccessToken(null);
    navigate("/");
  };

  const handleAddClick = () => {
    navigate("/addform");
  };

  return (
    <Body>
      <Section>
        <Profile>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "block" }}>
              <Nickname>
                {credential?.name} <Region>{credential?.region}</Region>
              </Nickname>
              <Detail>
                <Title>
                  매너온도 <Count>{credential?.temerature}36.5°C</Count>
                </Title>
                <Title>
                  재거래희망률{" "}
                  <Count>표시될 만큼 충분히 거래하지 않았어요.</Count>
                </Title>
              </Detail>
              <div style={{ position: "absolute", top: 0, left: 0 }}>
                <Img alt={credential?.name} src={credential?.picture} />
              </div>
            </div>
            <LogoutButton onClick={handleAddClick}>새 매물 등록</LogoutButton>
          </div>
        </Profile>
        <CardWrap>
          {data.map((item) => {
            if (item.name === credential?.name) {
              return (
                <Card key={item.id} onClick={() => handleCardClick(item)}>
                  <CardLink to={`/about/${item.id}`}>
                    <CardPhoto>
                      <Photo alt={item.title} src={defaultImage}></Photo>
                    </CardPhoto>
                    <div style={{ marginTop: "12px" }}>
                      <CardTitle>{item.title}</CardTitle>
                      <Price>{item.price.toLocaleString()}원</Price>
                      <RegionName>{item.region}</RegionName>
                      <Counts>
                        <span>관심 {item.interest}</span> ∙{" "}
                        <span>채팅 {item.chat}</span>
                      </Counts>
                    </div>
                  </CardLink>
                </Card>
              );
            }
          })}
        </CardWrap>
      </Section>
      <LogoutButton
        style={{ margin: "0 auto 20px" }}
        onClick={handleLogoutClick}
      >
        로그아웃
      </LogoutButton>
    </Body>
  );

  // return ;
};

export default WebMy;

const Body = styled.body`
  color: #212529;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  min-height: calc(100% - 77px);
  position: relative;
  -webkit-font-smoothing: antialiased;
`;

const Section = styled.section`
  display: block;
  width: 757px;
  margin: 30px auto 0 auto;
  margin-top: 72px;
`;

const Profile = styled.section`
  display: block;
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Nickname = styled.h2`
  text-align: left;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.6px;
  margin-bottom: 10px;
  vertical-align: middle;
  margin-left: 80px;
`;

const Region = styled.span`
  font-size: 17px;
  color: #212529;
  font-weight: normal;
  vertical-align: middle;
  margin-left: 6px;
`;

const Detail = styled.ul`
  list-style-type: none;
  margin: 10px 0;
  margin-left: 80px;
`;

const Title = styled.li`
  display: inline-block;
  margin-right: 20px;
  font-size: 15px;
  letter-spacing: -0.6px;
  color: #868e96;
`;

const Count = styled.span`
  font-weight: 600;
  margin-left: 4px;
`;

const Img = styled.img`
  width: 58px;
  height: 58px;
  object-fit: cover;
  border-radius: 50%;
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

const RegionName = styled.div`
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
