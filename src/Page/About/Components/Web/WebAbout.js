import React, { useEffect, useState } from "react";
import styled from "styled-components";
import defaultImage from "../../../../Assets/default_img.svg";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { AboutItem, AboutSeller } from "../../../../Atoms/AboutAtom";
import { Credential } from "../../../../Atoms/LoginAtom";
import { IconButton } from "@mui/material";
import HeartIcon from "@mui/icons-material/FavoriteBorder";
import LikedIcon from "@mui/icons-material/Favorite";
import { format } from "date-fns";
import axios from "axios";

const WebAbout = () => {
  const [aboutItem, setAboutItem] = useRecoilState(AboutItem);
  const [aboutSeller] = useRecoilState(AboutSeller);
  const user = useRecoilValue(Credential);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const increaseView = async () => {
      try {
        const response = await axios.patch(
          `${process.env.REACT_APP_SERVER_URL}/forSale/update/${aboutItem.id}/view`,
          {
            view: aboutItem.view + 1,
          }
        );
        setAboutItem(response.data);
      } catch (error) {
        alert(error);
      }
    };

    increaseView();
  }, []);

  const handleLikedClick = async () => {
    if (liked) {
      try {
        const response = await axios.patch(
          `${process.env.REACT_APP_SERVER_URL}/forSale/update/${aboutItem.id}/interest`,
          {
            interest: aboutItem.interest - 1,
          }
        );
        setAboutItem(response.data);
      } catch (error) {
        alert(error);
      }
    } else {
      try {
        const response = await axios.patch(
          `${process.env.REACT_APP_SERVER_URL}/forSale/update/${aboutItem.id}/interest`,
          {
            interest: aboutItem.interest + 1,
          }
        );
        setAboutItem(response.data);
      } catch (error) {
        alert(error);
      }
    }
    setLiked((prev) => !prev);
  };

  const formatMilliseconds = (milliseconds) => {
    const date = new Date(milliseconds);
    return format(date, "yyyy-MM-dd HH:mm:ss");
  };

  const handleDeleteClick = async () => {
    const ok = window.confirm("정말 삭제하시겠습니까?");

    if (ok) {
      try {
        await axios.delete(
          `${process.env.REACT_APP_SERVER_URL}/forSale/delete/${aboutItem.id}`
        );
        alert("삭제 되었습니다.");
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <Body>
      <Article>
        <ArticleImg>
          <ImgWrap>
            <Img src={defaultImage} />
          </ImgWrap>
        </ArticleImg>
        <Profile>
          <ProfileLink>
            <SpaceBetween>
              <div style={{ display: "flex" }}>
                <div style={{ display: "inline-block" }}>
                  <ProfileImg alt="프로필 사진" src={aboutSeller.image} />
                </div>
                <div style={{ display: "inline-block", marginLeft: "8px" }}>
                  <Nickname>{aboutSeller.name}</Nickname>
                  <Region>{aboutSeller.region}</Region>
                </div>
              </div>
              <div
                style={{ position: "absolute", right: 0, paddingRight: "36px" }}
              >
                <dl style={{ display: "block", width: "100%" }}>
                  <Dt>매너온도</Dt>
                  <Dd>
                    {aboutSeller.temperature} <span>°C</span>
                  </Dd>
                </dl>
                <Meters>
                  <Bar />
                </Meters>
                <Face />
              </div>
            </SpaceBetween>
          </ProfileLink>
        </Profile>
        <Description>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "block" }}>
              <Title>{aboutItem.title}</Title>
              <Category>
                {aboutItem.category} ∙{" "}
                <time>{formatMilliseconds(aboutItem.regDate)}</time>
              </Category>
              <Price>{aboutItem.price.toLocaleString()}원</Price>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {aboutSeller.id === user.id ? (
                <>
                  <Link to="/editform" style={{ all: "unset" }}>
                    <ChatButton>수정</ChatButton>
                  </Link>
                  <div style={{ width: "8px" }} />
                  <ChatButton onClick={handleDeleteClick}>삭제</ChatButton>
                </>
              ) : (
                <IconButton
                  aria-label="liked"
                  size="large"
                  onClick={handleLikedClick}
                >
                  {liked ? (
                    <LikedIcon fontSize="inherit" color="warning" />
                  ) : (
                    <HeartIcon fontSize="inherit" />
                  )}
                </IconButton>
              )}
            </div>
          </div>
          <div style={{ marginBottom: "16px", marginTop: "8px" }}>
            <Desc>{aboutItem.description}</Desc>
          </div>
          <Counts>
            관심 {aboutItem.interest} ∙ 조회 {aboutItem.view}
          </Counts>
        </Description>
      </Article>
    </Body>
  );
};

