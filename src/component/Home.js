import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import {useNavigate} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import img from "./../assets/images/earth.jpg";

const Home = (props) => {
  let navigate = useNavigate();
  return (
    <div>
      <ResponsiveAppBar />
      <Typography variant="h6" component="div"
      style={{
        marginTop:50,
        paddingTop: 50,
        fontWeight:600,
        fontSize:32,
        textAlign:'center',}}>
        EARTH
      </Typography>
      <Grid container justifyContent="center">
      <Avatar
        variant={"rounded"}
        alt="The Earth"
        src={img}
        style={{
          width: 200,
          height: 200,
          marginTop:20,
        }}
      />
      <br />
      <Typography variant="h6" component="div" align="center">
        Earth apart from being our home, has a lot of cool fun facts you are
        probably not aware of. Not to worry, we are gonna get to know some of
        these facts today. Click the Learn button to start or the Quiz button
        to check how much you already know.
      </Typography>
      <div component="span">
        <Button variant="contained" color="error" onClick={() => navigate("/Quiz")}>
          Quiz
        </Button>
        </div>            
      </Grid> 
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>      
        <Button variant="contained" color="error" onClick={() => navigate('/Learn')}>
          Learn
        </Button>
      </div>
    </div>
  );
};
export default Home;