
 const btn = document.querySelector('.talk')
 const txt = "You :"
 const TXT = "AI :"
const content = document.querySelector('.content')
const d = new Date()
const output = document.getElementById('output')
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log ('voice recognition active');
};

recognition.onresult = function (event) {
  console.log(event)
  const current = event.resultIndex
  const text = event.results[current][0]. transcript
  console.log(text)
  content.textContent = text
  
  if(text == "hello" || text == "hey" || text == "hi"){
    output.innerHTML = TXT + "hey!"
  }
  
  if(text == "what is the time"){
    output.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
  }
}; 
btn.addEventListener('click', () => {
  recognition.start();
})
