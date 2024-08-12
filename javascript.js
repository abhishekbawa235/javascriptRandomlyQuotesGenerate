const btn = document.getElementById('btn');
const output = document.querySelector('.output')


let quotes = [
    "The only way to do great work is to love what you do.  Steve Jobs",
     "Courage is not the absence of fear, but the triumph over it.  Nelson Mandela", 
     "The unexamined life is not worth living. Socrates", 
     "It does not matter how slowly you go as long as you do not stop.  Confucius",
      "Creativity is intelligence having fun.  Albert Einstein",
       "Happiness is not something ready made. It comes from your own actions.  Dalai Lama", "Be the change that you wish to see in the world. Mahatma Gandhi", 
       "The best thing to hold onto in life is each other.  Audrey Hepburn", 
       "The more that you read, the more things you will know. The more that you learn, the more places you'll go.  Dr. Seuss", 
       "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. Albert Schweitzer",

]

btn.addEventListener('click',()=>{
    console.log("click");
    let random = Math.floor(Math.random()*quotes.length)
    output.textContent = quotes[random];
})