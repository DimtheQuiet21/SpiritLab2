import Concoct from '../components/concoct/concoct';
import GlobalContext from '../utils/globalContext';
import { useContext } from 'react'
import {CircularProgress} from '@mui/material'

function TheLab() {

  const { globalState, setGlobalState } = useContext(GlobalContext);
  console.log(globalState);

    return (
      <div>
        {/* We have to make sure that the Global Context is Not an Empty Object before trying to render the Lab*/}
        {Object.entries(globalState).length !== 0 ? (<Concoct/>):(<CircularProgress/>)}
      </div>
        
    )
  }
  
export default TheLab