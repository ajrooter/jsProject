function computerPlay()
{
    let lis = ["rock","paper","scissors"];
    let randcolor =  lis[Math.floor(Math.random() * lis.length)];
    return randcolor;
}
computerSelection = computerPlay();
let playerSelection = 'rock';//window.prompt("Enter: rock or paper or scissors");//
playerSelection.toLocaleLowerCase();

let count;

function playRound(c ,p)
{
    if(c == "rock" && p == "paper")
        {
            console.log('You win, '+ p+ ' beats '+ c );
            count+=1;
        }
    else if( c =="rock" && p=="sciccors")
        {
            console.log('You lose, '+ c + ' beats '+p );
        }
    else if( c == p)
        {
            console.log("It's a draw");
        }
    else if( c =="paper" && p=="sciccors")
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
        
     
} 

let m = computerSelection;
let n = playerSelection;


for (let i = 0; i < 5; i++) {
    playRound(m,n);
  } 
console.log("The consolidated no of wins:"+ ${count});