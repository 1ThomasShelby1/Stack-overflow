import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux";
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

const location = useLocation()
const user = 1;
const navigate = useNavigate()

const questionsList = useSelector(state => state.questionsReducer)
// console.log(questionList);


//   var questionList = [
//     {
//     _id: 1,
//     upvotes:3,
//     downVotes:2,
//     noOfAnswer: 2,
//     questionTitle:"What is a function?",
//     questionBody:"It meant to be",
//     questionTags:["java","node js","react js","mongodb","express js"],
//     userPosted:"mano",
//     userId: 1,
//     askedOn:"jan 1",
//     answer: [{
//       answerbody: "Answer",
//       userAnswered: "kumar",
//       answerOn: "jan 2",
//       userId : 2,
//     }]
//   },
//     {
//     _id: 2,
//     upvotes:3,
//     downVotes:2,
//     noOfAnswer: 0,
//     questionTitle:"What is a function?",
//     questionBody:"It meant to be",
//     questionTags:["java","node js","react js","mongodb","express js"],
//     userPosted:"mano",
//     userId: 1,
//     askedOn:"jan 1",
//     answer: [{
//       answerbody: "Answer",
//       userAnswered: "kumar",
//       answerOn: "jan 2",
//       userId : 2,
//     }]
//   },
//     {
//     _id: 3,
//     upvotes:3,
//     downVotes:2,
//     noOfAnswer: 0,
//     questionTitle:"What is a function?",
//     questionBody:"It meant to be",
//     questionTags:["java","node js","react js","mongodb","express js"],
//     userPosted:"mano",
//     userId: 1,
//     askedOn:"jan 1",
//     answer: [{
//       answerbody: "Answer",
//       userAnswered: "kumar",
//       answerOn: "jan 2",
//       userId : 2,
//     }]
//   }
// ]

const checkAuth = () => {
  if(user === null) {
    alert("login or signup to ask a question") 
    navigate('/Auth')
  }else{
    navigate('/AskQuestion')
  }
}
const checkAuths = () => {
  if(user === null) {
    alert("login or signup to ask a question") 
    navigate('/Auth')
  }else{
    navigate('/ChatBotQuestions')
  }
}


  return (
    <div className='main-bar'>
        <div className='main-bar-header'>
          {
            location.pathname === '/' ? <h1>Top Question</h1> : <h1>All Question</h1>
          }
          { <button onClick={checkAuth} className='ask-btn'>Ask Questions</button>}
          {/* { <button onClick={checkAuths} className='ask-btn-1'>Ask Questions to chatbot</button>} */}
        </div>
        <div>
          {
            questionsList.data === null ?
            <h1>Loading...</h1> : 
            <>
               <p>{questionsList.data.length} questions</p>
               <QuestionList questionsList= {questionsList.data} />
            </>
          }
        </div>
    </div>
    
  )
}

export default HomeMainbar