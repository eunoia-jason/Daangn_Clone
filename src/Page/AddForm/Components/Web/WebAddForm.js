import React, { useRef, useState } from "react";
import styled from "styled-components";
import defaultImage from "../../../../Assets/default_img.svg";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Credential } from "../../../../Atoms/LoginAtom";
import axios from "axios";

const WebAddForm = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(Credential);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState("");
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const fileInput = e.target;
    const imagePreview = document.getElementById("imagePreview");

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        imagePreview.src = e.target.result;
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(parseInt(e.target.value, 10));
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddClick = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/forSale/create`, {
        title: title,
        category: category,
        price: price,
        description: description,
        user: user.id,
      });
      alert("등록되었습니다.");
      navigate("/mypage");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Body>
      <Article>
        <ArticleImg>
          <ImgWrap>
            <Img
              alt="click to upload"
              id="imagePreview"
              src={defaultImage}
              onClick={handleImageClick}
            />
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileChange}
            />
          </ImgWrap>
        </ArticleImg>
        <Profile>
          <ProfileLink>
            <SpaceBetween>
              <div style={{ display: "flex" }}>
                <div style={{ display: "inline-block" }}>
                  <ProfileImg alt="프로필 사진" src={user.image} />
                </div>
                <div style={{ display: "inline-block", marginLeft: "8px" }}>
                  <Nickname>{user.name}</Nickname>
                  <Region>{user.region}</Region>
                </div>
              </div>
              <div
                style={{ position: "absolute", right: 0, paddingRight: "36px" }}
              >
                <dl style={{ display: "block", width: "100%" }}>
                  <Dt>매너온도</Dt>
                  <Dd>
                    {user.temperature} <span>°C</span>
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
          <Title>
            <Input
              type="text"
              placeholder="제목을 입력하세요."
              value={title}
              onChange={handleTitleChange}
            />
          </Title>
          <Category>
            <Select value={category} onChange={handleCategoryChange}>
              <option value="" disabled>
                카테고리를 선택하세요.
              </option>
              <option value="디지털기기">디지털기기</option>
              <option value="가구/인테리어">가구/인테리어</option>
              <option value="유아동">유아동</option>
              <option value="여성의류">여성의류</option>
              <option value="여성잡화">여성잡화</option>
              <option value="남성패션/잡화">남성패션/잡화</option>
              <option value="생활가전">생활가전</option>
              <option value="생활/주방">생활/주방</option>
              <option value="가공식품">가공식품</option>
              <option value="스포츠/레저">스포츠/레저</option>
              <option value="취미/게임/음반">취미/게임/음반</option>
              <option value="뷰티/미용">뷰티/미용</option>
              <option value="식물">식물</option>
              <option value="반려동물용품">반려동물용품</option>
              <option value="티켓/교환권">티켓/교환권</option>
              <option value="도서">도서</option>
              <option value="유아도서">유아도서</option>
              <option value="기타 중고물품">기타 중고물품</option>
            </Select>
          </Category>
          <Price>
            <Input
              type="number"
              placeholder="가격을 입력하세요."
              value={price}
              onChange={handlePriceChange}
              min={0}
              style={{ width: "25%", marginRight: "8px" }}
            />
            원
          </Price>
          <div style={{ marginBottom: "16px", marginTop: "8px" }}>
            <Desc>
              <Textarea
                placeholder="내용을 입력하세요."
                value={description}
                onChange={handleDescriptionChange}
              />
            </Desc>
          </div>
        </Description>
        <ChatButton
          disabled={
            title === "" ||
            category === "" ||
            price === null ||
            isNaN(price) ||
            description === ""
          }
          style={{ margin: "0 auto 30px" }}
          onClick={handleAddClick}
        >
          등록하기
        </ChatButton>
      </Article>
    </Body>
  );
};

export default WebAddForm;

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
  cursor: pointer;
`;

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: transparent;
  display: block;
  border-radius: 8px;
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

  &:disabled:hover {
    cursor: not-allowed;
    color: #21212450;
    background-color: transparent;
  }
`;

const Input = styled.input`
  width: 50%;
  line-height: 1.36;
  font-size: 1.6rem;
  background-color: #f2f3f6;
  height: 4rem;
  margin: 1.6rem 0;
  padding: 0.9rem 1.2rem;
  border: none;
  border-radius: 0.6rem;

  &::-webkit-search-cancel-button {
    display: none;
  }
`;

const Textarea = styled.textarea`
  min-width: 100%;
  line-height: 1.36;
  font-size: 1.6rem;
  background-color: #f2f3f6;
  height: 20vh;
  margin: 1.6rem 0;
  padding: 0.9rem 1.2rem;
  border: none;
  border-radius: 0.6rem;
  resize: none;
`;

const Select = styled.select`
  width: 200px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 12px;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border: solid 1px #e9ecef;
  box-sizing: border-box;
  font-size: 17px;
  letter-spacing: -0.6px;
  text-align: left;
  background: #fff
    url("https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-arrow-down-ea33c4b4c74ce0aca95580c70c5ba1f464ff5833213b0fc8db5de0fab98b57e1.svg")
    no-repeat 95% 50%;
`;
