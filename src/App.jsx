import React, {useState, useEffect } from 'react';
import Questionaire from './components/Questionaire';
import './App.css';

const questionApi = "https://opentdb.com/api.php?amount=40&category=9&difficulty=medium&type=multiple";

const App = () =>{
    const [questions, setQuestion] = useState([])

    useEffect(() => {
        fetch(questionApi)
        .then((res) => res.json())
        .then((data) => {
            setQuestion(data.results);
        });
    }, []);

    const handleAnswer = (answer) => {

    }
    return (
        questions.length > 0 ? (
            <div className ='container'>
              <Questionaire data={questions[0]}
                  handleAnswer={handleAnswer}
              />
            </div>
        ) :
        <h2 className="text-2xl text-white font-bold">
            (Loading question)
        </h2>
    );
}

export default App;
