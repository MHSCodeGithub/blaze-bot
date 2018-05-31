
const        Discord = require('discord.js');
const client = new Discord.Client();

function ranBetween(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

client.on('ready', () => {
    console.log('bot ready');
});

var stage = 0;


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
    "fight: allows you to play the arena minigame\n"+
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
      var race = "";
      var cnt = ranBetween(0, 7);
      if(cnt == 0){race = "Nord"};
      if(cnt == 1){race ="Imperial"};
      if(cnt == 2){race = "Breton"};
      if(cnt == 3){race = "High Elf"};
      if(cnt == 4){race = "Dark Elf"};
      if(cnt == 5){race = "Wood Elf"};
      if(cnt == 6){race = "Argonian"};
      if(cnt == 7){race = "Khajiit"};
      var armour = "";
      var lnt = ranBetween(0, 1);
      if(lnt == 0){armour = "Heavy armour"};
      if(lnt == 1){armour = "Light armour"};
      var weapon = "";
      var wnt = ranBetween(7, 7);
      if(wnt == 0){weapon = "dagger"};
      if(wnt == 1){weapon = "mace"};
      if(wnt == 2){weapon = "sword"};
      if(wnt == 3){weapon = "war axe"};
      if(wnt == 4){weapon = "battleaxe"};
      if(wnt == 5){weapon = "greatsword"};
      if(wnt == 6){weapon = "war hammer"};
      if(wnt == 7){weapon = "bow and arrow"};
      channel.send("```You face off against a " + race + " in " + armour + " with a " + weapon + "```");
      var move = "";
      var doge = ranBetween(0, 1);
      if(wnt == 7){channel.send("```He fires a volley of arrows, do you dodge or charge?```");
                  stage = 1;
                    if(command = "charge" && stage == 1){
                    chargeChance = ranBetween(0, 1);
                  if(command = "charge" && chargeChance == 0){channel.send("```The charge succeed, you won the fight```");}
                  if(command = "charge" && chargeChance == 1){channel.send("```The charge failed, you lost the fight```");}
                  }
                }
      if(doge == 0 && wnt < 7){channel.send("```He charges at you, do you dodge or parry?```");}
      if(doge == 1 && wnt < 7){channel.send("```He circles you, do you charge or circle?```");}


    } else {

      channel.send("```Not a command!```");
    }
  }
});

client.login(String("NDQ4NzA0MDA5ODM1MTE4NjAy.Dee6yA.M9cEeaSWDX1TvW_XG7SbPOvzXpk"));
