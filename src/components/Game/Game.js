import React, { useState } from "react";
import { decode } from "html-entities";
import Confetti from "react-confetti";
import "./Game.css";
import { APIresponse } from "../SelectField/CheckQuiz";
import { useNavigate } from 'react-router-dom';

let generated = false;
let questions = [];

function refreshPage() {
  window.location.reload(false);
}

export default function Game() {
  // Use State Properties
  const [showFinalResult, setFinalResults] = useState(false);
  const [currQ, setCurrQ] = useState(0);
  const [currScore, setScore] = useState(0);
  const [gameStarted, setGameStart] = useState(false);
  const [buttonResponse, setButtonResponse] = useState(false);
  const [freeResponse, setFreeResponse] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonAnswerSelected, revealButtonAnswers] = useState(false);
  const [freeAnswerSelected, revealFreeAnswers] = useState(false);
  const [quizReady, setQuizReady] = useState(false)
  const [tempVar, setTempVar] = useState(true)


  const navigate = useNavigate();
  if (APIresponse == undefined){
    (navigate("/checkquiz"));
  }
  console.log("API RESPONSE WITHIN GAME", APIresponse);



  // Array Shuffler
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Map Question and Answers to Array Element
  const forEachInJSON = (result, resultArr) => {
    var thisCorrect = result.correct_answer;
    var correctArray = [{ answerText: decode(thisCorrect), isCorrect: true }];
    var outAnswer = correctArray.concat(
      result.incorrect_answers.map((result2) => ({
        answerText: decode(result2),
        isCorrect: false,
      }))
    );
    outAnswer = shuffleArray(outAnswer);
    var tempResult = resultArr;
    resultArr = tempResult.concat({
      questionText: decode(result.question),
      answerOptions: outAnswer,
    });
    return resultArr;
    
  };

  // JSON Mapping Function to setup array like questions from JSON input.
  const jsonMap = (jsonFile) => {
    var returnArray = [];
    const jsonList = jsonFile.results.map((result) => result);
    jsonList.forEach(
      (result) => (returnArray = forEachInJSON(result, returnArray))
    );
    setQuizReady(true);
    return returnArray;
  };

  // Map JSON data to questions 2 array
  if(APIresponse!= undefined){
    if (!generated) {
      questions = jsonMap(APIresponse);
      generated = true;
    }
  }



  // Helper Functions
  const choiceSelected = (isCorrect) => {
    revealButtonAnswers(true); // Display the correct answer

    // Move on to the next question after 650ms.
    setTimeout(() => {
      revealButtonAnswers(false);
      if (isCorrect) {
        setScore(currScore + 1);
      }
      if (currQ + 1 < questions.length) {
        setCurrQ(currQ + 1);
      } else {
        setFinalResults(true);
      }
    }, 500);
    
  };

  const startGame = () => {
    setGameStart(true);
  };
  
  const checkGame = () => {
    if(APIresponse!= undefined){
      setQuizReady(true);
    }
    else{
      navigate("/checkquiz");
    }
  };



  return (
    <div className="game-section">
      <div className="question-entry">
        {showFinalResult ? (
          <div className="result-section">
            {" "}
            {/* Displaying the final results page */}
            <div>
              <h1> Congratulations, you scored: </h1>
              <h2>
                {" "}
                {currScore} out of {questions.length} -{" "}
                {(currScore / questions.length) * 100}%{" "}
              </h2>
            </div>
            <button onClick={() => refreshPage()} className="restart-button">
              {" "}
              Restart Game{" "}
            </button>
            <br />
            <button
              onClick={() => (window.location.href = "/")}
              className="start-button"
            >
              {" "}
              Back to Quiz Selection{" "}
            </button>
            <Confetti width={3200} height={1200} />
          </div>
        ) : isLoading ? (
          <div>
            {/* Call API */}
            {/* figure out loading wheel */}
            <h1>Game is Loading</h1>
          </div>
        ) : gameStarted ? (
          buttonAnswerSelected ? (
            <div>
              {" "}
              {/* Display if a choice was selected */}
              <div className="question-block">
                <h3> {questions[currQ].questionText} </h3>
              </div>
              <br />
              {questions[currQ].answerOptions.map((choice) => (
                <div key={choice.id}>
                  <button
                    className={choice.isCorrect ? "jump-out" : "option"}
                    style={{
                      backgroundColor: choice.isCorrect ? "green" : "red",
                    }}
                  >
                    {choice.answerText}
                  </button>
                  <br />
                </div>
              ))}
            </div>
          ) : freeAnswerSelected ? (
            <div></div>
          ) : freeResponse ? (
            <div>
              {" "}
              {/* Display if free response, answer not submitted */}
              <div className="question-block">
                <h3> {questions[currQ].questionText} </h3>
              </div>
              <br />
              {questions[currQ].answerOptions.map((answer) =>
                answer.isCorrect ? (
                  <div className="option"> {answer.answerText} </div>
                ) : null
              )}
            </div>
          ) : (
            <div>
              {" "}
              {/* Display if a choice was not selected */}
              <div className="question-block">
                <h3> {questions[currQ].questionText} </h3>
              </div>
              <br />
              {questions[currQ].answerOptions.map((choice) => (
                <div key={choice.id}>
                  <button
                    onClick={() => choiceSelected(choice.isCorrect)}
                    className="option"
                  >
                    {choice.answerText}
                  </button>
                  <br />
                </div>
              ))}
            </div>
          )
        ) : quizReady ?(
          <div>
            <div className="question-block">
              <h1> Welcome to the BORGS Trivia Quiz! </h1>
            </div>
            <br />
            <button onClick={() => startGame()} className="start-button">
              {" "}
              Start{" "}
            </button>
          </div>
        ): tempVar? (
          <div>
            <script>{checkGame()}</script>
            <div className="question-block">
              <h1> Press button to generate a random quiz or click "Home" to specify settings </h1>
            </div>
            <div>
            <button onClick={() => checkGame()} className="start-button">
              {" "}
              Generate Random Quiz{" "}
            </button>
          </div>
            
          </div>
        ) : (
          <div>
          </div>
        )}
      </div>
    </div>
  );
}
