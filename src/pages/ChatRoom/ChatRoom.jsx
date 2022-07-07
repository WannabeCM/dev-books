import "./chatRoom.css";
import Topbar from "../../components/Topbar/Topbar";
import {ChatNav} from "../../components/Navbar/Navbar"
import userProfile from "../../assets/basic-profile-img.svg"

export default function ChatRoom() {
  return (
    <div className="chatRoomWrap">
      <Topbar/>
      <header className="chatNavBar">
        <ChatNav title="애월읍 위니브 감귤농장"/>
      </header>
      <main className="chatMain">
        <ul>
          <li className="userChat">
            <img className="userChatImg" src={userProfile} alt="" />
            <div className="userMessage">옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.</div>
            <div className="userChatTime">12:39</div>
          </li>
          <li className="userChat">
            <img className="userChatImg" src={userProfile} alt="" />
            <div className="userMessage">안녕하세요. 감귤 사고싶어요요요요요</div>
            <div className="userChatTime">12:41</div>
          </li>
          <li className="myChat">
            <div className="myChatTime">12:50</div>
            <div className="myMessage">네 말씀하세요.</div>
          </li>
          <li className="myChat">
            <div className="myChatTime">12:51</div>
            <div className="myMessage myMessageImg"></div>
          </li>
        </ul>
      </main>
      <footer className="chatInputWrap">
        <form className="chatInputForm">
          <label for="chatUploadFile" className="chatUploadBtn"></label>
          <input className="chatUpload" id="chatUploadFile" type="file"></input>
          <label for="chatRoomInput" className="a11yHidden">메시지 입력창 입니다.</label>
          <input type="text" placeholder="메시지 입력하기..." className="chatInput" id="chatRoomInput" />
          <button className="chatSubmit" type="button">전송</button>
        </form>
      </footer>
    </div>
  )
}