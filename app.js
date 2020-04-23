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
const startQuiz = 
  `<div class = 'container'>
  <h2 class = 'status'>Start Quiz</h2>
  <form class="innerQuiz all" id = 'quizForm'>
  <button type="submit" form="form1" value="startQuiz">Start</button>
  </form>
  </div>`;

const question = 
  `<div class = 'container'>
  <h2 class = 'status'>Filler</h2>
  <form class="innerQuiz all" id = 'quizForm'>
    <p class="questions">Question</p>
    <input type = 'radio' id = 'answer1' name = 'answer1'class="questions" >
    <label for = 'answer1'class="questions"> Answer1</label><br>
    <input type = 'radio' id = 'answer2' name = 'answer2'class="questions" >
    <label for = 'answer2'class="questions"> Answer2</label><br>
    <input type = 'radio' id = 'answer3' name = 'answer3' class="questions">
    <label for = 'answer3'class="questions"> Answer3</label><br>
    <input type = 'radio' id = 'answer4' name = 'answer4'class="questions" >
    <label for = 'answer4'class="questions"> Answer4</label><br>
  </input>
  <span class="questions last" id = score>x out of y</span><br>
  <button type="submit" form="form1" value="Submit">Submit</button>      </form>
  </div>`

  const endQuiz = 
  `<div class = 'container'>
  <h2 class = 'status'>Complete</h2>
  <form class="innerQuiz all" id = 'quizForm'>
  <button type="submit" form="form1" value="retake">Retake</button>
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
    }
    {
      question: 'In Minnesota it is illegal to tease what type of animal?',
      answers: [
        'Rabbit',
        'Skunk',
        'Bear',
        'Dog'
      ],
      correctAnswer: 'Skunk'
    }
    {
      question: 'The average person does what thirteen times a day?',
      answers: [
        'Picks their nose',
        'Sits down',
        'Crys',
        'Laughs'
      ],
      correctAnswer: 'Laughs'
    }
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
  quizStarted: false,
  questionNumber: 0,
  score: 0
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
function lastPage (){

}

/********** RENDER FUNCTION(S) **********/
function renderMain (str){
  $('main').html(str);
}
// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function btnClick (){

}
function handleBtnClick(){

}
function isAnswerCorrect (){

}
function answerIsWrong(){

}
function answerIsRight(){
  
}

// call back
$(renderMain(startQuiz));