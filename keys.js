//Some small scripts written by The Oddball http://steamcommunity.com/id/TheOddball/ to automatically get keys from Humble Bundle or Bundle Stars.
//What these scripts do is simply, they get all the Steam keys from the Humble Bundle or Bundle Stars page, and puts them each in a newline, ready for use on either; This userscript: https://github.com/LiteOnE/Steam-Scripts/blob/master/Batch-Keys-Activator.user.js , or This program: https://github.com/Ezzpify/SteamBulkActivator
//Note: Bundle Stars is slightly incomplete, you need to click 'redeem' on each key, then run the function.

//Bundle Stars
function getKeys(){
var keys = "";
$('.form-control.ng-pristine.ng-valid.ng-touched').each(function(){keys = keys + $(this).val() + '\n'});
$('.form-control.ng-pristine.ng-untouched.ng-valid').each(function(){keys = keys + $(this).val() + '\n'});
return keys;
}
var keys = getKeys();
var $temp = $("<textarea>");
$("body").append($temp);
$temp.val(keys).select();
document.execCommand("copy");
$temp.remove();

//BS Mini
function getKeys(){var e="";return $(".form-control.ng-pristine.ng-valid.ng-touched").each(function(){e=e+$(this).val()+"\n"}),$(".form-control.ng-pristine.ng-untouched.ng-valid").each(function(){e=e+$(this).val()+"\n"}),e}var keys=getKeys(),$temp=$("<textarea>");$("body").append($temp),$temp.val(keys).select(),document.execCommand("copy"),$temp.remove();

//Humble
$('.sr-unredeemed-button').each(function(){$(this).click();});
function getKeys(){
var keys = "";
$('.keyfield-text').each(function(){keys = keys + $(this).text() + '\n'});
return keys;
}
var keys = getKeys();
var $temp = $("<textarea>");
$("body").append($temp);
$temp.val(keys).select();
document.execCommand("copy");
$temp.remove();

//Humble Mini
function getKeys(){var e="";return $(".keyfield-text").each(function(){e=e+$(this).text()+"\n"}),e}$(".sr-unredeemed-button").each(function(){$(this).click()});var keys=getKeys(),$temp=$("<textarea>");$("body").append($temp),$temp.val(keys).select(),document.execCommand("copy"),$temp.remove();