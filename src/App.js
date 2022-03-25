 import logo from './logo.svg';
import './App.css';
import { getCurrentDate } from './librarys/CurrentTime.js'
import LeftPage from './layouts/LeftPage';
import RightPage from './layouts/RightPage';
import { format } from "date-fns";
import Moment from 'moment';


function App() {

  return (
    <div className="App">
      <h1>NHẮC NHỞ NGÀY QUAN TRỌNG CỦA BẠN</h1>
        <div className='page'>
          <LeftPage  />
          <RightPage />
        </div>
    </div>
  );
}

export default App;
