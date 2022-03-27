import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useState } from 'react';
import Home from "./Home";
import Quest from "../sources/quiz.json";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { makeStyles } from '@material-ui/core/styles';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState(false);
  const [clickedAnswer, setClickedAnswer] = useState(false);

  const checkAnswer = (answer) => {
    setChosenAnswer(answer);
    setClickedAnswer(true);
  };

  const checkCorrectAnswer = () => {
    if (chosenAnswer === Quest[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };
  const finished = () => {
    if (currentQuestion == Quest.length - 1) {
      setEnd(true);
    }
  };
  const reset = () => {
    // setShow(false);
    setClickedAnswer(false);
  };

  const startOver = () => {
    setCurrentQuestion(0);
    setEnd(false);
    setChosenAnswer("");
    setScore(0);
  };

  let navigate = useNavigate();

  const useStyles = makeStyles({
    root: {
      fontSize:30,
      fontFamily: 'Source Sans Pro',
      fontWeight:'bold',
      color: 'black',
      textAlign:'center',
    },
    quizCard:{
      margin:'auto',
      padding: 10,
     marginTop:15,
     color:'grey',
      textAlign:'center',
    },
    buttonPrev:{
      float:'left',
      backgroundColor:'#fc4c4e',
    },
    buttonNext:{
      float:'right',
      
    },
    totalAnswered:{
      color:'red',
      textAlign:'center',
      paddingBottom:10,
    },
    
  });

  const classes = useStyles();

  if (end) {
    const bull = (
      <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
      >
        
      </Box>
    );

    {
      return (
        <Card sx={{ height: 335 }} key={Quest[currentQuestion].id} className={classes.quizCard}>
          <CardContent>
            <Typography variant="h5" component="div">
              {`Good Work! Your Final Score is
${score}/${Quest.length}`}
            </Typography>
            <div style={{padding:20,}}>
            <Button
              variant="contained"
              color="error"
              className={classes.buttonNext}
              onClick={() => startOver()}
            >
              Start over
            </Button>
            <Button 
            variant="contained"
            color="error"
            className={classes.buttonPrev}
             onClick={() => navigate("/")}
>
          Go Home
        </Button>
        </div>
          </CardContent>
        </Card>
      );
    }
  } else
    return (
      <Grid container justifyContent="center">
        <ResponsiveAppBar />
        
        {/* {Quest && Quest.map(data=>{ */}

        <div>
        {/* <p className={classes.root}> Quiz Section</p> */}
      
          <Card
          className={classes.quizCard}
          >
            <CardContent>
              <Typography
                variant="body1"
                gutterBottom
                component="div"
                textAlign="center"
              >
                <span className={classes.totalAnswered}>
                {`${currentQuestion}/${Quest.length}`}
                  </span>
                <br />
                
                {Quest[currentQuestion].question}
              </Typography>
            </CardContent>
            <Box>
              {Quest[currentQuestion].answers.map((answer) => (
                <FormControl sx={{ m: 3 }} variant="standard" className={classes.ansOptions}>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    key={answer.id}
                  ></FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-error-radios"
                    name="quiz"
                    value={chosenAnswer}
                    onClick={() => checkAnswer(answer)}
                  >
                    <FormControlLabel
                      value={answer}
                      name="answer"
                      control={<Radio />}
                      label={answer}
                    />
                  </RadioGroup>
                </FormControl>
              ))}
              <div>
              {currentQuestion >= Quest.length -9 && (
                    <Button
                      variant="contained"
                      color="error"
                      className={classes.buttonPrev}
                      onClick={() => {
                        setCurrentQuestion(currentQuestion - 1);
                        checkCorrectAnswer();}}
                    >
                      Previous
                    </Button>
                    
                  )}
              {currentQuestion < Quest.length - 1 && (
                
                  <Button
                    variant="contained"
                    color="error"
                    display="block"
                    className={classes.buttonNext}
                    onClick={() => {
                      setCurrentQuestion(currentQuestion + 1);
                      checkCorrectAnswer();
                      reset();}}
                  >
                    Next
                  </Button>
                 )}
              {currentQuestion === Quest.length - 1 && (
                <Button
                  variant="contained"
                  color="error"
                  display="block"
                  className={classes.buttonNext}
                  onClick={() => finished()}
                >
                  FINISH
                </Button>
              )}
                  
                </div>
              

              
            </Box>
          </Card>
        </div>
      </Grid>
    );
};

export default Quiz;
