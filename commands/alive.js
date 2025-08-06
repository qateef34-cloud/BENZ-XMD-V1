const settings = require("../settings");
async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `
                        Version 1
        💀ALPHA-KING-TECH BENZ COMPANY🤩
         MY BOT IS ON IS RUNNING SMOOTHLY 
          FAST REPLYING THAN UR GIRLFRIEND
        
                  OWNER : ALPHA-KING-TECH 
                  Released date: 10 August 2025
        
        
        
        `;
        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '0029VajbiIfAjPXO45zG2i2c@newsletter',
                    newsletterName: 'B͎E͎N͎Z͎I͎ C͎O͎M͎P͎A͎N͎Y͎ X͎M͎D͎',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;