import styled from "@emotion/styled";
import {useState} from "react";
import LoginModal from "./Modal/LoginModal.tsx";

const App = styled.div`
    /* 추가 스타일이 필요한 경우 여기에 작성 */
`;

const Container = styled.div`
    /* 추가 스타일이 필요한 경우 여기에 작성 */
`;

const Main = styled.main`
    display: flex;
`;

const Logo = styled("div")`
    width: 75%;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    
`

const Login = styled("div")`
    flex: 1;
    width: 50%;
;
`


const Nav = styled.nav`
    display: flex;
    justify-content: center;
    position: fixed; /* 고정 위치 설정 */
    height: 2.1%;
    bottom: 15px;
    width: 100%; /* 너비를 전체로 설정 */
    z-index: 1000; /* 다른 요소 위로 표시되도록 z-index 설정 */
    text-align: center;
`;

const NavItems = styled.div`
    cursor: pointer;
    margin-right: 15px;
    color: rgba(255, 255, 255, 0.4);
    font-size: 13px;

    &:last-child {
        margin-left: 0px;
        cursor: text;
        border-bottom: 0px !important;
    }

    &:hover {
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    }
`;

const LoginInfo = styled("div")`
    font-weight: 700;
    font-size: 57px;
    position: absolute;
    transform: translate(50%,-50%);
    right: 27%;
    top: 50%;
`

const JoinTwitter = styled("div")`
    font-size: 28px;
    margin-top: 40px;
    font-weight: 600;

`

const JoinButton = styled("div")`
    padding: 5px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    background: white;
    color: black;
    width: 60%;
    margin-top: 20px;
    border-radius: 30px;
    padding-top: 8px;
    padding-bottom: 8px
`

const JoinButtonApple = styled("div")`
    padding: 5px;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    background: white;
    color: black;
    width: 60%;
    margin-top: 10px;
    border-radius: 30px;
    padding-top: 8px;
    padding-bottom: 8px
`

const CreateAccount = styled("div")`
    padding: 5px;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    width: 60%;
    margin-top: 20px;
    background-color: rgb(29, 155, 240);

    border-radius: 30px;
`

const Image = styled("img")`
`

const Diver = styled("div")`
 display: flex;
`

const DiverLine = styled("div")`
    width: 27%;
    height: 1px;
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.3);
    flex-direction: row;
`

const DiverText = styled("span")`
    font-size: 16px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
    position: relative;
    top: 7px;
    margin-right: 10px;
    margin-left: 10px;

`

const AgreeCookieUsing = styled("div")`
    font-size: 11px;
    font-weight: 500;
    width: 65%;
    margin-top: 5px;
    color: rgba(255, 255, 255, 0.5);
`

const AgreeHighlight = styled("span")`
    color: rgb(29, 155, 240);
    &:hover {
        border-bottom: 1px solid rgb(29, 155, 240);
        cursor: pointer;
    }
`

const AlreadyTwitter = styled(`div`)`
    font-size: 16px;
    font-weight: 600;
    margin-top: 50px;
`

const LoginButton = styled(`div`)`
    padding: 5px;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    padding-top: 9px;
    padding-bottom: 9px;
    color: white;
    width: 60%;
    margin-top: 20px;
    color: rgb(29, 155, 240);
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    cursor: pointer;
`
function LoginComponents() {
    const [isShowModalLogin, setIsShowModalLogin] = useState<boolean>(false)

    return (
        <>
            {isShowModalLogin ? <LoginModal /> : null}

            <App>
                <Container>
                    <Main>
                        <Logo>
                            <Image src={"https://www.phoronix.net/image.php?id=2023&image=twitter_x"}/>
                        </Logo>
                        <Login>
                            <LoginInfo>
                                지금 일어나고 있는 일
                                <JoinTwitter>
                                    지금 가입하세요.
                                </JoinTwitter>

                                <JoinButton>

                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                                         style={{
                                             width:"18px",
                                             position:"relative",
                                             top: "3px",
                                             marginRight: "5px"
                                         }}>
                                        <g>
                                            <path fill="#EA4335"
                                                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                            <path fill="#4285F4"
                                                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                            <path fill="#FBBC05"
                                                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                            <path fill="#34A853"
                                                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                            <path fill="none" d="M0 0h48v48H0z"></path>
                                        </g>
                                    </svg>
                                    <span style={{
                                        position:"relative",
                                        top: "-1px"
                                    }}>
                                        Google 계정으로 가입하기
                                    </span>
                                </JoinButton>
                                <JoinButtonApple>
                                    <svg viewBox="0 0 24 24" aria-hidden="true"
                                         className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1d4mawv r-z80fyv r-19wmn03"
                                         style={{color: "rgb(15, 20, 25)",
                                             width:"18px",
                                             position:"relative",
                                             top: "3px",
                                             marginRight: "5px"
                                    }}>
                                        <g>
                                            <path
                                                d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path>
                                        </g>
                                    </svg>
                                    <span style={{
                                        position: "relative",
                                        top: "-1px"
                                    }}>
                                        Apple 에서 가입하기
                                    </span>
                                </JoinButtonApple>

                                <Diver>
                                    <DiverLine></DiverLine>
                                    <DiverText>또는</DiverText>
                                    <DiverLine></DiverLine>
                                </Diver>
                                <CreateAccount>
                                    계정 만들기
                                </CreateAccount>
                                <AgreeCookieUsing>
                                    가입하시려면 <AgreeHighlight>쿠키 사용</AgreeHighlight>을 포함해 <AgreeHighlight>이용약관</AgreeHighlight>과 <AgreeHighlight>개인정보 처리방침</AgreeHighlight>에 동의해야 합니다.
                                </AgreeCookieUsing>

                                <AlreadyTwitter>
                                    이미 트위터에 가입하셨나요?
                                </AlreadyTwitter>
                                <LoginButton onClick={() => {
                                    console.log(isShowModalLogin)
                                    setIsShowModalLogin(true)
                                }}>
                                    로그인
                                </LoginButton>
                            </LoginInfo>
                        </Login>
                    </Main>
                </Container>
            </App>
            <Nav>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <NavItems>소개</NavItems>
                    <NavItems>X 앱 다운로드하기</NavItems>
                    <NavItems>고객센터</NavItems>
                    <NavItems>이용약관</NavItems>
                    <NavItems>개인정보 처리방침</NavItems>
                    <NavItems>쿠키 정책</NavItems>
                    <NavItems>접근성</NavItems>
                    <NavItems>광고 정보</NavItems>
                    <NavItems>블로그</NavItems>
                    <NavItems>채용</NavItems>
                    <NavItems>브랜드 리소스</NavItems>
                    <NavItems>광고</NavItems>
                    <NavItems>마케팅</NavItems>
                    <NavItems>비즈니스용 X</NavItems>
                    <NavItems>개발자</NavItems>
                    <NavItems>디렉터리</NavItems>
                    <NavItems>설정</NavItems>
                    <NavItems>© 2024 X Corp.</NavItems>
                </div>
            </Nav>
        </>
    );
}

export default LoginComponents;
