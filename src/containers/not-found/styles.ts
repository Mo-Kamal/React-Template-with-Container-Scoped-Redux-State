import { styled } from "@mui/material";

export const Wrapper = styled("div")`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

export const Title = styled("div")`
  margin-top: -8vh;
  font-weight: bold;
  color: grey;
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;
