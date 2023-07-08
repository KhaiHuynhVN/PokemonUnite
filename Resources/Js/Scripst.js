$(document).ready(
    function() {
        $('header').waypoint(
            function(direction){
                if(direction == "down"){
                    $('.AddSticky').addClass('Sticky')
                }else{
                    $('.AddSticky').removeClass('Sticky')
                }
            },{
                offset: - document.querySelector('.Menucover').offsetTop + 'px'
            }
        )
    }
)

$(document).ready(
    function(){
        $('.Section5').waypoint(
            function(derection){
                if(derection == "down"){
                    $('.AddInvisible').addClass('Invisible')
                }else{
                    $('.AddInvisible').removeClass('Invisible')
                }
            },{
                offset:'50px'
            }
        )
    }
)

$(document).ready(
    function(){
        $('#Header').waypoint(
            function(derection){
                if(derection == "down"){
                    $('.AddInvisible').removeClass('Invisible')
                }else{
                    $('.AddInvisible').addClass('Invisible')
                }
            },{
                offset:'-150px'
            }
        )
    }
)

$(document).ready(
    function(){
        $('.bars').click(
            function(){
                if($('.Menu').hasClass('MenuToggle')){
                    $('.Menu').addClass('MenuToggle1')
                    $('.Menu').removeClass('MenuToggle2')
                }
            }
        )
        $('.fa-times-circle').click(
            function(){
                if($('.Menu').hasClass('MenuToggle')){
                    $('.Menu').addClass('MenuToggle2')
                    $('.Menu').removeClass('MenuToggle1')
                }
            }
        )
        // hiện menu

        $('.bars').click(
            function(){
                $(this).addClass('barsNone')
                $(this).removeClass('barsAppear')
            }
        )
        $('.fa-times-circle').click(
            function(){
                $('.bars').removeClass('barsNone')
                $('.bars').addClass('barsAppear')
            }
        )
        // bars biến mất và xuất hiện

        $('.bars').click(
            function(){
                $('.TextBars').addClass('TextBarsNone')
                $('.TextBars').removeClass('TextBarsAppear')
            }
        )
        $('.fa-times-circle').click(
            function(){
                $('.TextBars').addClass('TextBarsAppear')
                $('.TextBars').removeClass('TextBarsNone')
            }
        )
        // Chữ Menu biến mất và xuất hiện
    }
)








