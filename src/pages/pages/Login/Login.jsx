import React from "react";
import "./login.css";
import logoImage from "../../assets/logo.svg";
import logoNameKorean from "../../assets/logoNameKorean.svg";
import logoNameEnglish from "../../assets/logoNameEnglish.svg";
import { useNavigate } from "react-router-dom";
import Topbar from "../../components/Topbar/Topbar";

function LoginPage() {
  let navigate = useNavigate();
  return (
    <>
      <article className="loginMobileScreen">
        <Topbar />
        <div className="loginLogo">
          <img className="loginLogoImage" src={logoImage} alt="데브북스" />
          <img src={logoNameKorean} alt="데브북스" />
          <img src={logoNameEnglish} alt="데브북스" />
        </div>
        <article className="loginLink">
          <div className="loginKakao">카카오톡 계정으로 로그인</div>
          <div className="loginGoogle">구글 계정으로 로그인</div>
          <div className="loginFacebook">페이스북 계정으로 로그인</div>
          <div className="loginWrapper">
            <p
              onClick={() => {
                navigate("/loginEmail");
              }}
            >
              이메일로 로그인
            </p>
            <div id="divisionLine"></div>
            <p
              onClick={() => {
                navigate("/joinMembership");
              }}
            >
              회원가입
            </p>
          </div>
        </article>
      </article>
    </>
  );
}

export default LoginPage;
