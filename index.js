require('dotenv').config(); 

const{Client} = require('discord.js');  
const sneckfetch = require('snekfetch')
const client = new Client(); 
const Discord = require('discord.js');

const channel = client.channels.cache.get('Channal_id');
 
client.login(process.env.FUMOBOT_DISCORDJS_TOKEN);
const prefix = process.env.PREFIX;

client.on('ready',function(){
  console.log('Bot is ready!'); 
  console.log('ID:' +client.user.id); 
});

client.on('message', async function (msg){ 
  console.log(msg.content, prefix)
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  let args = msg.content.slice(prefix.length).split(' '); 
  const command=args.shift(); 
  //Test case
  if (command == '9'){
    msg.reply('Have a PERFECT math class');
    msg.channel.send({files: ['./sprites/9.png']})
  }

  //Primary RNG
  if (command == 'roll'){
    //msg.channel.send("`Your RNG is: " + Math.floor((Math.random() * 100) + 1) + "`")
    var r = 0;
    r = Math.floor((Math.random() * 100 + 1))
    msg.channel.send(('|| rng = ') + r + (' ||'));

    //D Rank
    if ( 0 < r && r < 50 ){
      msg.reply(" `D Rank` ");
      var d = 0;
      d = Math.floor((Math.random() * 10 + 1))
    
      if ( 1 <= d && d <= 3 || d == 10 ){
        msg.channel.send(" *Suika Ibuki* ", {files: ["./sprites/D1.png"]})
      }
      else if ( 4 <= d && d <= 6 ){
        msg.channel.send(" *Komachi Onozuka* ", {files: ["./sprites/D2.png"]})
      }
      else if ( 7 <= d && d <= 9 ){
        msg.channel.send(" *Alice Margatroid* ", {files: ["./sprites/D3.png"]})
      }
    }

    //C Rank 
    else if ( 49 < r && r < 75 ){
      msg.reply(" `|C Rank|` ");
      var c = 0;
      c = Math.floor((Math.random() * 10 + 1))

      if ( 1 <= c && c <= 3 || c == 10){
        msg.channel.send(" *Aya Shameimaru* ", {files: ["./sprites/C1.png"]})
      }
      else if ( 4 <= c && c <= 6 ){
        msg.channel.send(" *Yuyuko Saigyouji* ", {files: ["./sprites/C2.png"]})
      }
      else if ( 7 <= c && c <= 9 ){
        msg.channel.send(" *Iku Nagae* ", {files: ["./sprites/C3.png"]})
      }
    }

    //B Rank
    else if ( 74 < r && r < 90 ){
      msg.reply(" `< B Rank >` ");
      var b = 0;
      b = Math.floor((Math.random() * 10 + 1))

      if ( 1 <= b && b <= 3 || b == 10){
        msg.channel.send(" *Marisa Kirisame* ", {files: ["./sprites/B1.png"]})
      }
      else if ( 4 <= b && b <= 6 ){
        msg.channel.send(" *Yukari Yakumo* ", {files: ["./sprites/B2.png"]})
      }
      else if ( 7 <= b && b <= 9 ){
        msg.channel.send(" *Patchouli Knowledge* ", {files: ["./sprites/B3.png"]})
      }
    }
    
    //A Rank
    else if ( 89 < r && r < 98 ){
      msg.reply(" `<< A Rank >>` ");
      var a = 0; 
      a = Math.floor((Math.random() * 10 + 1))

      if ( 1 <= a && a <= 3 || a == 10){
        msg.channel.send(" *Sakuya Izayoi* ", {files: ["./sprites/A1.png"]})
      }
      else if ( 4 <= a && a <= 6 ){
        msg.channel.send(" *Reisen Udongein Inaba* ", {files: ["./sprites/A2.png"]})
      }
      else if ( 7 <= a && a <= 9 ){
        msg.channel.send(" *Youmu Konpaku* ", {files: ["./sprites/A3.png"]})
      }
    }

    //S Rank 
    else if ( 97 < r && r < 101 ){
      msg.reply(" `<<< S Rank >>>` ");
      var s = 0;
      s = Math.floor((Math.random() * 10 + 1))

      if ( 1 <= s && s <= 3 || s == 10 ){
        msg.channel.send(" *Tenshi Hinanawi* ", {files: ["./sprites/S1.png"]})
      }
      else if ( 4 <= s && s <= 6 ){
        msg.channel.send(" *Reimu Hakurei* ", {files: ["./sprites/S2.png"]})
      }
      else if ( 7 <= s && s <= 9 ){
        msg.channel.send(" *Remilia Scarlet* ", {files: ["./sprites/S3.png"]})
      }
    }
  }
  const isBotOwner = msg.author.id == 'Owner_id';
  //Shutting Down  
  if (command == 'shutdown'){
    if(!isBotOwner) return;
    msg.channel.send(' `Shutting down...` ').then(m => {
      client.destroy();
    });
  }
});