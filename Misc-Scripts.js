//This file is just miscellaneous scripts I've written for various reasons


//Script to download all RaRs from yiff.party creator

var arr = [];
var cleanarr = [];
var num = 0;
var arrlength;

$('a[href$=".rar"]').each(function() {
    var href = $(this).attr('href');
    var href2 = "https://yiff.party" + href;
    arr.push(href2)
});

setTimeout(function() {
    $.each(arr, function(i, el) {
        if ($.inArray(el, cleanarr) === -1) cleanarr.push(el);
    });

}, 1000);



setTimeout(function() {
    var intervalID = setInterval(function() {

        var href = cleanarr[num];
        $('body').append('<iframe id="' + num + '" style="display:none"></iframe>');
        document.getElementById('' + num + '').src = href;
		
		setTimeout(function() {
        	$('#' + num).remove();
        }, 100);

        if (++num === arrlength) {
            window.clearInterval(intervalID);
        }
    }, 1000);
}, 2000);