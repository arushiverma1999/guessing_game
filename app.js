//Game values
let min=0;
let max=10;
let winning_num=random_number();
let guesses_left=5;

//UI elements
const game_input=document.getElementById('game');
const min_value=document.querySelector('.min-num');
const max_value=document.querySelector('.max-num');
const guess_input=document.getElementById('guess-input');
const guess_btn=document.getElementById('guess-btn');
const msg=document.querySelector('.message');

//UI display
min_value.textContent=min;
max_value.textContent= max;

//play again event listener
game_input.addEventListener('mousedown',function(e)
{
    if(e.target.className==='play-again')
    {
        window.location.reload();
    }
})
//event listener
guess_btn.addEventListener('click',event_fn);

function event_fn()
{
   let parse_in_val = parseInt(guess_input.value);

   //validate the input
    if(parse_in_val<min||parse_in_val>max||isNaN(parse_in_val))
        {
            set_message(`The number should be in range of ${min} and ${max}`,'red','red');
            guess_input.value="";
            
        }
    //check for winning case
    else{
    if(parse_in_val===winning_num)
    {
        
        msg.innerHTML='<h4 style="color:green" > you won!!</h4>';
        guess_input.style.borderColor="green";
        guess_input.disabled=true;
        guess_btn.value="Play Again?";
        guess_btn.className +=('play-again');
        document.body.style.backgroundImage="url('wins.jpg')";
       

    }
    //checking for loosing case
    if(parse_in_val!==winning_num)

    {
        guesses_left=guesses_left-1;
        guess_input.value='';
        set_message(`OOPS! Thats not the number, try again! , The number of guesses left are ${guesses_left}`,'blue','blue');
        
        if(guesses_left===0)
        {
            guess_input.disabled=true;
            set_message(`your games is over ,The correct number was ${winning_num}`,'purple','purple');
            guess_btn.value="Play Again?";
            guess_btn.className +=('play-again');
        }
    }

}
};
//display error message
function set_message(message,text_color,border_color)
{
        
       msg.textContent=message;
       msg.style.color=text_color;
       guess_input.style.borderColor=border_color;
      
       
       
       

}
//function random number
function random_number()
{
   return (Math.floor(Math.random()*(max-min+1)+min));
}

