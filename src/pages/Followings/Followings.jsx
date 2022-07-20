import Topbar from "../../components/Topbar/Topbar";
import { CommonNav } from "../../components/Navbar/Navbar"
import { UserFollow } from "../../components/User/User"
import TabMenu from "../../components/TabMenu/TabMenu";

import UserImg1 from "../../assets/comment-img1.png";
import UserImg2 from "../../assets/comment-img2.png";
import UserImg3 from '../../assets/basic-profile.svg';
import './followings.css';

export const Followings = () => {
  return (
    <div className="following">
      <Topbar/>
      <CommonNav title="Followings"/>
      <ul className="followingUser">
        <UserFollow 
          picture={UserImg1}
          name="애월읍 한라봉 최고 맛집"
          id="정성을 다해 농사짓는 한라봉"
          follow="팔로우"
        />
        <UserFollow 
          picture={UserImg2}
          name="감귤의 품격 - 애월읍"
          id="제주 노지귤, 하우스 한라봉 판매합니다."
          follow="팔로우"
        />
        <UserFollow 
          picture={UserImg3}
          name="나 감귤 좋아하니"
          id="감귤농장 컬렉터 i love mandarin"
          follow="팔로우"
        />
      </ul>
      <div className="tabMenu">
        <TabMenu />
      </div>
    </div>
  );
};

export default Followings;