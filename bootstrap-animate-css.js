(function( $ ){
    $.fn.bmcModal = function() {
        var self = $(this);

        if ( self.attr('data-animate-in') ) {
            self.addClass( 'animate__animated' );
            self.addClass( self.attr('data-animate-in') );
        }

        self.on('hide.bs.modal', function(event) {
            if ( !self.attr('data-end-hide') && self.attr('data-animate-out') ) {
                event.preventDefault();

                self.addClass( self.attr('data-animate-out') );
                if ( self.attr('data-animate-in') ) {
                    self.removeClass( self.attr('data-animate-in') );
                }
            }
            self.removeAttr('data-end-hide');
        })
        .on('animationend', function() {
            if ( self.attr('data-animate-out') && self.hasClass( self.attr('data-animate-out') ) ) {
                self.attr('data-end-hide', true);
                self.modal('hide');
                self.removeClass( self.attr('data-animate-out') );
                if ( self.attr('data-animate-in') ) {
                    self.addClass( self.attr('data-animate-in') );
                }
            }
        })
    };

    $(document).ready(function() {
        $('.modal').bmcModal();
    })
})( jQuery );