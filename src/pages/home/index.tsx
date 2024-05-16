import { memo, useState } from 'react';
import { HomeContext, HomeState, THomeState } from './config';
import './index.less';

const Home = memo(() => {
  const [state, setState] = useState<THomeState>(HomeState);

  return (
    <div className='Home'>
      <HomeContext.Provider value={[state, setState]}>
        <div className='img h-20 w-40 bg-cover' />
        <h1 className='text-7xl'>React App</h1>
        <br />
        <span>
          {window.innerWidth}x{window.innerHeight}
        </span>
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
