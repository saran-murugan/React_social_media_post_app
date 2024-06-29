
/* import insta from './assets/insta.png' */
import { FaLaptop,FaTabletAlt, FaMobileAlt} from 'react-icons/fa'
import { useContext } from "react" 
import DataContext from './context/DataContext'

const Header = ({title}) => {

  const {width} = useContext(DataContext)

  return (
    <header className='Header'>
        <h1>{title}</h1>
       {/*  <img src={insta} alt="insta-logo" width={50} height={50} /> */}
        { 
          width < 768 ? <FaMobileAlt />
            :width <992 ? <FaTabletAlt /> 
             :<FaLaptop />
        }
    </header>
  )
}

export default Header