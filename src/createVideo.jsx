import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";

const CreateVideo = () => {
    return (
        <Grid container >
        <Grid container xs={12} justify="space-evenly" style={{marginBottom:"4vw", marginTop:"2vw"}}>
            <h1 > Create free AI Video</h1>
        </Grid>
        <Grid item xs={1} md={2} lg={3}></Grid>
        <Grid container item xs={10} md={9} lg={8} justify='flex-start'>
        <p  style={{fontFamily:"Arial",   
        fontStyle:"normal", fontSize:"3vh"}}>Just type in your script in the below and we will send back your AI video
        </p>
        </Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={1} md={2} lg={3}></Grid>
        <Grid container item xs={10} md={9} lg={8} justify='flex-start'>
        <p  style={{fontFamily:"Arial",  fontWeight:"bold",
        fontStyle:"normal", fontSize:"3vh"}}>1. Enter your script below
        </p>
        </Grid>
        <Grid xs={1}></Grid>

        <Grid item xs={2} md={2} lg={3}></Grid>
        <Grid container item xs={10} md={10} lg={9} justify='flex-start'>
        <input style={{ fontSize:"3vh",borderWidth:"0.2vw", height:"10vh", width:"40vw" }} type="text"/>
        </Grid>

        <Grid item xs={1} md={2} lg={3}></Grid>
        <Grid container item xs={10} md={9} lg={8} justify='flex-start'>
        <p  style={{fontFamily:"Arial",  fontWeight:"bold",
        fontStyle:"normal", fontSize:"3vh"}}>2. Enter your email id below
        </p>
        </Grid>
        <Grid xs={1}></Grid>

        <Grid item xs={2} md={2} lg={3}></Grid>
        <Grid container item xs={10} md={10} lg={9} justify='flex-start' style={{marginBottom:"4vw"}}>
        <input style={{ fontSize:"3vh",borderWidth:"0.2vw", height:"6vh", width:"30vw" }} type="text"/>
        </Grid>

        <Grid item xs={2} md={2} lg={3}></Grid>
        <Grid container item xs={10} md={10} lg={9} justify='flex-start'>
        <button style={{ borderWidth:"0.2vw" ,backgroundColor:"transparent", borderRadius:"1vh", height:"5vh", width:"15vw"
          ,fontSize:"2vw", cursor:"pointer" }}
        >Submit</button>
        </Grid>



        {/* 
        
        <Grid item xs={12}>
        <p  style={{fontFamily:"Arial", 
        fontStyle:"normal",fontWeight:"bold", marginTop :"3 %", marginLeft: "23%" , 
        marginBottom:"1%",
        fontSize:"160%"}}>
        </p></Grid>
        <Grid item xs={12}>
        <input style={{ fontSize:"20px",borderWidth:"3px" ,marginLeft: "24.6%", height:"50px", width:"400px" }} type="email" />
        </Grid>
        <Grid item xs={12}>
        <button style={{ borderWidth:"3px" ,backgroundColor:"transparent", borderRadius:"10px" ,marginLeft:"24.6%" ,marginTop:"3%", height:"50px", width:"200px"
          ,fontSize:"30px", cursor:"pointer" }}
        >Submit</button></Grid> */}
        </Grid>

        
    )
};
export default CreateVideo;
