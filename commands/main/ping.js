module.exports = {
name: "ping",
code: `
Pong! 🏓
$editIn[3s;Api Latency: $pingms
Message Ping: $messagePingms
Database Ping: $databasePingms
]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]`
}