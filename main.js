const myBtn = document.getElementById('myBtn');
const resetBtn = document.getElementById('resetBtn');
const userNameFeed = document.getElementById('userNameFeed');
const userQuizFeed = document.getElementById('userQuizFeed');
const magicBallFeed = document.getElementById('magicBallFeed');


myBtn.addEventListener('click', () => {
    const userName = document.getElementById('userName').value;
    const userQuiz = document.getElementById('userQuiz').value;

    userName == "" ? userNameFeed.innerHTML= `Hello! 👋` : userNameFeed.innerHTML= `Hello ${userName} 🙋‍♂️!`;
    
    userQuiz == "" ? userQuizFeed.innerHTML = "Didn\'t get the question 🤷‍♂️" : userQuizFeed.innerHTML = `${userName} has asked - ${userQuiz} 🤔?`;

    randomNumber = Math.floor(Math.random() * 8);

    let eightBall = '';


    if(userName == "" && userQuiz == "" || userQuiz == "") {
        eightBall = '???';
    } else {

    switch (randomNumber) {
        case 0:
        eightBall = 'It is certain';
        break;
        case 1:
        eightBall = 'It is decidedly so';
        break;
        case 2:
        eightBall = 'Reply hazy try again';
        break;
        case 3:
        eightBall = 'Cannot predict now';
        break;
        case 4:
        eightBall = 'Do not count now';
        break;
        case 5:
        eightBall = 'My sources say no 🙅‍♂️';
        break;
        case 6:
        eightBall = 'Outlook not so good';
        break;
        case 7:
        eightBall = 'Signs point to yes';
        break;
        default:
        eightBall = '???'
    };
    }
    magicBallFeed.innerHTML = `The magic ball says ${eightBall}.`;
});