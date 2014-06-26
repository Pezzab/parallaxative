$( function() {

  var element = $( 'body' );
  var layers = element.css( 'background-position' ).split( ',' );

  // add rate of postion change to x and y for each layer
  var lay0xpos = .5;
  var lay0ypos = .4;

  var lay1xpos = .7;
  var lay1ypos = .6;

  var lay2xpos = .9;
  var lay2ypos = .8;

  // if background-position is set in your stylesheet make this the starting position for each layer
  lay0split = layers[ 0 ].split( ' ' );
  lay0xadd = parseFloat( lay0split[ 0 ] );
  lay0yadd = parseFloat( lay0split[ 1 ] );

  lay1split = layers[ 1 ].split( ' ' );
  lay1xadd = parseFloat( lay1split[ 1 ] );
  lay1yadd = parseFloat( lay1split[ 2 ] );

  lay2split = layers[ 2 ].split( ' ' );
  lay2xadd = parseFloat( lay2split[ 1 ] );
  lay2yadd = parseFloat( lay2split[ 2 ] );

    $(window).bind('scroll',function(e){

      parallaxScroll();

    });

  function changelayer( layer0, layer1, layer2 ) {

    layers[ 0 ] = layer0;
    layers[ 1 ] = layer1;
    layers[ 2 ] = layer2;

    element.css( 'background-position', layers.join() );

  }

  function parallaxScroll(){

    var scrolled = $( window ).scrollTop();

    // calculate rate of position change per layer then add starting position if set by background-position in css

    layer0x = ( 0- ( scrolled * lay0xpos ) ) + lay0xadd;
    layer0y = ( 0- ( scrolled * lay0ypos ) ) + lay0yadd;

    layer1x = ( 0- ( scrolled * lay1xpos ) ) + lay1xadd;
    layer1y = ( 0- ( scrolled * lay1ypos ) ) + lay1yadd;

    layer2x = ( 0- ( scrolled * lay2xpos ) ) + lay2xadd;
    layer2y = ( 0- ( scrolled * lay2ypos ) ) + lay2yadd;

    changelayer( layer0x + 'px ' + layer0y + 'px ', layer1x + 'px ' + layer1y + 'px ', layer2x + 'px ' + layer2y + 'px ' );
  
  }

} );