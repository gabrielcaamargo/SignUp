import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 40vw;
  text-align: center;
  border-radius: 10px;
  background-color: #18435A;
  


  @media (max-width: 1200px){
    flex-direction: column;
    width: 90vw;
    margin-top: -25vh;
    img{
      width: 100%;
    }
  }

  p:nth-child(2){
    margin-bottom: 15px;
  }

  p:nth-child(10){
    padding: 20px 0;

    span{
      cursor: pointer;
    }
  }
`
export const Image = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 10px 0px 0px 10px;
  content: url("src/images/listening-to-music-cropped.jpg");
  
  @media (max-width: 600px){
    content: url("src/images/listening-to-music.jpg");
    border-radius: 10px 10px 0px 0px;
  }
`
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  span{
    color: #3B8CC3;
    font-weight: 700;
  }

  @media (max-width: 1200px){
    margin-left: 0;
    margin: 15px auto 0;
    padding: 0 10px;
    justify-content: center;
  }
`

export const Title = styled.h2`
  font-size: 35px;
  margin: 15px 0px 2px;
`
export const InputLabel = styled.label`
  text-align: left;
  margin-bottom: 5px;
`

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 6px;
  font-size: 15px;

  ::placeholder{
    font-size: 14px;
  }

  :focus{
    background-color: #E5E5E5;
  }
`
export const Button = styled.div`
  padding: 15px;
  border-radius: 6px;
  background-color: #347AAE;
  transition: .3s;
  cursor: pointer;
  :hover{
    background-color: #2A628F;
  }
`