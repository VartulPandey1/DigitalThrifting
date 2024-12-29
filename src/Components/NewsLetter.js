import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1rem solid ${(props) => (props.isDark ? "#202124" : "white")};
  height: 40vh;
  background-color: ${(props) => (props.isDark ? "#202124" : "#f0daea")};
  @media only screen and (max-width: 768px) {
    height: 30vh;
  }
`;

const Heading = styled.span`
  color: ${(props) => (props.isDark ? "#f5f7f7" : "#202124")};
  display: flex;
  justify-content: center;
  font-size: 4rem;
  font-weight: 700;
  padding-top: 4vh;
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    padding-top: 2vh;
  }
`;
const NewsletterDescription = styled.span`
  color: ${(props) => (props.isDark ? "#f5f7f7" : "#202124")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2vh;
  font-size: 1.5rem;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
const EmialDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const Email = styled.div`
  display: flex;
  border: 1px solid black;
  width: 20vw;
  align-items: center;
  justify-content: center;
  margin-top: 4vh;
  @media only screen and (max-width: 1024px) {
    width: 35vw;
  }
  @media only screen and (max-width: 768px) {
    width: 45vw;
  }
  @media only screen and (max-width: 480px) {
    width: 60vw;
  }
`;
const Input = styled.input`
  height: 2rem;
  border: none;
  outline: none;
  width: 100%;
  padding-left: 1vw;
`;
const Button = styled.button`
  cursor: pointer;
  display: flex;
  height: 100%;
  border: none;
  background-color: ${(props) => (props.isDark ? "green" : "green")};
  align-items: center;
  justify-items: center;
`;

const NewsLetter = () => {
  const isDark = useSelector((store) => store.toggle.isDark);
  return (
    <Container isDark={isDark}>
      <Heading isDark={isDark}>NewsLetter</Heading>
      <NewsletterDescription isDark={isDark}>
        Get timely update from your favrorite products
      </NewsletterDescription>
      <EmialDiv>
        <Email>
          <Input placeholder="Your email"></Input>
          <Button isDark={isDark}>
            <SendIcon />
          </Button>
        </Email>
      </EmialDiv>
    </Container>
  );
};

export default NewsLetter;
