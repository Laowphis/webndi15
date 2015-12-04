 
var webSocket = new WebSocket("ws://localhost:8887");
var returnServer = document.getElementById("returnServer");

webSocket.onopen = function(message) { processOpen(message);};
webSocket.onmessage = function(message) { processMessage(message);};
webSocket.onclose = function(message) { processClose(message);};
webSocket.onerror = function(message) { processError(message);};

function processOpen(message){
	returnServer.innerHTML += "Server Connect!"+"\n";
	webSocket.send("Wassup");
}

function processMessage(message) {

	returnServer.innerHTML += message.data + "\n";
	element = document.getElementById('returnServer');
	element.scrollTop = element.scrollHeight;

}

function processClose(message) {
	webSocket.send("I'm out"); // close avant le send ? meh o/
	returnServer.value += "Server Disconnect!"+"\n";
}

function processError(message) {
	returnServer.value += "error ...\n";
}


