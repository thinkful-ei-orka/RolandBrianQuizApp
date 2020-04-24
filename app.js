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
  questionNumber: 0,
  score: 0,
  answerCorrect: false,
  state: 'quizStart'
  
  
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
function startQuizPage (){
 return `<div class = 'container'>
 <h2 class = 'status'>Start Quiz</h2>
 <form class="innerQuiz all" id = 'quizForm'>
 <button type="submit"  value="startQuiz">Start Quiz</button>
 </form>
 </div>`;
}
function startQuestionPage(){
  return `<div class = 'container'>
  <h2 class = 'status'>Question: ${quizData.questionNumber} out of 5</h2>
  <form class="innerQuiz all" id = 'quizForm'>
    <h3 class="question">
    ${quizData.questions[quizData.questionNumber-1].question}
    </h3>
    <input type = 'radio' id = 'answer1' name = 'answer'class="answers" val = ${quizData.questions[quizData.questionNumber-1].answers[0]} >
    <label for = 'answer1'class="answerLabel">
    ${quizData.questions[quizData.questionNumber-1].answers[0]}
    </label><br>
    <input type = 'radio' id = 'answer2' name = 'answer'class="answers" val = ${quizData.questions[quizData.questionNumber-1].answers[1]}>
    <label for = 'answer2'class="answerLabel">
    ${quizData.questions[quizData.questionNumber-1].answers[1]}
    </label><br>
    <input type = 'radio' id = 'answer3' name = 'answer' class="answers" val = ${quizData.questions[quizData.questionNumber-1].answers[2]}>
    <label for = 'answer3'class="answerLabel">
    ${quizData.questions[quizData.questionNumber-1].answers[2]}
    </label><br>
     <input type = 'radio' id = 'answer4' name = 'answer'class="answers" val = ${quizData.questions[quizData.questionNumber-1].answers[3]}>
    <label for = 'answer4'class="answerLabel">
    ${quizData.questions[quizData.questionNumber-1].answers[3]}</label><br>
    </input><br>
  <h3 class="questions last" id = score>Score ${quizData.score} out of ${quizData.questionNumber}</h3><br><br>
  <button type="submit" value="Submit">Submit</button>      </form>
  </div>`
}
function startResultsPage (){
  return `<div class = 'container'>
  <h2 class = 'status'>Correct/Incorrect</h2>
  <form class="innerQuiz all" id = 'quizForm'>
  <span class="questions last" id = score>__ is the correct answer. Great Job!</span><br><br>
  <button type="submit" value="next">Next question</button>
  </form>
  </div>`;
}
function startLastPage (){
  return `<div class = 'container'>
  <h2 class = 'status'>Complete</h2>
  <form class="innerQuiz all" id = 'quizForm'>
  <span class="questions last" id = score>x out of y</span><br><br>
  <button type="submit" value="retake">Retake</button>
  </form>
  </div>`;
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
    //handleBtnClick();
    // change pages
    changePages(quizData.state,quizData.questionNumber,quizData.answerCorrect)
    console.log($("input[name='answer']:checked").val());
    event.preventDefault();
  // console.log($(event.currentTarget;
});
}

function changePages(state, questionNumber,IsCorrect) {
  // check state
  //console.log (quizData.state);
  switch(state) {
    case 'quizStart':
      // call renderMain(question)
      renderMain(startQuizPage());
      quizData.state = "quizQuestion";
      quizData.questionNumber = quizData.questionNumber + 1;
     break;
    case 'quizQuestion':
      //call move to result
      renderMain(startQuestionPage());
      quizData.state = "quizResult";
      break;
    case 'quizResult':
    //if question 5
    //call move to end
    // call else move to question
    renderMain(startResultsPage());
    break;
    case 'quizEnd':
      //call move to start
      break;
  }

  // check question number

  // change page

    // is question 5
      //is also results

}
function readRadioButtons(){
  //console.log('radioClick');
  console.log($( "answer" ).on( "click", function() {
    $( ".answers" ).html( $( "input:checked" ).val() + " is checked!" );
  }));
}
function isAnswerCorrect (){

}
function answerIsWrong(){
  
}
function answerIsRight(){
  
}

// call back
$(changePages(quizData.state,quizData.questionNumber,quizData.answerCorrect));
$(btnClick);
$(readRadioButtons);
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
