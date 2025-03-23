import { promoMessage } from "./promo-messages.js";

let promoMessageHTML = '';

promoMessage.forEach((message) => {
promoMessageHTML += `
 
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
});

document.querySelector('.chat-inbox').innerHTML = promoMessageHTML;