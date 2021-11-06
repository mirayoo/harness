$( '.sizeselect' ).click (function() {
    $( this ).not('.inactive').addClass( 'active' ).siblings().removeClass( 'active' )
});