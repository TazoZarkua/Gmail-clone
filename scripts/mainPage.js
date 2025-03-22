import { messages } from "./messages.js";


let messageHTML = '';

messages.forEach((message) => {
messageHTML += `
            <div class="message-line">
                <div class="left-message-line">
                    <input type="checkbox">
                    <img src="sidebar-icons/starred.png">
                    <p>${message.author}</p>
                </div>
                <div class="middle-message-line">
                    <div class="message-theme">
                        <P>${message.theme}</P>
                    </div>
                    <div class="message">
                        <p id="message">${message.message}</p>
                    </div>
                </div>
                <div class="right-message-line">
                    <p>${message.time}</p>
                </div>
            </div>
`;
});

document.querySelector('.chat-inbox').innerHTML = messageHTML;

const selectForm = document.querySelector('.middle-form');

selectForm.addEventListener('submit', (event) => {
document.querySelector('.chat-inbox').innerHTML = '';
event.preventDefault();
const searchInput = document.getElementById('search-input');
const key = searchInput.value.trim().toLowerCase();
const searchedMessage = messages.filter(message => message.author.trim().toLowerCase().includes(key) || message.message.trim().toLowerCase().includes(key));
let searchedHTML = '';
if(searchedMessage){
    searchedMessage.forEach((message) => {
searchedHTML += `

            <div class="message-line">
                <div class="left-message-line">
                    <input type="checkbox">
                    <img src="sidebar-icons/starred.png">
                    <p>${message.author}</p>
                </div>
                <div class="middle-message-line">
                    <div class="message-theme">
                        <P>${message.theme}</P>
                    </div>
                    <div class="message">
                        <p id="message">${message.message}</p>
                    </div>
                </div>
                <div class="right-message-line">
                    <p>${message.time}</p>
                </div>
            </div>

`
    })
}
document.querySelector('.chat-inbox').innerHTML = searchedHTML;
} );

document.querySelector('#message-count').innerHTML = messages.length;