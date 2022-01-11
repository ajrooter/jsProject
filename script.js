function computerPlay()
{
    let lis = ["rock","paper","scissors"];
    let randcolor =  lis[Math.floor(Math.random() * lis.length)];
    return randcolor;
}
computerSelection = computerPlay();
//let playerSelection = window.prompt("Enter: rock or paper or scissors");//User is aksed to give rock or paper or scissors
//limitation could be what user enters, a selexted list of permitted codewords can be included
//playerSelection.toLocaleLowerCase();//

let count; // to keep track of the number of user wins

function playRound(c ,p)  // Main function that compares user's choice and computer. ie THE GAME
{

        c = computerPlay();
    if(c == "rock" && p == "paper")
        {
            console.log('You win, '+ p+ ' beats '+ c );
            count+=1;
        }
    else if( c =="rock" && p=="scissors")
        {
            console.log('You lose, '+ c + ' beats '+p );
        }
    else if( c == p)
        {
            console.log("It's a draw");
        }
    else if( c =="paper" && p=="scissors")
        {
            console.log('You win, '+ p + ' beats '+c );
            count+=1;
        }   
    else if( c =="paper" && p=="rock")
        {
            console.log('You lose, '+ c + ' beats '+p );
        }  
    else if( c =="scissors" && p=="paper")
        {
            console.log('You lose, '+ c + ' beats '+p );
        }   
    else if( c =="scissors" && p=="rock")
        {
            console.log('You win, '+ p + ' beats '+c );
            count+=1;
        } 
    else{
        console.log("You have entered an invalid option")
    }  
        
    //console.log("The consolidated no of wins:"+ `${count}`);//not sure of correct, let's see
} 

let m = computerSelection;
//let n = playerSelection;


//for (let i = 0; i < 5; i++) { //loops  times to indicate that there are  rounds, coudl give user more granularity on the number of games to be played
   // playRound(m,n);
 // } 


function rockpaperscissor(n)
{
    
        playRound(m,n);
        
       
}

const div1 = document.createElement('div')
const score = document.createTextNode('Your score is: '+ `${count}`)
div1.appendChild(score)
const men = document.querySelector('.f5')
men.appendChild(div1)



//The embedding it to the html aspect of web design.

const rock = document.querySelector('.rock');
rock.addEventListener('click', () =>rockpaperscissor('rock'));

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => rockpaperscissor('paper'));

const scissors = document.querySelector('.scissor');
scissors.addEventListener('click', () => rockpaperscissor('scissors'));






