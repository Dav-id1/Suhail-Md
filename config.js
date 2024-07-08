const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Badboi14:<password>@cluster0.gf06fcb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ BADBOI²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348140825959";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_28_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NixcbiAgICAgICAgMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNixcbiAgICAgICAgMjMyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk3LFxuICAgICAgICA5MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDUxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDExMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0LFxuICAgICAgICA3MyxcbiAgICAgICAgNzksXG4gICAgICAgIDM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU2LFxuICAgICAgICA0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDczLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk3LFxuICAgICAgICA5NyxcbiAgICAgICAgNjksXG4gICAgICAgIDU3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDczLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODYsXG4gICAgICAgIDgxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM4LFxuICAgICAgICA0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDgzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNixcbiAgICAgICAgODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjI3TTJSK0p0SU8xL1gyeWp5cjIvTWJMT3ZUR0lvbUwyeG5ERkFrR1cvVmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzNjYxNjk4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FGNzcxODYyQTNDRTkwN0JDOUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDc0MTIzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpGR05MVEF3VGRtdmRVSjdRX09JYWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmRiZWZkZGEtNmI3Ny00YTU2LWFmYWUtNTkzZmIxYzVjZWRlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOCxcbiAgICAgIDE4MixcbiAgICAgIDEyOCxcbiAgICAgIDE0NSxcbiAgICAgIDEzNixcbiAgICAgIDEyNSxcbiAgICAgIDcxLFxuICAgICAgMTQxLFxuICAgICAgMjE5LFxuICAgICAgMTUwLFxuICAgICAgMjA3LFxuICAgICAgNDAsXG4gICAgICAyNDQsXG4gICAgICAyNSxcbiAgICAgIDIyMixcbiAgICAgIDIwMCxcbiAgICAgIDU2LFxuICAgICAgMjM0LFxuICAgICAgOTAsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDE5NCxcbiAgICAgIDI1MSxcbiAgICAgIDEyMyxcbiAgICAgIDQ3LFxuICAgICAgNjQsXG4gICAgICAyMyxcbiAgICAgIDksXG4gICAgICAxNjMsXG4gICAgICAxMTgsXG4gICAgICA4NSxcbiAgICAgIDI1LFxuICAgICAgNjEsXG4gICAgICAyMjksXG4gICAgICAyLFxuICAgICAgMTg5LFxuICAgICAgMTE4LFxuICAgICAgMTA3LFxuICAgICAgMTQ0LFxuICAgICAgMjU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlM5WTZEUEhWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM2NjE2OTg5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM5ODYyMTYyMTg3MTA6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMaSs2bUFRZzdTeHRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNhc0Y4OHc3UFozU09jNWVDZ0FsV1JMb1UrRjRPbDlzNEVJMUJTczU2eG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT05OWjhQRVgwVGYwV1JzTUpGVWNLVWc4NzlwYkpyUzk0SWNGVjJFWlpneUVzcndxTDl6RXBPdlY2Q2ZKaTlkaWxJcnc4SjdFdnhWYXJWMS94dUFralE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOC9oNWdCUUFaSTg2dE9TL1FObTVXYUcwR1R4Qmlsdms0aWhoNmVOeW02RUNzdC9sdTEvc3NDL2h4ZGtIVzRoSDlmdnRLdVFNbGdUTEdqRHp1UFFUQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzNjYxNjk4OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NzQxMTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHVXNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdVcy5qc29uIjogIntcImtleURhdGFcIjpcIldFZVFENGcrOHdxVW9uUndxZTNuSVJtSHd0WHM4TnVXYjh0YzFBTXNzSHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAzMDcxMjg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0NzQxMTk2MDBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "all",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "BADBOI-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "BADBOI",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "recording", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
