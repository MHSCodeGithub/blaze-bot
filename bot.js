
const        Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('bot ready!');
});

client.on("message", function (message) {
  var channel = message.channel;
  console.log(message.content);
  if(message.content.indexOf("!") == 0) {
    var command = message.content.substr(1);
    console.log(command);
    /*
      Send message: channel.send(MESSAGE);
      Get Command Sent: command
    */

    if (command == "help") {
      channel.send(
"```markdown\nList Of Help Commands:\n"+"
 1. !help\n"+"
```");
    } else if(command == "!BlazeBurnBlade") {
      channel.send("The best person in this godamn place!")

    } else {
      channel.send("Not a command!");
    }
  }
});

client.login(String("NDQ4NzA0MDA5ODM1MTE4NjAy.DeZ_sg.sBbpsiN0hhoO7Ew2Z9A_PPj3-KM"));
