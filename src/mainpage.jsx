import { Grid } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Mainpage = () => {
    return (
<div>
    <div style={{ height: "100%", width: "100%" }}>
        <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}>
            <div>
                <img alt="banner4" src="images/screen11.png" />

                <Grid container>

                    <Grid item xs = {6}><img style={{
                    position: "absolute", top: "4%", left: "2%", display: "flex", maxHeight: '13vh',
                    maxWidth: '13vw'}}
                    src="images/logo.svg" /></Grid>
                    
                    <Grid item xs = {1}><a href='#videopage' style={{position: "absolute",
                    color: "#FFFFFF", fontFamily: "Arial", fontStyle: "normal", textDecoration: "none", left: '49%', top: '4%', 
                    fontWeight: "bold", fontSize: "1.7vw"}}>Home</a></Grid>

                    <Grid item xs = {1}><a href='#usecases' style={{position: "absolute",
                    color: "#FFFFFF", fontFamily: "Arial", fontStyle: "normal", textDecoration: "none", left: '58%', top: '4%', 
                    fontWeight: "bold", fontSize: "1.7vw"}}>Use cases</a></Grid>

                    <Grid item xs = {1}><a href='#howitworks1' style={{position: "absolute",
                    color: "#FFFFFF", fontFamily: "Arial", fontStyle: "normal", textDecoration: "none", left: '70%', top: '4%', 
                    fontWeight: "bold", fontSize: "1.7vw"}}>How it works</a></Grid>

                    <Grid item xs = {1}><a href='#team' style={{position: "absolute",
                    color: "#FFFFFF", fontFamily: "Arial", fontStyle: "normal", textDecoration: "none", left: '83%', top: '4%', 
                    fontWeight: "bold", fontSize: "1.7vw"}}>Team</a></Grid>

                    <Grid item xs = {1}><a href='#contact' style={{position: "absolute",
                    color: "#FFFFFF", fontFamily: "Arial", fontStyle: "normal", textDecoration: "none", left: '91%', top: '4%', 
                    fontWeight: "bold", fontSize: "1.7vw"}}>Log in</a></Grid>

                    <Grid item xs={1}></Grid>

                </Grid>       
                    
                <Grid container>
                    <Grid item><p style={{
                            position: "absolute", top: "35%", left: "7.5%",fontSize: "2.7vw", fontFamily: "Arial", fontStyle: "normal",
                            fontWeight: "bold",  color: "#FFFFFF", lineHeight: "3vw", textAlign:"left"
                            }}
                            >Create videos< br/> 
                            from plain text</p></Grid>

                    <Grid item><p style={{
                    position: "absolute", top: "56%", left: "7.5%", fontSize: "1.5vw", fontFamily: "Arial", fontStyle: "normal",
                    fontWeight: "400", lineHeight: "2vw", textAlign: "left", color: "#FFFFFF",
                    }}
                    >NeuralSync AI empowers brands to go video-first by <br /> 
                    enbaling them to produce videos from plain text</p></Grid>
                    
                    <Grid item><a href="#createaivideo">
                    <button style={{
                    position: "absolute", left: "7.5%", top:"36vw" ,backgroundColor: "transparent",
                    border: "transparent", cursor: "pointer"
                    }}>
                    <img src="images/createaivideo.svg" style={{height: "15vh", width:"17vw"}}/></button>
                    </a></Grid>

                    <Grid item><a href='#howitworks1'>
                    <button style={{
                        position: "absolute", top: "40vw", left: "7.5%", backgroundColor: "transparent",
                        border: "transparent", cursor: "pointer"
                    }}>
                        <img src="images/howitworks.svg" style={{height: "15vh", width:"17vw"}} /></button>
                    </a></Grid>
                </Grid>
                
            </div>


            <div>
                <img alt="banner4" src="images/screen12.png" />

                <Grid container>

                    <Grid item xs = {6}><img style={{
                    position: "absolute", top: "4%", left: "2%", display: "flex", maxHeight: '13vh',
                    maxWidth: '13vw'}}
                    src="images/logo.svg" /></Grid>
                    
                    <Grid item xs = {1}><a href='#videopage' style={{position: "absolute",
                    color: "#FFFFFF", fontFamily: "Arial", fontStyle: "normal", textDecoration: "none", left: '49%', top: '4%', 
                    fontWeight: "bold", fontSize: "1.7vw"}}>Home</a></Grid>

                    <Grid item xs = {1}><a href='#usecases' style={{position: "absolute",
                    color: "#FFFFFF", fontFamily: "Arial", fontStyle: "normal", textDecoration: "none", left: '58%', top: '4%', 
                    fontWeight: "bold", fontSize: "1.7vw"}}>Use cases</a></Grid>

                    <Grid item xs = {1}><a href='#howitworks1' style={{position: "absolute",
                    color: "#FFFFFF", fontFamily: "Arial", fontStyle: "normal", textDecoration: "none", left: '70%', top: '4%', 
                    fontWeight: "bold", fontSize: "1.7vw"}}>How it works</a></Grid>

                    <Grid item xs = {1}><a href='#team' style={{position: "absolute",
                    color: "#FFFFFF", fontFamily: "Arial", fontStyle: "normal", textDecoration: "none", left: '83%', top: '4%', 
                    fontWeight: "bold", fontSize: "1.7vw"}}>Team</a></Grid>

                    <Grid item xs = {1}><a href='#contact' style={{position: "absolute",
                    color: "#FFFFFF", fontFamily: "Arial", fontStyle: "normal", textDecoration: "none", left: '91%', top: '4%', 
                    fontWeight: "bold", fontSize: "1.7vw"}}>Log in</a></Grid>

                    <Grid item xs={1}></Grid>

                </Grid>       
                    
                <Grid container>
                    {/* <Grid item><p style={{
                            position: "absolute", fontSize: "230%", fontFamily: "Arial", fontStyle: "normal",
                            fontWeight: "bold", lineHeight: "37px", color: "#FFFFFF", lineHeight: "125%",
                            }}
                            >Make videos in <br />
                            multiple languages</p></Grid> */}

                            <Grid item><p style={{
                            position: "absolute", top: "35%", left: "7.5%",fontSize: "2.7vw", fontFamily: "Arial", fontStyle: "normal",
                            fontWeight: "bold",  color: "#FFFFFF", lineHeight: "3vw", textAlign:"left"
                            }}
                            >Make videos in <br />
                            multiple languages</p></Grid>


                            <Grid item><p style={{
                    position: "absolute", top: "56%", left: "7.5%", fontSize: "1.5vw", fontFamily: "Arial", fontStyle: "normal",
                    fontWeight: "400", lineHeight: "2vw", textAlign: "left", color: "#FFFFFF",
                    }}
                    >Lip sync in the wild videos translated in multiple<br />
                    languages and increase customer engagement</p></Grid>
                    
                    <Grid item><a href="#createaivideo">
                    <button style={{
                    position: "absolute", left: "7.5%", top:"36vw" ,backgroundColor: "transparent",
                    border: "transparent", cursor: "pointer"
                    }}>
                    <img src="images/createaivideo.svg" style={{height: "15vh", width:"17vw"}}/></button>
                    </a></Grid>

                    <Grid item><a href='#howitworks1'>
                    <button style={{
                        position: "absolute", top: "40vw", left: "7.5%", backgroundColor: "transparent",
                        border: "transparent", cursor: "pointer"
                    }}>
                        <img src="images/howitworks.svg" style={{height: "15vh", width:"17vw"}} /></button>
                    </a></Grid>

                    {/* <Grid item><p style={{
                    position: "absolute", top: "58%", left: "7.5%", fontSize: "1.5vw", fontFamily: "Arial", fontStyle: "normal",
                    fontWeight: "400", lineHeight: "2.5vw", textAlign: "left", color: "#FFFFFF",
                    }}
                    >Lip sync in the wild videos translated in multiple<br />
                    languages and increase customer engagement</p></Grid>
                    
                    <Grid item><a href="/createvideo">
                    <button style={{
                    position: "absolute", left: "7.5vw", top:"30vw" ,backgroundColor: "transparent",
                    border: "transparent", cursor: "pointer"
                    }}>
                    <img src="images/createaivideo.svg" style={{height: "20vh", width:"20vw"}}/></button>
                    </a></Grid>

                    <Grid item><a href='#howitworks1'>
                    <button style={{
                        position: "absolute", top: "40vw", left: "7.5vw", backgroundColor: "transparent",
                        border: "transparent", cursor: "pointer"
                    }}>
                        <img src="images/howitworks.svg" style={{height: "20vh", width:"20vw"}} /></button>
                    </a></Grid> */}
                </Grid>
                
            </div>
            
        </Carousel>
    </div>

    <div  id="createaivideo">
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
        </Grid>
    </div>

    <div style={{marginTop: "20vh"}}>
        <div id="videopage" >
            <img style={{ height: "100%", width: "100%" }} alt="banner5" src="images/videopage.png" />
        </div>

        <div id="usecases" >
            <img style={{ height: "100%", width: "100%" }} alt="banner5" src="images/usecases.png" />
        </div>

        <div id="howitworks1">
            <img style={{ height: "100%", width: "100%" }} alt="banner5" src="images/howitworks1.png" />
        </div>

        <div id="howitworks2" >
            <img style={{ height: "100%", width: "100%" }} alt="banner5" src="images/howitworks2.png" />
        </div>

        <div id="team" >
            <img style={{ height: "100%", width: "100%" }} alt="banner5" src="images/team.png" />

        </div>

        <div id="contact" >
            <img style={{ height: "100%", width: "100%" }} alt="banner5" src="images/contact.png" />
        </div>
    </div >

</div>
)
};

                {/* 
                
                
                
            </div>
            <div style={{ fontSize: "120%" }}>
                <img alt="banner5" src="images/screen12.png" />
                <img style={{
                position: "absolute", top: "0", display: "flex", maxHeight: '125px',
                maxWidth: '125px', marginLeft: '5%', marginTop: '3%'
                }}
                src="images/logo.svg" />
                <a href='#videopage' style={{
                position: "absolute", display: "flex", left: '50%', top: '4%',
                color: "#FFFFFF",
                fontFamily: "Arial", fontStyle: "normal", textDecoration: "none", fontWeight: "bold"
                }}>Home</a>
                <a href='#usecases' style={{
                position: "absolute", display: "flex", left: '58%', top: '4%',
                color: "#FFFFFF",
                fontFamily: "Arial", fontStyle: "normal", textDecoration: "none", fontWeight: "bold"
                }}>Use cases</a>
                <a href='#howitworks1' style={{
                position: "absolute", display: "flex", left: '70%', top: '4%',
                color: "#FFFFFF",
                fontFamily: "Arial", fontStyle: "normal", textDecoration: "none", fontWeight: "bold"
                }}>How it works</a>
                <a href='#team' style={{
                position: "absolute", display: "flex", left: '83%', top: '4%',
                color: "#FFFFFF",
                fontFamily: "Arial", fontStyle: "normal", textDecoration: "none", fontWeight: "bold"
                }}>Team</a>
                <a href='#contact' style={{
                position: "absolute", display: "flex", left: '91%', top: '4%',
                color: "#FFFFFF",
                fontFamily: "Arial", fontStyle: "normal", textDecoration: "none", fontWeight: "bold"
                }}>Log in</a>
                <h1 style={{
                position: "absolute", top: "30%", left: "7.5%", fontSize: "230%", fontFamily: "Arial", fontStyle: "normal",
                fontWeight: "bold", lineHeight: "37px", textAlign: "left", color: "#FFFFFF", lineHeight: "125%",
                }}
                >Make videos in <br />
                multiple languages
                </h1>
                <img src="images/line.png" style={{position: "absolute",top: "56%", left: "7.5%", height: "0.2%", width:"15%"}} ></img>
                <p style={{
                position: "absolute", top: "58%", left: "7.5%", fontSize: "130%", fontFamily: "Arial", fontStyle: "normal",
                fontWeight: "400", lineHeight: "37px", textAlign: "left", color: "#FFFFFF",
                }}
                >Lip sync in the wild videos translated in multiple<br />
                languages and increase customer engagement</p>
                <a href="/createvideo">
                <button style={{
                    position: "absolute", top: "73%", left: "7.5%", backgroundColor: "transparent",
                    border: "transparent", cursor: "pointer"
                }}>
                    <img src="images/createaivideo.svg" /></button>
                </a>
                <a href='#howitworks1'>
                <button style={{
                    position: "absolute", top: "81%", left: "7.5%", backgroundColor: "transparent",
                    border: "transparent", cursor: "pointer"
                }}>
                    <img src="images/howitworks.svg" /></button>
                </a>
            </div>
            </Carousel>
        </div>
         */}


export default Mainpage;