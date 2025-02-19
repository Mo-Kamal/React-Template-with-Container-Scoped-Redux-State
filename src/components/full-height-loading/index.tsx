import { Wrapper, LoadingContainer, Ellipsis, Dot } from "./styles";

const PageLoading = (props: any) => {
  return (
    <LoadingContainer>
      <Wrapper {...props}>
        <Ellipsis>
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </Ellipsis>
      </Wrapper>
    </LoadingContainer>
  );
};

export { PageLoading };
