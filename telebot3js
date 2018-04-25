module.exports = function echoBot (hook) {
  var linke = 'https://api.telegram.org/bot' + hook.env.ms_key + '/sendMessage';
  var chatid = hook.params;
  
  
  var request = require('request');
  request.post( linke , {
      "chat_id": hook.params.message.chat.id,
      "text": hook.params.message.text
    }, function(err,httpResponse,body){ 
      hook.res.end(body);
    });
};
