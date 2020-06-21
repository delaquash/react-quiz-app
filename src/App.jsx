import React, {useState, useEffect } from 'react';
import Questionaire from './components/Questionaire';
import './App.css';

const questionApi = "https://opentdb.com/api.php?amount=40&category=9&difficulty=medium&type=multiple";

const App = () =>{
    const [questions, setQuestion] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [ score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);


    useEffect(() => {
        fetch(questionApi)
        .then((res) => res.json())
        .then((data) => {
            setQuestion(data.results);
        });
    }, []);

    const handleAnswer = (answer) => {
        const newIndex  = currentIndex + 1;
        setCurrentIndex(newIndex);
            // prevent double answers
            // Increase the score
            if(!showAnswer) {
                    if(answer === questions[currentIndex].correct_answer) {
                        setScore(score + 1);
                    }
                }
    };
      setShowAnswer(true)

    return  (
        questions.length > 0 ? (
            <div className ='container'>
                {currentIndex >= questions.length ? (
                    <h1 className="text-3xl text-red font-bold"> Your score is {score} </h1>)  :
                        <Questionaire
                        data={questions[currentIndex]}
                            handleAnswer={handleAnswer}
                            showAnswer={showAnswer}
                        />
                }
            </div>
        ) :
        <h2 className="text-2xl text-white font-bold">
            (Loading question)
        </h2>
    );

}

export default App;
