import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data'

const Quiz = () => {
    let [index, setIndex] = useState(2)
    let [questions, setQuestions] = useState(data[index])

    const checkAns = (e, ans) => {
        if(questions.ans === ans){
            e.target.classList.add("correct")
        }
        else{
            e.target.classList.add("wrong")
        }
    }
  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>{index +1}. {questions.question} </h2>
        <ul>
            <li onClick={(e) => {checkAns(e, 1)}}>{questions.option1}</li>
            <li onClick={(e) => {checkAns(e, 2)}}>{questions.option2}</li>
            <li onClick={(e) => {checkAns(e, 3)}}>{questions.option3}</li>
            <li onClick={(e) => {checkAns(e, 4)}}>{questions.option4}</li>
        </ul>
        <button >Next</button>
        <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz