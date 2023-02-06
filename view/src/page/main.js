
import { Container } from '../components/Container';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import './main.css'
const Main=()=>{
    return(
        <div className='main-container'>
            <div className='header'><h1>To-Do-List</h1></div>
            <div className='sub-container2'>
                <div>
                    <DensityMediumIcon fontSize="medium"></DensityMediumIcon>
                </div>
                <h2 style={{height:'10px',fontSize:'1.5vw'}}>My Day</h2>
                <p style={{marginBottom:'100px',fontSize:'10px'}}>Monday, Febrary 7</p>
            </div>
        
        </div>
    );
}

export default Main;