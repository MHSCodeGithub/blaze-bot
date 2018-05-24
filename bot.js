
const        Discord = require('discord.js');
const client = new Discord.Client();

function ranBetween(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

client.on('ready', () => {
    console.log('bot ready');
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
"```markdown\n# List Of Help Commands:\n"+
"1. !help: "+ "Opens a list of helpful features\n"+
"2. !arena <bet or fight> \n"+
    "bet (blue or yellow): Bets on the blue or yellow team\n"+
    "fight: allows you to play the arena minigame"
"```");

    }
    else if(command == "arena bet blue") {
      var blu = ranBetween(0, 1);
      if(blu == 0){channel.send("The Blue team wins!")} else {channel.send("The Yellow team wins")}
    }
    else if(command == "arena bet yellow"){
      var yel = ranBetween(0, 1);
      if(yel == 0){channel.send("The Blue team wins!")} else {channel.send("The Yellow team wins")}
    }
    else if(command == "arena fight"){
      var race = ranBetween(0, 8);
    } else {
      channel.send("Not a command :()");
    }
  }
});

client.login(String("NDQ4NzA0MDA5ODM1MTE4NjAy.Dee6yA.M9cEeaSWDX1TvW_XG7SbPOvzXpk"));
