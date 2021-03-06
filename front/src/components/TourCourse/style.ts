import Image from 'next/image';
import styled from 'styled-components';
import { Timeline, Card } from 'antd';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  font-family: BMHANNAAir;
  justify-content: space-between;
  ${({ theme }) => theme.window.laptop} {
    width: 90%;
  }
  ${({ theme }) => theme.window.tablet} {
    flex-direction: column;
  }
`;
export const Item = styled(Timeline.Item)`
  font-size: 18px;
  & div {
    display: inline-block;
    cursor: pointer;
    &.active {
      font-weight: bold;
    }
  }
`;

export const CourseImage = styled.div``;

export const CourseList = styled(Timeline)`
  margin-top: 10px;
`;

export const CardWrapper = styled(Card)`
  width: 300px;
  height: 200px;
  margin: 0 auto;
  & div {
    text-align: center;
    font-size: 20px;
    font-family: BMJUA;
  }
  ${({ theme }) => theme.window.mobileS} {
    width: 250px;
    height: 200px;
  }
`;

export const CardImage = styled(Image)`
  width: 300px;
  height: 250px;
  ${({ theme }) => theme.window.tablet} {
    width: 100%;
  }
  ${({ theme }) => theme.window.mobileS} {
    // width: 250px;
    // height: 200px;
  }
`;

export const SubDetail = styled.div`
  flex: 2;
  padding: 10px;

  font-family: none;
  font-size: 15px;
  line-height: 18px;
  & span {
    font-weight: bold;
    font-size: 22px;
    padding: 5px;
    line-height: 25px;
    font-family: BMJUA;
  }
  & div {
    margin-bottom: 10px;
  }
  & p {
    line-height: 20px;
  }
`;
