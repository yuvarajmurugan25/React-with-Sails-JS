import React,{Suspense,lazy} from 'react';
import ReactDOM from 'react-dom/client';
import Loading from './components/loading';
import { Buffer } from 'buffer';
window.Buffer = Buffer;
const LazyApp = lazy(()=>import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loading/>}>
    <LazyApp/>
  </Suspense>    
);
