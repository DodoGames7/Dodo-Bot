module.exports = {
    name: "settings",
    aliases: ["profile-options", "profile-settings"],
    code: `$title[Profile Settings]
    $description[you can customise on how your profile will look like to other users
    
    
    **Options**:
    
    Title: set your own custom title that is displayed in the first info of your profile
    color: set the embed color of your profile on how it should be displayed to your liking
    Bio: describe about yourself using bio feature]
    $color[YELLOW]
    $addButton[1;Title;primary;title;no]
    $addButton[1;Color;primary;color;no]
    $addButton[1;Bio;primary;bio;no]`
    }