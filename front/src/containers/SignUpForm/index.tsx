import * as React from 'react';
import Router from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { signupAsync, signupReset } from '../../modules/user';
import {
  ErrorMessage,
  SignupButton,
  SignupInput,
  SignupLabel,
  SignupPassword,
  Title,
  Wrapper,
} from './style';
import { SubWrapper, ButtonWrapper } from '../LoginForm/style';
import { Form } from 'antd';
import Link from 'next/link';
import { UserOutlined, LockOutlined, SmileOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';

const SignUpForm: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const dispatch = useDispatch();

  const { me, isSignedup, isSigningup, signupError } = useSelector(
    (state: RootState) => state.user
  );

  React.useEffect(() => {
    if (me) {
      Swal.fire({
        title: '잘못된 접근',
        text: '홈 화면으로 이동합니다.',
        icon: 'warning',
      }).then(() => {
        Router.push('/');
      });
    }
  }, [me]);

  React.useEffect(() => {
    if (isSignedup) {
      Swal.fire({
        title: '회원가입 성공',
        text: '로그인 화면으로 이동합니다.',
        icon: 'success',
      }).then(() => {
        dispatch(signupReset());
        Router.push('/login');
      });
    }
  }, [isSignedup, dispatch]);

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const onSubmit = () => {
    dispatch(
      signupAsync.request({
        userId: id,
        password,
        nickname,
      })
    );
  };
  return (
    <Wrapper>
      <Title>회원가입</Title>
      <ErrorMessage>{signupError}</ErrorMessage>
      <Form onFinish={onSubmit}>
        <SignupLabel
          name="id"
          rules={[{ required: true, message: '아이디를 입력해주세요.' }]}
        >
          <SignupInput
            prefix={<UserOutlined />}
            value={id}
            onChange={onChangeId}
            id="id"
            placeholder="아이디"
          />
        </SignupLabel>
        <SignupLabel
          name="password"
          rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
        >
          <SignupPassword
            prefix={<LockOutlined />}
            id="password"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호"
          />
        </SignupLabel>
        <SignupLabel
          name="nickname"
          rules={[{ required: true, message: '닉네임를 입력해주세요.' }]}
        >
          <SignupInput
            prefix={<SmileOutlined />}
            value={nickname}
            onChange={onChangeNickname}
            id="nickname"
            placeholder="닉네임"
          />
        </SignupLabel>
        <ButtonWrapper>
          <SignupButton htmlType="submit" loading={isSigningup}>
            가입하기
          </SignupButton>
        </ButtonWrapper>
        <SubWrapper>
          <Link href="/login">로그인</Link>
        </SubWrapper>
      </Form>
    </Wrapper>
  );
};

export default SignUpForm;