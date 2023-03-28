const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Enable/Disable Button
function toggleButton(){
  button.disabled = !button.disabled; //if its true its false und andersrum
}

//Passing Joke to VoicesRSS API
function TellMeJoke(joke){
  VoiceRSS.speech({
    key: '6b77c4e8c1b44cd09bb71dbdb532a2b4',
    src: joke,
    hl: 'en-us',
    v: 'Linda',
    r: 0, 
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
  });
}

// Get Jokes from Joke API
async function getJoke(){
  const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart');
  try{
    const data = await response.json();
    let joke = `${data.setup} ... ${data.delivery}`
    // Text-to-Speech
    TellMeJoke(joke)
    // Enable/Disable Button
    toggleButton();
  }catch(err){
    console.log('ooohhhhh nooooo: ', err)
  }
}

// Event Listeners
button.addEventListener('click', getJoke) ;
audioElement.addEventListener('ended', toggleButton)