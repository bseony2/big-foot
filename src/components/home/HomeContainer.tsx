import { ReactElement } from "react";
import ContentBody from "components/layouts/ContentBody";
import HomeFeed from "./HomeFeed";
function HomeContainer(): ReactElement {
  return (
    <ContentBody>
      <HomeFeed></HomeFeed>
    </ContentBody>
  );
}

export default HomeContainer;
