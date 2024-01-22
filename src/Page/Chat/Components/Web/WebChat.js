import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import { AccessToken, Credential } from "../../../../Atoms/LoginAtom";

const WebChat = () => {
  const navigate = useNavigate();
  const [, setCredential] = useRecoilState(Credential);
  const [, setAcessToken] = useRecoilState(AccessToken);
  const handleLogoutClick = () => {
    googleLogout();
    localStorage.removeItem("accessToken");
    setCredential(null);
    setAcessToken(null);
    navigate("/");
  };

  return <LogoutButton onClick={handleLogoutClick}>로그아웃</LogoutButton>;
};

export default WebChat;

const LogoutButton = styled.button`
  line-height: 1.3;
  margin: 50vh 50vw;
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
