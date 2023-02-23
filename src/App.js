import {ToastContainer} from 'react-toastify';
import RoutesApp from './Routes';
import 'react-toastify/dist/ReactToastify.css';
import { db } from "./FirebaseConection";

function App() {
  return (
    <div className='app'> 
    <ToastContainer autoClose={3000} />
      <RoutesApp/>
    </div>
    
  );
}

export default App;
