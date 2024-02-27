import Concoct from '../components/concoct/concoct';
import GlobalContext from '../utils/globalContext';
import { useContext } from 'react'

function TheLab() {

  const { globalState, setGlobalState } = useContext(GlobalContext);
  console.log(globalState);

    return (
      <div>
        <Concoct/>
        {globalState ? (<p>GlobalState is rendered</p>):(<p>GlobalState is Not rendered</p>)}
      </div>
        
    )
  }
  
export default TheLab