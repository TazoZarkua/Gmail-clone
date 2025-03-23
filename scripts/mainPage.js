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
                    <input type="checkbox" id="IndividualCheckbox">
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



const checkbox = document.getElementById('js-checkbox');

checkbox.addEventListener('click', () => {
   let messagebox = document.querySelector('.message-status');
       if(messagebox.style.display === 'flex'){
            messagebox.style.display = 'none'
       }
       else{
        messagebox.style.display = 'flex';
       }
 
});

document.getElementById('checkbox').addEventListener('click', () => {
   const header_container = document.querySelector('.header-container');
   const header_container_2 = document.querySelector('.header-container-2');
   const left_side_backup = document.querySelector('.left-side-backup');
   const line = document.querySelectorAll('.message-line')
if(header_container.style.display === 'none' && header_container_2.style.display === 'none' && left_side_backup.style.display === 'flex'){
    header_container.style.display = 'flex';
    header_container_2.style.display = 'flex'
    left_side_backup.style.display = 'none';
    line.forEach((lin) => {
        lin.style.backgroundColor = 'white'
    });

}
else{
    header_container.style.display = 'none';
    header_container_2.style.display = 'none'
    left_side_backup.style.display = 'flex';
    line.forEach((lin) => {
        lin.style.backgroundColor = 'rgb(195, 219, 255)'
    });
   let check = document.querySelector('#checkbox');
   let IndividualCheckbox = document.querySelectorAll('#IndividualCheckbox')   
}
});


const ExpandMore = document.getElementById('expand-more');
ExpandMore.addEventListener('click', () => {
   const sidebar =  document.querySelector('.on-show-icons');
   const arrow_down = document.getElementById('arrow-down');
   const arrow_up = document.getElementById('arrow-up')
   if(sidebar.style.display === 'flex'){
    sidebar.style.display = 'none';
    arrow_up.style.display = 'none';
    arrow_down.style.display = 'flex';
   }
   else{
    sidebar.style.display = 'flex';
    arrow_up.style.display = 'flex';
    arrow_down.style.display = 'none'
   }
})

const icon = document.getElementById('showBaseline');
icon.addEventListener('click', () => {
    const baseline = document.querySelector('.baseline-icons');
    if(baseline.style.display === 'flex'){
        baseline.style.display = 'none'
    }
    else{
        baseline.style.display = 'flex'
    }
})

