module.exports = {
name: "ping",
code: `
Pong! 🏓
$editIn[3s;Api Latency: $pingms
Message Ping: $messagePingms
]
$cooldown[5s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;ping;$authorID];$dateStamp];1000]]:R>]`
}