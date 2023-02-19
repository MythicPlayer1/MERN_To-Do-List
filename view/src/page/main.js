
import { Container } from '../components/Container';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
// import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import './main.css'

import { Lists } from '../components/Lists';
import { useEffect, useState } from 'react';


const Main = () => {
    const [datas, setNewDatas]=useState()
    
    const savedata=(saveddata)=>{
       
       
      
        setNewDatas(datas); 
    }
    console.log(datas)
    const getApi=async()=>{
    const response= await fetch('http://localhost:5600/api/get').then((response)=>response.json())
    console.log(response)
       
    }
    useEffect(()=>{
        getApi()

    },[]);

  
   
    return (
        <div className='main-container'>
            <div className='header'><h2>To-Do-List</h2></div>
            <div className='sub-container2'>
                <DensityMediumIcon fontSize='small'></DensityMediumIcon>
                <div className='innerSub-container2'>
                    <h2 style={{ height: '10px', fontSize: '1.5vw' }}>My Day</h2>
                    <p style={{ fontSize: '10px' }}>Monday, Febrary 7</p>
                </div>
            </div>
            <Container senddata={savedata}></Container>
            <div className='sub-container4'>
                <Lists todolists={datas}></Lists>
            </div>


        </div>
    );
}

export default Main;