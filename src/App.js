import {Route,Routes} from 'react-router-dom';

import Sign from './components/sign';
import Welcome from './components/welcome';
import Form from './components/form';
import Join from './components/join';

function App() {
  return (
    <div>
      <Welcome />
      {/* 여러 페이지 라우트 처리 */}
      <Routes>
        {/* /경로 */}
        <Route path='/' exact element={ <Form/>} />
        <Route path='/join' exact element={ <Join/>} />
      </Routes>
      <Sign />
    </div>
  );
}

export default App;
