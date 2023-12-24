for ( i=0 ;  i<500 ;i++)
{
var posX = Math.random()*$(window).width();
var posY = Math.random()*$('.cielo-1').height();
var alfa = Math.random();
var night = '<div class="night"     style="left:'+posX+'px;top:'+posY+'px; opacity:'+alfa+'"></div>';
  
  $('.cielo-1').append(night);
 }

for ( j=0 ;  j<500 ;j++)
{
var posLeft = Math.random()*$(window).width();
var posTop = Math.random()*$('.cielo-2').height();
var omega = Math.random();
var nightDos = '<div class="night" style="left:'+posLeft+'px;top:'+posTop+'px;opacity:'+omega+'"></div>';
            
  $('.cielo-2').append(nightDos);
}
