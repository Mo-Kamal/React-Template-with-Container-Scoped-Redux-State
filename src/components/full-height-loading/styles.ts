import { styled } from "@mui/material";

export const LoadingContainer = styled("div")`
  min-height: 100vh;
`;

export const Wrapper = styled("div")`
  position: fixed;
  top: 30vh;
  left: calc(50vw - 30px);
  z-index: 99;

  &.contained {
    position: absolute;
    top: 80px;
    left: calc(50% - 30px);
  }
`;

export const Ellipsis = styled("div")`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

export const Dot = styled("div")`
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #396de0;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);

  &:nth-of-type(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  &:nth-of-type(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  &:nth-of-type(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  &:nth-of-type(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;
