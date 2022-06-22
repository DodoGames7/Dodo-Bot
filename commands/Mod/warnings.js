module.exports = {
  name: "warnings",
  code: `$title[1;Warnings for $username[$mentioned[1]]
  $addField[1;Warnings Count;\`$getServerVar[warns;$mentioned[1]]\` 
$onlyForIDS[$botOwnerID;]`
}