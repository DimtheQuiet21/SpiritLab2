import Concoct from '../components/concoct/concoct';
import GlobalContext from '../utils/globalContext';
import LocalContext from '../utils/neighborContext';
import { useContext } from 'react'
import {CircularProgress} from '@mui/material'
import NeighborProvider from './neighborProvider';

function TheLab() {

  const { globalState, setGlobalState } = useContext(GlobalContext);
  console.log(globalState);

    return (
      <NeighborProvider>
        {/* We have to make sure that the Global Context is Not an Empty Object before trying to render the Lab*/}
        {Object.entries(globalState).length !== 0 ? (<Concoct props={globalState}/>):(<CircularProgress/>)}
      </NeighborProvider>
    )
  }
  
export default TheLab