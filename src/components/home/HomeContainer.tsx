import {ReactElement} from 'react';
import HomeFeed from './HomeFeed';

function HomeContainer(): ReactElement {
  return (
    <div className="flex justify-center">
      <HomeFeed />
    </div>
  );
}

export default HomeContainer;
