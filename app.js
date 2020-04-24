/**
 * Click start button to start the quiz
 * Not be able to skip questions
 * Answer a series of 5 or more mutiple choice questions
 * See which question they are on
 * See their current score
 * Receive feeback and if incorrect see the correct answer
 * Move to the next question by clicking a button
 * See overall score at the end the quiz
 * Be able to start a new quiz
 */

 /**
  * Render answer choices in a <form>
  * Use semantic HTML along with CSS and jQuery
  * Be as accessinlt as you can make it
  * Use responsive design
  * Be fully usable by keyboard
  */
const startPage = 
  `<div class = 'container'>
  <h2 class = 'status'>Start Quiz</h2>
  <form class="innerQuiz all" id = 'quizForm'>
  <button type="submit"  value="startQuiz">Start Quiz</button>
  </form>
  </div>`;

const questionPage = 
  `<div class = 'container'>
  <h2 class = 'status'>Filler</h2>
  <form class="innerQuiz all" id = 'quizForm'>
    <p class="question">
    ${quizData.questions[quizData.questionNumber-1].question}
    </p>
    <input type = 'radio' id = 'answer1' name = 'answer1'class="questions" >
    <label for = 'answer1'class="questions">
    ${quizData.questions[quizData.questionNumber-1].answers[0]}
    </label><br>
    <input type = 'radio' id = 'answer2' name = 'answer2'class="questions" >
    <label for = 'answer2'class="questions">
    ${quizData.questions[quizData.questionNumber-1].answers[1]}
    </label><br>
    <input type = 'radio' id = 'answer3' name = 'answer3' class="questions">
    <label for = 'answer3'class="questions">
    ${quizData.questions[quizData.questionNumber-1].answers[2]}
    </label><br>
     <input type = 'radio' id = 'answer4' name = 'answer4'class="questions" >
    <label for = 'answer4'class="questions">
    ${quizData.questions[quizData.questionNumber-1].answers[3]}</label><br>
    </input><br>
  <span class="questions last" id = score>x out of y</span><br><br>
  <button type="submit" value="Submit">Submit</button>      </form>
  </div>`

  const resultPage = 
  `<div class = 'container'>
  <h2 class = 'status'>Correct/Incorrect</h2>
  <form class="innerQuiz all" id = 'quizForm'>
  <span class="questions last" id = score>__ is the correct answer. Great Job!</span><br><br>
  <button type="submit" value="next">Next question</button>
  </form>
  </div>`;

  const endPage = 
  `<div class = 'container'>
  <h2 class = 'status'>Complete</h2>
  <form class="innerQuiz all" id = 'quizForm'>
  <span class="questions last" id = score>x out of y</span><br><br>
  <button type="submit" value="retake">Retake</button>
  </form>
  </div>`;
/**
 * Example store structure
 */
const quizData = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Its illegal in Georgia to do what with a fork?',
      answers: [
        'Eat hamburgers',
        'Run',
        'Eat fried chicken',
        'Sky dive'
      ],
      correctAnswer: 'Eat fried chicken'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2020'
      ],
      correctAnswer: '2020'
    },
    {
      question: 'In Minnesota it is illegal to tease what type of animal?',
      answers: [
        'Rabbit',
        'Skunk',
        'Bear',
        'Dog'
      ],
      correctAnswer: 'Skunk'
    },
    {
      question: 'The average person does what thirteen times a day?',
      answers: [
        'Picks their nose',
        'Sits down',
        'Crys',
        'Laughs'
      ],
      correctAnswer: 'Laughs'
    },
    {
      question: 'On Sunday in Florida it is illegal for a single woman to do what?',
      answers: [
        'Sky dive',
        'Eat out',
        'Drink alcohol',
        'Dance'
      ],
      correctAnswer: 'Sky dive'
    }
  ],
  questionNumber: 1,
  score: 0,
  answerCorrect: false,
  state: 'startPage'
  
  
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function firstPage (){

}
function questionPage(questionNumber){
  
}
function resultsPage (){
  
}
function lastPage (){
  
}

/********** RENDER FUNCTION(S) **********/
function renderMain (str){
  //console.log('working?');
  $('main').html(str);
}
// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function btnClick (){
  
  $('main').on('submit', '#quizForm', () => {
    //
    handleBtnClick();
    
    // console.log('btnClick');
    event.preventDefault();
  // console.log($(event.currentTarget;
});
}

function changePages(state, questionNumber) {
  // check state
  switch(state) {
    case 'start':
      renderMain(question)
    case 'question':
      //move to result
    case 'result':
    //if question 5
    //move to end
    // else move to question
    case 'end':
      //move to start
  }
  // check question number

  // change page

    // is question 5
      //is also results

}
function readRadioButtons(){
  
}
function handleBtnClick(){
  // get state 
  // get questionNumber
  // call changePages 
}
function isAnswerCorrect (){

}
function answerIsWrong(){
  
}
function answerIsRight(){
  
}

// call back
$(renderMain(questionPage));
$(btnClick);
//'question' 'result' 'end'

//first page
//questionNumber to 1
//state moves to question


//results page
  //change state to result
  // check if answer is correct 
    // up score if correct
    // 
//select state question page
  // load q page with q number
  // if correct change score and reset answer correct to false
  // if state is result and questiinNumber<5 
      //state changes back to question
      //q = q++
      //else endpage