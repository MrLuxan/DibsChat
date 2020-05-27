
function CheckMesage()
{

}

window.onload = function() {
	let root = document.getElementById("root");

	let mainChat = root.firstChild;
	mainChat.classList.remove("tw-left-0");
	mainChat.style.setProperty("width", "80%");

	let newNode = document.createElement('div');
	newNode.id = "SideChatMain";


	newNode.innerHTML = '<div id="SideChatHeader">' + 
					    	'<img src="https://static-cdn.jtvnw.net/emoticons/v1/301044818/1.0"><h5 data-test-selector="chat-room-header-label" class="tw-c-text-alt tw-font-size-6 tw-semibold tw-upcase"> Dibs Chat</h5>' +
					    '</div>'+
					    '<div id="SideChatBody">' +
					    	'<div id="SideChat"></div>' +
					    '</div>' +
					    '<div id="SideChatMoreMessages">' + 
					    	'<div class="tw-absolute tw-border-radius-medium tw-bottom-0 tw-c-background-overlay tw-c-text-overlay tw-mg-b-1"><button class="tw-align-items-center tw-align-middle tw-border-bottom-left-radius-medium tw-border-bottom-right-radius-medium tw-border-top-left-radius-medium tw-border-top-right-radius-medium tw-core-button tw-core-button--overlay tw-core-button--text tw-inline-flex tw-interactive tw-justify-content-center tw-overflow-hidden tw-relative" data-a-target="chat-list-footer"><div class="tw-align-items-center tw-core-button-label tw-flex tw-flex-grow-0"><div data-a-target="tw-core-button-label-text" class="tw-flex-grow-0">More messages below.</div></div></button></div>'+
					    '</div>';


	root.insertBefore(newNode, mainChat);

	let SideChat = document.getElementById("SideChat");

	let chatArea = document.querySelectorAll('[role="log"]')[0];

	let lastScrollTop = 0; 
	let autoScroll = true;

	let keys = ["dib","dibs","dskoopadibs"];

	chatArea.addEventListener('DOMNodeInserted', function(ev){
		let newMessage = ev.path[0];
		if(newMessage.classList.contains("chat-line__message"))
		{
			for (var i = 0; i < keys.length; i++) {
				if(newMessage.innerHTML.toLocaleLowerCase().indexOf(keys[i]) > -1)
				{
					let clone = ev.path[0].cloneNode(true);
					SideChat.appendChild(clone);

					if(autoScroll)
					{
						clone.scrollIntoView(false);
					  	lastScrollTop = SideChat.parentElement.scrollTop;
					}

					break;
				}
			}
		}
	});

	SideChat.parentElement.addEventListener('scroll', function(){
		if(SideChat.parentElement.scrollTop < lastScrollTop)
		{
			SideChatMoreMessages.style.display = "flex";
			autoScroll = false;
		}
	});


	let SideChatMoreMessages = document.getElementById("SideChatMoreMessages");


	SideChatMoreMessages.addEventListener('click', function()
	{
		SideChatMoreMessages.style.display = "none";
		SideChat.lastChild.scrollIntoView(false);
		autoScroll = true;
	});

}
