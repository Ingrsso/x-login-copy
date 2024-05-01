import styled from "@emotion/styled";
import {useRef, useState} from "react";



const Main = styled('div')`
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    width: 600px;
    height: 700px;
    background: black;
    z-index: 999;
    border-radius: 20px;
`

const Nav = styled("div")`
    
`
const Image = styled("img")`
    width: 45px;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    margin-top: 10px;
`

const Faded = styled("div")`
    position: fixed;
    z-index: 9998;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(91, 112, 131, 0.4);
    
`
const CloseModal = styled("div")`
    width: 20px;
    left: 15px;
    fill: white;
    position: absolute;
    top: 15px;
`

const Container = styled(`div`)`
    width: 50%;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 80px;
`

const Title = styled(`div`)`
    font-size: 31px;
    font-weight: 600;
`

const Button = styled("div")`
    padding: 5px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    background: white;
    color: black;
    width: 100%;
    margin-top: 20px;
    border-radius: 30px;
    padding-top: 10px;
    padding-bottom: 10px
`
const ButtonApple = styled("div")`
    padding: 5px;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    background: white;
    color: black;
    width: 100%;
    margin-top: 20px;
    border-radius: 30px;
    padding-top: 10px;
    padding-bottom: 10px
`

const Diver = styled("div")`
 display: flex;
    position: relative;
    left: 3px;
`

const DiverLine = styled("div")`
    width: 42%;
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

const InputController = styled("div")`
    width: 100%;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin-top: 25px;
    border-radius: 3px;
`

const Input = styled("input")`
    width: 98%;
    height: 50%;
    padding-top: 7%;
    padding-left: 3%;
    font-size: 16px;
    outline: #009eff;
    border: none;
    background: none;
    color: white;
    
`

const InputPlaceholderSelected = styled(`div`)`
    position: absolute;
    padding: 8px;
    padding-top: 6px;
    color: #009eff;
    font-size: 11px;
    transition: 1s all;
`
const InputPlaceholder = styled(`div`)`
    position: absolute;
    padding: 8px;
    padding-top: 13px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    z-index: -1;
    transition: 1s all;
`


function LoginModal() {
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const [isShow, setIsShow] = useState<boolean>(true);


    return (
        <>
            {isShow ? <Faded>
                <Main>
                    <Nav>
                        <CloseModal onClick={() => {
                            setIsShow(false);
                        }}>
                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                 style={{color: "rgb(239, 243, 244);"}}>
                                <g>
                                    <path
                                        d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                                </g>
                            </svg>
                        </CloseModal>
                        <Container >
                            <Title>
                                X 가입하기
                            </Title>

                            <Button>

                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                                     style={{
                                         width: "18px",
                                         position: "relative",
                                         top: "3px",
                                         marginRight: "10px"
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
                                    position: "relative",
                                    top: "-1px"
                                }}>
                                            Google 계정으로 로그인
                                </span>
                            </Button>
                            <ButtonApple>
                                <svg viewBox="0 0 24 24" aria-hidden="true"
                                     className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1d4mawv r-z80fyv r-19wmn03"
                                     style={{
                                         color: "rgb(15, 20, 25)",
                                         width: "18px",
                                         position: "relative",
                                         top: "3px",
                                         marginRight: "10px"
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
                                            Apple로 로그인하기
                                        </span>
                            </ButtonApple>
                            <Diver>
                                <DiverLine></DiverLine>
                                <DiverText>또는</DiverText>
                                <DiverLine></DiverLine>
                            </Diver>

                            <InputController>
                                {isFocus ?
                                    <InputPlaceholderSelected>휴대폰 번호, 이메일 주소 또는 사용자 아이디</InputPlaceholderSelected> :
                                    <InputPlaceholder>휴대폰 번호, 이메일 주소 또는 사용자 아이디</InputPlaceholder>}

                                <Input onClick={() => {
                                    setIsFocus(true)
                                }} />
                            </InputController>
                            <Button style={{fontWeight: "700", marginTop: "30px"}}>다음</Button>
                            <Button style={{fontWeight: "700", color:"white", background:"none", border:"1px solid rgba(255,255,255,0.3)" ,marginTop: "30px"}}>비밀번호를 잊으셨나요?</Button>

                        </Container>
                        <Image src={"https://www.phoronix.net/image.php?id=2023&image=twitter_x"}/>
                    </Nav>
                </Main>
            </Faded> : null}
        </>

    );
}

export default LoginModal;
