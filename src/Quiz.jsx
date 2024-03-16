import React, { useState } from 'react'

function Quiz() {

const questions=[
    {
        questionText:'What is the capital of France?',
        answerOptions:[
            {answerText:'New York', isCorrect:false},
            {answerText:'London', isCorrect:false},
            {answerText:'Paris', isCorrect:true},
            {answerText:'Dublin', isCorrect:false},
        ],
    },

    {
        questionText:'Who is the CEO of Tesla?',
        answerOptions:[
            {answerText:'Jeff Bezos', isCorrect:false},
            {answerText:'Elon Musk', isCorrect:true},
            {answerText:'Bill Gates', isCorrect:false},
            {answerText:'Tony Stark', isCorrect:false},
        ],
    },

    {
        questionText:'The iphone was created by which company?',
        answerOptions:[
            {answerText:'Apple', isCorrect:true},
            {answerText:'Intel', isCorrect:false},
            {answerText:'Amazon', isCorrect:false},
            {answerText:'Microsoft', isCorrect:false},
        ],
    },

    {
        questionText:'How many Harry Potter Books are there?',
        answerOptions:[
            {answerText:'1', isCorrect:false},
            {answerText:'4', isCorrect:false},
            {answerText:'6', isCorrect:false},
            {answerText:'7', isCorrect:true},
        ],
    },
];
console.log(questions)

let [q,setQ]=useState(0)
let[showScore,setShowScore]=useState(false)
let[score,setScore]=useState(0)
console.log('Score is',score)


let handleAns=(para)=>{
if(para===true) setScore(score+1)

    let next=q+1
    if(next<questions.length){
        setQ(next)
    }else{
        alert('Quiz Over')
        setShowScore(true)
    }
}

  return (
    <div className='ss'>
    {
        showScore ?

    <div className="score">
        <h2>You scored {score} points</h2>
    </div>
    :
        <div className="ques">
        <div className="ques_sec">
            <h3>Q {q+1}){questions[q].questionText}</h3>
        </div>
        <div className="ans_sec">
        {
            questions[q].answerOptions.map((ele,index)=>{
               return <button key={index}
                // onClick={handleAns}-----normal fun
                onClick={()=>handleAns(ele.isCorrect)}//--pass an argument
                >
                {ele.answerText}
               </button>
            })
        }
        </div>
    </div>
    
    
    
    }
    </div>
  )
}

export default Quiz