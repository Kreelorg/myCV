var url = 'kreel.synology.me'
//var url = '192.168.1.25'


function afficheCV(){
  window.open('img/myCV.pdf','','');
}



function ouvre1(){
  window.open('http://'+url+'/stylos/dist/hell.html')
}
function ouvre2(){
  window.open('http://'+url+'/angularjs/index.html')
}


var t_actif=$('.logo img').first()
var item_actif=$('.contour').first()



$('.contour').click(function(){
  d=$(this).children().data('item');
  f=item_actif.children().data('item')
  if (d!=f){
    //$('.detail').removeClass(r.substr(r.indexOf('CLR')))
    $(this).addClass('actif')
    item_actif.removeClass("actif")
    $('.'+d).removeClass('hide')
    $('.'+f).addClass('hide')
    item_actif=$(this)
  }
})

$('.logo img').click(function(){
  console.log($(this));
  $(this).addClass('logoactif')
  t_actif.removeClass('logoactif')
  n=$(this).data('texte');
  o=t_actif.data('texte')

  $('.'+o).addClass('hide')
  $('.'+n).removeClass('hide')

  t_actif=$(this)
})




$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

r=Math.abs(wScroll/600-1);
console.log(wScroll);

$('.monnom').css({
  'transform' : 'translate(0px, '+ wScroll / 2 +'%)'
});


$('.moncv').css({
  'transform' : 'translate(0px, '+ wScroll /1  +'%)'
});

  $('.mypicture').css({

    'transform' : 'scale('+r+','+ r+')',
    'transform' : 'translate(0px, '+ wScroll / 3 +'%)'
  });

  // $('.stylo').css({
  //   'transform' : 'translate(0px, -'+ wScroll / 6 +'%)',
  //   'transform' : 'scale('+r+','+ r+')'
  //});




});
