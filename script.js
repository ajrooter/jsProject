function computerPlay()
{
    let lis = ["rock","paper","scissors"];
    let randcolor =  lis[Math.floor(Math.random() * lis.length)];
    return randcolor;
}
computerSelection = computerPlay()



//to keep track of player score, computer score and the total number of rounds.
let cscore =0;
let pscore =0;
let round = 0;
//to keep track of player and computer wins
let pwin = 0;
let cwin = 0;




function playRound(c ,p)  // Main function that compares user's choice and computer. ie THE GAME
{
        c = computerPlay();
    if(c == "rock" && p == "paper")
        {
           
            round+=1;
            if(round>5)
            {
                diplayresult();
            }
            let perf = document.querySelector(".result")
            perf.textContent= 'You win, '+ p+ ' beats '+ c ;
            pscore+=1;
            let serf = document.querySelector(".score")
            serf.textContent = "Player Score: " + pscore + " Computer score: "+ cscore;
            
        }
    else if( c =="rock" && p=="scissors")
        {
            round+=1;
            if(round>5)
            {
                diplayresult();
            }
            let perf = document.querySelector(".result")
            perf.textContent= ('You lose, '+ c + ' beats '+p );
            cscore+=1;
            let serf = document.querySelector(".score")
            serf.textContent = "Player Score: " + pscore + " Computer score: "+ cscore;
           
        }
    else if( c == p)
        {
            round+=1;
            if(round>5)
            {
                diplayresult();
            }
            let perf = document.querySelector(".result")
            perf.textContent= ("It's a draw");
            let serf = document.querySelector(".score")
            serf.textContent = "Player Score: " + pscore + " Computer score: "+ cscore;
            
        }
    else if( c =="paper" && p=="scissors")
        {
            round+=1;
            if(round>5)
            {
                diplayresult();
            }
            let perf = document.querySelector(".result")
            perf.textContent= ('You win, '+ p + ' beats '+c );
            pscore+=1;
            let serf = document.querySelector(".score")
            serf.textContent = "Player Score: " + pscore + " Computer score: "+ cscore;
            
            
        }   
    else if( c =="paper" && p=="rock")
        {
            round+=1;
            if(round>5)
            {
                diplayresult();
            }
            let perf = document.querySelector(".result")
            perf.textContent= ('You lose, '+ c + ' beats '+p );
            cscore+=1;
            let serf = document.querySelector(".score")
            serf.textContent = "Player Score: " + pscore + " Computer score: "+ cscore;
            
        }  
    else if( c =="scissors" && p=="paper")
        {
            round+=1;
            if(round>5)
            {
                diplayresult();
            }
            let perf = document.querySelector(".result")
            perf.textContent= ('You lose, '+ c + ' beats '+p );
            cscore+=1;
            let serf = document.querySelector(".score")
            serf.textContent = "Player Score: " + pscore + " Computer score: "+ cscore;
           
            
        }   
    else if( c =="scissors" && p=="rock")
        {
            round+=1;
            if(round>5)
            {
                diplayresult();
            }
            let perf = document.querySelector(".result")
            perf.textContent= ('You win, '+ p + ' beats '+c );
            pscore+=1;
            let serf = document.querySelector(".score")
            serf.textContent = "Player Score: " + pscore + " Computer score: "+ cscore;
            
           
        } 
    else{
        perf.textContent= ("You have entered an invalid option")
    }  
        
    
} 


function diplayresult()
{
    if(pscore>cscore)
        pwin+=1;
    else if(pscore<cscore)
        cwin+=1;
    else
        {pwin=0;cwin=0}

    let end = document.querySelector(".end")
    if(pwin>cwin)
        {end.textContent = "You have played 5 rounds. The winner is Player";
        
    }
    else
       { end.textContent="You have played 5 rounds. The winner is computer"
    }
}

let m = computerSelection;




let x;

function rockpaperscissor(n)
{
    
        x=  playRound(m,n);
        
       
}




//The embedding it to the html aspect of web design.

const rock = document.querySelector('.rock');
rock.addEventListener('click', () =>rockpaperscissor('rock'));

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => rockpaperscissor('paper'));

const scissors = document.querySelector('.scissor');
scissors.addEventListener('click', () => rockpaperscissor('scissors'));

//const score = document.querySelector('.score');
//score.addEventListener('click', () => showscore(x));






