import {templates} from 'templates';
import 'bootstrap';
import 'jquery';


function all(){
    $('.common-footer').css("display","none");
        templates.getPage('home', {})
        .done(() => {
            jQuery(document).ready(function($) {

                $('#myCarousel').carousel({
                    interval: 5000,
                });

            })
            $('[id^=carousel-selector-]').click(function () {
                let id_selector = $(this).attr("id");
                let id = /-(\d+)$/.exec(id_selector)[1];
                jQuery('#myCarousel').carousel(parseInt(id));
            });
            $('#myCarousel').on('slid.bs.carousel', function (e) {
                let id = $('.item.active').data('slide-number');

                $('#carousel-text').html($('#slide-content-'+id).html());
            });
    });
}

let homeController = {
    all,
};

export { homeController as homeController };
