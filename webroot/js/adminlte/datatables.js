$(function() {
    $.extend( true, $.fn.dataTable.defaults, {
        "bServerSide": true,
        "bProcessing": true,
        "oLanguage": {
            "sProcessing": "<i style='font-size: 30px' class='fa fa-refresh fa-spin'></i>"
        },
        "sServerMethod": "POST",
        "responsive" : true,
    } );
});