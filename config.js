const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://ismailamir4897:<CHKFhkLBbuHUnq7V>@cluster0.xxkwj2r.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923126813262";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_46_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDczLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAxODksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMSxcbiAgICAgICAgNzksXG4gICAgICAgIDksXG4gICAgICAgIDEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDgwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1NCxcbiAgICAgICAgODQsXG4gICAgICAgIDc3LFxuICAgICAgICA0MixcbiAgICAgICAgMTgxLFxuICAgICAgICAzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgwLFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgODMsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDU5LFxuICAgICAgICAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDg0LFxuICAgICAgICAzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwLFxuICAgICAgICA2MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDc1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MixcbiAgICAgICAgNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MixcbiAgICAgICAgODMsXG4gICAgICAgIDU2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNUWFZS3MwWnkwZmJFR2VWY2gvQlRaTWpSclhhOXFWMGs1KzhIRmVqbVpVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPQ1JaZEdJZVNuS2MycDA0UnB0eWxRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdiMjY5OWJlLWYwOTEtNDUzZC04YjFiLWUzNGE4ZjlkYmI2N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDIsXG4gICAgICAxMjQsXG4gICAgICAyMDMsXG4gICAgICA4NCxcbiAgICAgIDE1LFxuICAgICAgMTI4LFxuICAgICAgNzEsXG4gICAgICA1MSxcbiAgICAgIDI0LFxuICAgICAgMCxcbiAgICAgIDkxLFxuICAgICAgMTAxLFxuICAgICAgMTIsXG4gICAgICAzOSxcbiAgICAgIDExMCxcbiAgICAgIDQwLFxuICAgICAgMTgwLFxuICAgICAgMTI1LFxuICAgICAgMTU1LFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ0LFxuICAgICAgNTMsXG4gICAgICAyNDEsXG4gICAgICAxOTgsXG4gICAgICAyLFxuICAgICAgNjcsXG4gICAgICAxNzIsXG4gICAgICAyNyxcbiAgICAgIDE4OSxcbiAgICAgIDEyLFxuICAgICAgMjUzLFxuICAgICAgMjE3LFxuICAgICAgMjEsXG4gICAgICA5OSxcbiAgICAgIDY5LFxuICAgICAgMTIyLFxuICAgICAgNzAsXG4gICAgICAxMTMsXG4gICAgICAxNTUsXG4gICAgICA1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOUkQxVFpIUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTI2ODEzMjYyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NzQ2ODEyMTU0MjczMToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xEYy90b0ZFTjN0ckxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZVJURnUvZTFtWWdQdjU5RWF5TEI1dkdIanBaNzNkU1Bjc2NGaVNvenJXYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUMW5keGFFTlc4V01kcG00MTdOSExna1hCYkptZ2orZUwrL2FtbEpIMzBUK3IwL2IzNUY2YjJLMFNpVEZkblVWTURxY21WRDNaNXE4bFYzWU9mS1NCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvcGlMdElmUms0ckRhNDl3Smp4d3J1V1pMUC9URXdOSWhNK01MNmlBYStBejZ2RWV5QmNXRWs4WEVNRnFBMS9GRGNRSEpWTnVxcUd6TWYwOVExVlhpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxMjY4MTMyNjI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzOTk1ODNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Faizan-md55",
  ownername:process.env.OWNER_NAME|| "Faizan Umer",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