export default WebAbout;

const Body = styled.body`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: #212529;
  min-height: 100%;
  position: relative;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`;

const Article = styled.article`
  margin-top: 94px;
  padding-bottom: 0;
  display: block;
`;

const ArticleImg = styled.section`
  position: relative;
  width: 809px;
  margin: 0 auto;
  display: block;
`;

const ImgWrap = styled.div`
  position: relative;
  width: 757px;
  margin: 0 auto;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
`;

const Img = styled.img`
  border-radius: 8px;
  position: relative;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: transparent;
  display: block;
`;

const Profile = styled.section`
  display: block;
  width: 757px;
  margin: 0 auto;
`;

const ProfileLink = styled(Link)`
  text-decoration: none;
  display: block;
  margin-top: 25px;
  padding-bottom: 23px;
  position: relative;
  border-bottom: 1px solid #e9ecef;
`;

const SpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

const Nickname = styled.div`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.6px;
  color: #212529;
`;

const Region = styled.div`
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  color: #212529;
`;

const Dt = styled.dt`
  position: absolute;
  top: 36px;
  right: 0px;
  font-size: 12px;
  line-height: 1;
  letter-spacing: -0.6px;
  color: #868e96;
`;

const Dd = styled.dd`
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
  letter-spacing: -0.5px;
  margin-top: 1px;
  width: 100px;
  text-align: right;
  color: #319e45;
`;

const Meters = styled.div`
  clear: both;
  display: block;
  width: 100px;
  background-color: #e9ecef;
  height: 4px;
  border-radius: 100px;
  position: relative;
  margin-top: 24px;
`;

const Bar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 4px;
  border-radius: 100px;
  width: 36.5%;
  background-color: #319e45;
`;

const Face = styled.div`
  display: inline-block;
  overflow: hidden;
  text-indent: -9999px;
  text-align: left;
  background: url("https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/face-icon-set-0cffc52be32961b0bb4a308c272d8f526ddcdeda66dbde6eb32618eeb22b74e6.png")
    no-repeat;
  background-size: 29px 147px;
  background-position: 0px -99px;
  width: 24px;
  height: 24px;
  position: absolute;
  right: 0;
  top: 0;
`;

const Description = styled.section`
  display: block;
  padding: 32px 0;
  width: 757px;
  margin: 0 auto;
  border-bottom: 1px solid #e9ecef;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.6px;
`;

const Category = styled.p`
  margin-top: 4px;
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  color: #868e96;
`;

const Price = styled.p`
  margin-top: 4px;
  line-height: 1.76;
  letter-spacing: -0.6px;
  font-size: 18px;
  font-weight: bold;
`;

const Desc = styled.p`
  font-size: 17px;
  line-height: 1.6;
  letter-spacing: -0.6px;
  margin: 16px 0;
  word-break: break-all;
`;

const Counts = styled.p`
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  color: #868e96;
`;

const ChatButton = styled.button`
  line-height: 1.3;
  font-size: 1.6rem;
  display: block;
  white-space: nowrap;
  background-color: white;
  font-weight: 700;
  height: 4rem;
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
