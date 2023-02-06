
import { Container } from '../components/Container';
 import DensityMediumIcon from '@mui/icons-material/DensityMedium';
// import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import './main.css'
import { useState } from 'react';
const Main=()=>{
    
    return(
        <div className='main-container'>
            <div className='header'><h2>To-Do-List</h2></div>
            <div className='sub-container2'>
                <DensityMediumIcon fontSize='small'></DensityMediumIcon>
                <div className='innerSub-container2'>
                    <h2 style={{height:'10px',fontSize:'1.5vw'}}>My Day</h2>
                    <p style={{fontSize:'10px'}}>Monday, Febrary 7</p>
                </div>
            </div>
            <div className='sub-container3'>
                <Container></Container>
            </div>
        
        </div>
    );
}

export default Main;