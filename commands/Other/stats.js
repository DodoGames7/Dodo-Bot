module.exports = {
    type: "basicCommand",
    name: "stats",
    code: `$title[1;$username[$clientID]'s stats]
    $addField[1;Bot Version;\`2.0.0-beta-2\`;yes]
    $addField[1;aoi.js;\`$packageVersion\`;yes]
    $addField[1;Ram;$ram;yes]
    $addField[1;Cpu;$cpu;yes]
    $addField[1;Node.js;\`$nodeVersion\`;yes]
    $addField[1;Ping;\`$pingms\`;yes]
    $addField[1;Package Dependencies;$packageDependencies;yes]
    $footer[1;Build: 07e11c2] 
    `
  }
