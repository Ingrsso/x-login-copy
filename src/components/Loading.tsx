import styled from "@emotion/styled";

const Image = styled('img')`
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    width: 100px;
`

function LoadingComponents() {
    return (
        <>
            <Image src={"https://www.phoronix.net/image.php?id=2023&image=twitter_x"}/>
        </>
    );
}

export default LoadingComponents;
