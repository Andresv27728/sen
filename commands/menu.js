
export async function menu(bot, msg) {

	const chatId = msg.chat.id;

	const userId = msg.from.id;

    const today = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDay = daysOfWeek[today.getDay()];

    const currentDate = today.getDate();

    const currentMonth = today.getMonth() + 1; 

    const currentYear = today.getFullYear();

	const t = ` 
╭─────────────────╮
      ༒ YO SOY YO ༒
╰─────────────────╯
╭─────────────────╮
│ Hello,  ${msg.from.first_name} 
│ Day : ${currentDay}
│ Date : ${currentDate}/${currentMonth}/${currentYear} 
│ Version : 1.5.1
│ Plugins : 4   
╰─────────────────╯

╭─[ ✧ BOT CMD ✧ ]──╮
│      
│ ⬢ /start    
│ ⬢ /menu          
│ ⬢ /connect 237xxxxx     
│ ⬢ /disconnect 237xxxxx   
╰─────────────────╯        

 Powered By yo soy yo 
 `

	await bot.sendPhoto(chatId, 'menu.jpg', {

      caption: t,

      parse_mode: 'Markdown'

    });


}


export default menu;
