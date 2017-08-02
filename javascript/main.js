
$(document).ready(function () {
    var myvar;
    // this takes input from the searchbox
    var searchstring = "";
     searchstring = $('.searchInput');


    $(".searchInput").keypress(function(e) {
        if(e.which == 13) {

            $.ajax({
                type: "GET",
                async:true,
                url: `https://en.wikipedia.org//w/api.php?action=query&format=json&list=search&srsearch=${searchstring.val()}`,
                dataType: 'jsonp',
                success: function (data) {
                    var url=`https://en.wikipedia.org/wiki/`;
                    var dat = JSON.stringify(data);
                    console.log(dat);
                    console.log(data);
                    myvar =data;

                    for(let i=0; i<9;i++) {
                        $(".test").append(`<a href="${url}${myvar.query.search[i].title}"> <div class='container1'>` + myvar.query.search[i].title + `<br>` + myvar.query.search[i].snippet + `</div> </a>`);
                    }
                },


            });
            //removes all children
            jQuery('.test').html('');
        }
    });

    $(".mysearch").unbind("click").click(function () {


    $.ajax({
        type: "GET",
        async:true,
        url: `https://en.wikipedia.org//w/api.php?action=query&format=json&list=search&srsearch=${searchstring.val()}`,
        dataType: 'jsonp',
        success: function (data) {
            var url=`https://en.wikipedia.org/wiki/`;
            var dat = JSON.stringify(data);
            console.log(dat);
            console.log(data);
            myvar =data;

            for(let i=0; i<9;i++) {
                $(".test").append(`<a href="${url}${myvar.query.search[i].title}"> <div class='container1'>` + myvar.query.search[i].title + `<br>` + myvar.query.search[i].snippet + `</div> </a>`);
            }
        },


    });
        //removes all children
        jQuery('.test').html('');

});


});

