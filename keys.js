//Some small scripts written by The Oddball http://steamcommunity.com/id/TheOddball/ to automatically get keys from Humble Bundle or Bundle Stars.
//What these scripts do is simply, they get all the Steam keys from the Humble Bundle or Bundle Stars page, and puts them each in a newline, ready for use on either; This userscript: https://github.com/LiteOnE/Steam-Scripts/blob/master/Batch-Keys-Activator.user.js , or This program: https://github.com/Ezzpify/SteamBulkActivator
//testingsomething

//Bundle Stars
$('.key.ng-scope').each(function() {
    $(this).find('.ng-scope').click();
});

function getKeys() {
    setTimeout(function() {
        var keys = "";
        $('.key-reveal-copy.ng-scope').each(function() {
            keys = keys + $(this).find('.input-group').find('.ng-valid').val() + '\n'
        });
        return keys;
    }, 1000);
}
var keys = getKeys();
var $temp = $("<textarea>");
$("body").append($temp);
$temp.val(keys).select();
document.execCommand("copy");
$temp.remove();

//Bundle Stars Minified
function getKeys(){setTimeout(function(){var e="";return $(".key-reveal-copy.ng-scope").each(function(){e=e+$(this).find(".input-group").find(".ng-valid").val()+"\n"}),e},1e3)}$(".key.ng-scope").each(function(){$(this).find(".ng-scope").click()});var keys=getKeys(),$temp=$("<textarea>");$("body").append($temp),$temp.val(keys).select(),document.execCommand("copy"),$temp.remove();

//Humble Bundle
$('.sr-unredeemed-button').each(function() {
    $(this).click();
});

function getKeys() {
    var keys = "";
    $('.keyfield-text').each(function() {
        keys = keys + $(this).text() + '\n'
    });
    return keys;
}
var keys = getKeys();
var $temp = $("<textarea>");
$("body").append($temp);
$temp.val(keys).select();
document.execCommand("copy");
$temp.remove();

//Humble Bundle Minified
function getKeys(){var e="";return $(".keyfield-text").each(function(){e=e+$(this).text()+"\n"}),e}$(".sr-unredeemed-button").each(function(){$(this).click()});var keys=getKeys(),$temp=$("<textarea>");$("body").append($temp),$temp.val(keys).select(),document.execCommand("copy"),$temp.remove();

//Pastebin (for Wulf's Keybot)
$('#paste_code').text().match(/[A-Z0-9]+-[A-Z0-9]+-[A-Z0-9]+/g).toString();

//GoGoBundle
var steamkeys = jQuery('table[style*="width:100%;cell-spacing:1px;"]').find('td').text().match(/[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}/g);
console.log(steamkeys.filter((_,i) => i % 5 == 0).toString());
console.log(steamkeys.filter((_,i) => i % 5 == 1).toString());
console.log(steamkeys.filter((_,i) => i % 5 == 2).toString());
console.log(steamkeys.filter((_,i) => i % 5 == 3).toString());
console.log(steamkeys.filter((_,i) => i % 5 == 4).toString());
