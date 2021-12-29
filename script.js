function computerPlay()
{
    let lis = ["rock","paper","scissors"];
    let randcolor =  lis[Math.floor(Math.random() * lis.length)];
    return randcolor;
}
computerSelection = computerPlay();
let playerSelection = window.prompt("Enter: rock or paper or scissors");//User is aksed to give rock or paper or scissors
//limitation could be what user enters, a selexted list of permitted codewords can be included
playerSelection.toLocaleLowerCase();//

let count; // to keep track of the number of user wins

function playRound(c ,p)  // Main function that compares user's choice and computer. ie THE GAME
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
    else{
        console.log("You have entered an invalid option")
    }  
        
     
} 

let m = computerSelection;
let n = playerSelection;


for (let i = 0; i < 5; i++) { //loops  times to indicate that there are  rounds, coudl give user more granularity on the number of games to be played
    playRound(m,n);
  } 
console.log("The consolidated no of wins:"+ ${count});//not sure of correct, let's see