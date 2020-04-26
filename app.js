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
   <h2 class = 'centerThis status'>Start Quiz</h2>
   <form class="innerQuiz all" id = 'quizForm'>
   <button type="submit"  class='centerThis btnAlign' value="startQuiz">Start Quiz</button>
   </form>
   </div>`;
  }
  function startQuestionPage(){
    return `<div class = 'container'>
    <h2 class = 'centerThis status'>Question: ${quizData.questionNumber} out of 5</h2>
    <form class="innerQuiz all" id = 'quizForm'>
      <h3 class="centerThis question">
      ${quizData.questions[quizData.questionNumber-1].question}
      </h3>
      <input type = 'radio' id = 'answer1' tabOrder= 1 name = 'answer'class="answers lefty" value = '${quizData.questions[quizData.questionNumber-1].answers[0]}' >
      <label for = 'answer1'class="answerLabel">
      ${quizData.questions[quizData.questionNumber-1].answers[0]}
      </label><br>
      <input type = 'radio' id = 'answer2' name = 'answer'class="answers lefty" value = '${quizData.questions[quizData.questionNumber-1].answers[1]}'>
      <label for = 'answer2'class="answerLabel">
      ${quizData.questions[quizData.questionNumber-1].answers[1]}
      </label><br>
      <input type = 'radio' id = 'answer3' name = 'answer' class="answers lefty" value = '${quizData.questions[quizData.questionNumber-1].answers[2]}'>
      <label for = 'answer3'class="answerLabel">
      ${quizData.questions[quizData.questionNumber-1].answers[2]}
      </label><br>
       <input type = 'radio' id = 'answer4' name = 'answer'class="answers lefty" value = '${quizData.questions[quizData.questionNumber-1].answers[3]}'>
      <label for = 'answer4'class="answerLabel">
      ${quizData.questions[quizData.questionNumber-1].answers[3]}</label>
      </input><br><br>
      <button type="submit" class='btnAlign' value="Submit">Submit</button>
      <div class='innerDiv'>
    <h3 class="centerThis score last" id = score>Score ${quizData.score} out of ${quizData.questionNumber - 1}</h3>
    </div>
    </form>
    </div>`
  }
  function startResultsPage (){
    return `<div class = 'container'>
    <h2 class = 'centerThis status'>${resultHeader()}</h2>
    <form class="centerThis innerQuiz all" id = 'quizForm'>
    <span class="centerThis fontIncrease resultsMsg last" id = score>${resultMessage()}</span><br><br>
    ${handleBtnState()}
    </form>
    </div>`;
  }
  function startLastPage (){
    return `<div class = 'container'>
    <h2 class = 'centerThis status'>Complete</h2>
    <form class="centerThis innerQuiz all" id = 'quizForm'>
    <span class="centerThis fontIncrease questions last" id = score>You scored ${quizData.score} out of 5!</span><br><br>
    <button type="submit" class='centerThis btnAlign' value="retake">Retake</button>
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
        
      if (quizData.state === 'quizResult'){
        isAnswerCorrect($(".answers:checked").val());
      }
      changePages(quizData.state,quizData.questionNumber)
      
      event.preventDefault();
   
  });
  }
  
  function isAnswerCorrect (currentAnswer){
    
    if (currentAnswer === quizData.questions[quizData.questionNumber-1].correctAnswer) {
      // console.log('correct');
      quizData.answerCorrect = true;
      quizData.score = quizData.score + 1;
      // console.log('true')
    } else {
      quizData.answerCorrect = false;
      // console.log('false')
    }
  }
  function resultHeader(){
    if (quizData.answerCorrect === false){
      return ('Incorrect')
    } else {
      return ('Correct')
    }
  }
  
  function resultMessage() {
    if (quizData.answerCorrect === false){
      return (`${quizData.questions[quizData.questionNumber-1].correctAnswer} is the correct answer.`);
    } else {
      return (`${quizData.questions[quizData.questionNumber-1].correctAnswer} is the correct answer. Great job!`);
    }
  }
  
  function handleBtnState(){
    if (quizData.answerCorrect === false){
      return ('<button type="submit" class="centerThis btnAlign" value="next" id ="tryAgain">Try Again</button>');
    } else {
      return ('<button type="submit" class="centerThis btnAlign" value="next" id= "nextQuestion">Next question</button>');
    }
       
  }
  
  
  
  function changePages(state, questionNumber) {
     // check state
  //console.log (quizData.state);
  switch(state) {
    case 'quizStart':
      //console.log('start')
      // call renderMain(question)
      renderMain(startQuizPage());
      quizData.state = "quizQuestion";
      quizData.questionNumber = quizData.questionNumber + 1;

     break;
    case 'quizQuestion':
      // console.log('question')
      //call move to result
      renderMain(startQuestionPage());
      quizData.state = "quizResult";
      break;
    case 'quizResult':
      // console.log('result')
    //if question 5
    //call move to end
    // call else move to question
    //isAnswerCorrect();
    renderMain(startResultsPage());
    if (quizData.answerCorrect === true){
      if (quizData.questionNumber === 5){
        //go to the quizEnd
        quizData.state = "quizEnd";
        quizData.questionNumber = 0;
        //go to the next question
      } else {
        quizData.state = "quizQuestion";
        quizData.questionNumber = quizData.questionNumber + 1;
        //renderMain(startQuestionPage());       
    } 
      } else {
        //stay on the same question
        quizData.state = "quizQuestion";
        // renderMain(startQuestionPage());
    }
    //renderMain(startResultsPage());
    break;
    case 'quizEnd':
      // console.log('end')
      //call move to start
      renderMain(startLastPage());
      quizData.state = 'quizStart';
      quizData.questionNumber = 0;
      quizData.score = 0;
      break;
  }
  }
  function startHere(){
    if (quizData.state === "quizStart"){
        // console.log(quizData.state);
        quizData.score = 0;
        changePages(quizData.state,quizData.questionNumber);
        //renderMain(startQuizPage());
       }
  }
  
  // call back
  $(startHere);
  $(btnClick);