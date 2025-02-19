import { Features } from "./features";
import { HeroComponent } from "./hero";
import { Wrapper } from "./styles";
// import { homeSelectors } from "./selectors";
// import { useDispatch, useSelector } from "react-redux";
// import { homeActions } from "./slice";

export function Home() {
  // *--- how to use selectors ---*
  // const exampleProperty = useSelector(homeSelectors.exampleProperty);

  // *--- how to use the actions ---*
  // const dispatch = useDispatch();
  // const setExampleProperty = (value: string) => {
  //   dispatch(homeActions.setExampleProperty(value));
  // };

  return (
    <Wrapper>
      <HeroComponent />
      <Features />
    </Wrapper>
  );
}
