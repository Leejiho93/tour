import { Button, Form, Input } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 80vh;
  width: 500px;
  padding: 30px;
  margin: 0 auto;
  margin-top: 100px;
  // border: 1px solid #000;
  ${({ theme }) => theme.window.mobileL} {
    width: 100%;
    margin: 0 auto;
    margin-top: 50px;
  }
`;

export const Title = styled.div`
  margin-top: 50px;
  text-align: center;
  font-size: 40px;
  margin-bottom: 60px;
  font-family: BMJUA;
  color: #000;
`;

export const LoginLabel = styled(Form.Item)`
  & label {
    font-size: 16px;
  }
`;

export const LoginInput = styled(Input)`
  height: 50px;
  border-radius: 5px;
`;

export const LoginPassword = styled(Input.Password)`
  height: 50px;
  border-radius: 5px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  text-align: end;
  margin-bottom: 20px;
`;

export const LoginButton = styled(Button)`
  width: 100%;
  height: 40px;
  background-color: #1a73e8;
  border-radius: 5px;
  color: #fff;

  &:hover {
    background-color: #1890ff;
    color: #fff;
  }
`;

export const SubWrapper = styled.div`
  width: 100%;
  text-align: center;
  & a {
    color: #5b5b5b;
  }
`;

export const LoginError = styled.div`
  text-align: center;
  margin-bottom: 30px;
  color: red;
`;
