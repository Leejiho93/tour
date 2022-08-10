import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ImageSkeleton = styled.div`
  @-webkit-keyframes loading {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
  @keyframes loading {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
  -webkit-animation: loading 1.5s infinite ease-in-out;
  animation: loading 1.5s infinite ease-in-out;

  width: 300px;
  height: 340px;
  margin: 10px;
  ${({ theme }) => theme.window.laptop} {
    // width: 45%;
  }
  ${({ theme }) => theme.window.mobileL} {
    // width: 90%;
  }
`;