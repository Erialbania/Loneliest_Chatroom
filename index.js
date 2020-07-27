const chatbox = document.querySelector("#chatbox");
const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");

form.addEventListener("submit", formSubmitStructure)
function formSubmitStructure(noRefresh){
    noRefresh.preventDefault();
    const meMyselfI = ["Me", "Myself", "I"][Math.floor(Math.random() * 3)];
    messageSender(meMyselfI, input.value);
    form.reset();

}

const time = new Date().toLocaleTimeString();

// message text

let newMessage = false;
function messageSender(sender, message){
if (!message.length) return;
newMessage++;    

const text = `<ul class='message' id = '${newMessage}'>
                <li>${time}</li>
                <li class="sender">${sender}</li>
                <li>${message}</li>
                <li class="delete" onclick = 'deleteMe(${newMessage})'>💎</li>
                </ul>`

 chatbox.innerHTML += text;
 document.getElementById('aol').play()
 chatbox.scrollTop = chatbox.scrollHeight               
}  

function deleteMe(newMessage){
    const text = document.getElementById(newMessage);
    text.remove();
}

button.addEventListener("click", chuckNorrisJoke);


function chuckNorrisJoke(){
    fetch("https://api.icndb.com/jokes/random")
    .then((response) => response.json())
    .then((json) => messageSender("Chuck Norris", json.value.joke))
}
 