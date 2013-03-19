var soc = io.connect();  // can take 'http://localhost:PORT' OR 'http://www.myRemoteSocket.com' as arg
soc.on('connected', function(data){
	console.log('WebSocket: ', data.text);
	/**
	 * SET 'onUserLocReady' EVENT-TRIGGER THAT CONCURS WITH 'onSocketConnected' EVENT-TRIGGER!!!
	 */
	/**
	 * MAKE SERVER-SIDE ARRAY WHICH COLLECTS USER LOCATION JUST LIKE 'nicknames' ARRAY!!!
	 * PROBABLY WILL BE A Bridge-Pattern
	 */

jQuery(function($){
	var nickname = $('#nickname')
		, setNickname = $('#set_nickname')
		, message = $('#message')
		, messageForm = $('#send_message');
		
	setNickname.submit(function(e){
		e.preventDefault();
		soc.emit('nickname', nickname.val(), function(data){
			if(data){
				setNickname.hide(800);
				messageForm.show(200);
				message.focus();
				console.log('Nickname set!');
			}else{
				setNickname.prepend('<mark>This nickname is already taken :(</mark><br>');
				console.log('nickname NOT SET!');
			}
		});
	});
	
	messageForm.submit(function(e){
		e.preventDefault();
		soc.emit('user message', message.val());
		message.val('').focus();
	});
	
	soc.on('nicknames', function(data){
		console.log('nickname list', data);
	});
	
	soc.on('user message', function(data){
		console.log('nickname:', data.nick, ' user message:', data.message);
		$('#send_message').after('<b>' + data.nick + ' said: </b><span>' + data.message + '</span><br>');
	});
	
});


});
