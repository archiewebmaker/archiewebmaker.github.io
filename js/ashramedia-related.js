var AshramediaSummary = {
    displayimages: false,
    imagePosition: &#39;left&#39;,
    Widthimg: 200,
    Heightimg: 0,
    noThumb: &#39;https://lh3.googleusercontent.com/-GRP8IcURRsw/T9MjiNWXUcI/AAAAAAAAB88/QEDpDHxI55o/s1600/no-thumb.jpg&#39;,
    SummaryWords: 30,
    wordsNoImg: 30,
    skipper: 0,
    DisplayHome: true,
    DisplayLabel: true
};

var defaultnoimage=&quot;https://3.bp.blogspot.com/-PpjfsStySz0/UF91FE7rxfI/AAAAAAAACl8/092MmUHSFQ0/s1600/no_image.jpg&quot;;
var maxresults=4;
var splittercolor=&quot;#fff&quot;;
var relatedpoststitle=&quot;Similar posts&quot;;

function summary(h) {
    summary.count = summary.count || 0;
    summary.count++;
    var g = location.href.indexOf("/search/label/") == -1 && location.href.indexOf("/search?") == -1,
        c = location.href.indexOf("/search/label/") != -1;
    if (summary.count <= AshramediaSummary.skipper) {
        return
    }
    if (g && !AshramediaSummary.DisplayHome) {
        return
    }
    if (c && !AshramediaSummary.DisplayLabel) {
        return
    }
    var e = document.getElementById(h),
        f = e.getElementsByTagName("img");
    if (AshramediaSummary.displayimages) {
        var a = '<img width="' + AshramediaSummary.Widthimg + '" height="' + AshramediaSummary.Heightimg + '"';
        if (AshramediaSummary.imagePosition != "no") {
            var b = AshramediaSummary.imagePosition == "left" ? ' style="float:left;padding:0 5px 5px 0"' : ' style="float:right;padding:0 0 5px 5px"';
            a += b
        }
        a += ' src="' + (f.length > 0 ? f[0].src : AshramediaSummary.noThumb) + '" /><div class="contentos">';
        var d = summary.strip(e.innerHTML, AshramediaSummary.SummaryWords)
    } else {
        var a = "",
            d = summary.strip(e.innerHTML, AshramediaSummary.wordsNoImg)
    }
    e.innerHTML = a + d + ""
}
summary.strip = function (a, b) {
    return a.replace(/<.*?>/ig, "").split(/\s+/).slice(0, b - 1).join(" ")
};




 // Twitter
 (function(a,b,c){var d=a.getElementsByTagName(b)[0];if(!a.getElementById(c)){a=a.createElement(b);a.id=c;a.src="//platform.twitter.com/widgets.js";d.parentNode.insertBefore(a,d)}})(document,"script","twitter-wjs");


var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
var thumburl = new Array();
function related_results_labels_thumbs(json) {
for (var i = 0; i < json.feed.entry.length; i++) {
var entry = json.feed.entry[i];
relatedTitles[relatedTitlesNum] = entry.title.$t;
try 
{thumburl[relatedTitlesNum]=entry.media$thumbnail.url;

	thumburl = thumburl.replace("/s72-c/","/s300-a/");
} 

catch (error){
s = entry.content.$t;
a = s.indexOf("<img");
b = s.indexOf("src=\"", a);
c = s.indexOf("\"", b + 5);
d = s.substr(b + 5, c - b - 5);
if ((a != -1) && (b != -1) && (c != -1) && (d != ""))
{thumburl[relatedTitlesNum]=d;} else {if(typeof(defaultnoimage) !== 'undefined') thumburl[relatedTitlesNum]=defaultnoimage; else thumburl[relatedTitlesNum]="https://3.bp.blogspot.com/-PpjfsStySz0/UF91FE7rxfI/AAAAAAAACl8/092MmUHSFQ0/s1600/no_image.jpg";}

}

if(relatedTitles[relatedTitlesNum].length>35) relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0, 35)+"...";
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
relatedUrls[relatedTitlesNum] = entry.link[k].href;
relatedTitlesNum++;


}
}
}
}
function removeRelatedDuplicates_thumbs() {
var tmp = new Array(0);
var tmp2 = new Array(0);
var tmp3 = new Array(0);
for(var i = 0; i < relatedUrls.length; i++) {
if(!contains_thumbs(tmp, relatedUrls[i])) 
{
tmp.length += 1;
tmp[tmp.length - 1] = relatedUrls[i];
tmp2.length += 1;
tmp3.length += 1;
tmp2[tmp2.length - 1] = relatedTitles[i];
tmp3[tmp3.length - 1] = thumburl[i];
}
}
relatedTitles = tmp2;
relatedUrls = tmp;
thumburl=tmp3;


}

function contains_thumbs(a, e) {
for(var j = 0; j < a.length; j++) if (a[j]==e) return true;
return false;
}


function printRelatedLabels_thumbs(current) {
var splitbarcolor;
if(typeof(splittercolor) !== 'undefined') splitbarcolor=splittercolor; else splitbarcolor="#DDDDDD";
for(var i = 0; i < relatedUrls.length; i++)
{
if((relatedUrls[i]==current)||(!relatedTitles[i]))
{
relatedUrls.splice(i,1);
relatedTitles.splice(i,1);
thumburl.splice(i,1);
i--;
}
}


var r = Math.floor((relatedTitles.length - 1) * Math.random());
var i = 0;




if(relatedTitles.length>0) document.write('<h2>'+relatedpoststitle+'</h2>');
document.write('<div style="clear: both;"/>');
while (i < relatedTitles.length && i < 20 && i<maxresults) {
document.write('<a style="text-decoration:none;padding:5px;float:left; padding-right: 13px;');
if(i!=0) document.write('border-left:solid 0.5px '+splitbarcolor+';"');
else document.write('"');
document.write(' href="' + relatedUrls[r] + '"><img style="width: 145px; height: 110px;;" src="'+thumburl[r]+'"/><br/><div style="width:140px;padding-left:3px;height:65px;border: 0pt none ; margin: 3px 0pt 0pt; padding: 0pt; font-style: normal; font-variant: normal; font-weight: normal;font-size: 14px; line-height: 25px; font-size-adjust: none; font-stretch: normal;">'+relatedTitles[r]+'</div></a>');

i++;


if (r < relatedTitles.length - 1) {
r++;
} else {
r = 0;
}

}
document.write('</div>');

relatedUrls.splice(0,relatedUrls.length);
thumburl.splice(0,thumburl.length);
relatedTitles.splice(0,relatedTitles.length);

}