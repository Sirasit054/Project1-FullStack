function deletepost(id) {
    alert('delete ' + id);

    //Delete from back end
    $.ajax({
        url: "http://localhost:3000/data/" + id, // post id
        type: "DELETE" 
    })

    //Delete from front end
    $("#show" + id).empty();
}

function editpost(id) {
    console.log(id);
    //alert('Edit ' + id);
    var url = "http://localhost:3000/data";

    $("#bookname" + id).prop('readonly', false);
    $("#detail" + id).prop('readonly', false);
    $("#author" + id).prop('readonly', false);
    $("#pages" + id).prop('readonly', false);
    $("#author" + id).prop('readonly', false);
    $.ajax({
        type: 'PUT',
        //data: {name: 'Billy Bob', age: 28},
        url: url + "/" + id,
        success: function () {
            //no data...just a success (200) status code
            console.log(id);
        }
    });
}

function savepost(id, bookname, detail ,author ,pages ,number) {
    // console.log(id,title);
    var bookname = bookname;
    var detail = detail;
    var author = author;
    var pages = pages;
    var number = number;

    //console.log(text);
    var newposts = {};

    newposts.id = id;
    newposts.bookname = $("#bookname" + id).val();
    newposts.detail = $("#detail" + id).val();
    newposts.author = $("#author" + id).val();
    newposts.pages = $("#pages" + id).val();
    newposts.number = $("#number" + id).val();
   
    var url = "http://localhost:3000/data/" + id;
    // $("#title" + id).prop("");
    $.ajax({
        type: 'PUT',
        data: newposts,
        url: url,
        success: function () {
            //no data...just a success (200) status code
            console.log(newposts);
        }
    });
}


$(function () {

    $("#show").click(function () {
        console.log("Hello");
        $("#posts").empty();
        var url = "http://localhost:3000/data";
        $.get(url, function (data) {
            console.log(data);
            var template = $('#template').html();
            for (var i = 0; i < data.length; i++) {
                var rendered = Mustache.render(template, data[i]);
                $("#posts").append(rendered);
                //  $("#text").val("");
            }
        });
    });

    $("#show").click(function () {
        // $("#posts").empty();
        var newposts = {};
        newposts.id = null;
        newposts.bookname = $("#bookname" + id).val();
        newposts.detail = $("#detail" + id).val();
        newposts.author = $("#author" + id).val();
        newposts.pages = $("#pages" + id).val();
        newposts.number = $("#number" + id).val();
        // console.log(newposts);
        var url = "http://localhost:3000/data";
        $.post(url, newposts, function (data, status) {
            console.log("Inserted " + data);
            $("#bookname").val("");
            $("#detail").val("");
            $("#author").val("");
            $("#pages").val("");
            $("#number").val("");
        });

       
        var url = "http://localhost:3000/data";
        $.get(url, function (data) {
            console.log(data.length);
            var template = $('#template').html();
            for (var i = data.length; i <= data.length; i++) {
                var rendered = Mustache.render(template, data[i - 1]);
                $("#show").append(rendered);
            }
        });
    });
    $("#clear").click(function () {
        $("#show").empty();

    });

});

$("#edit").click(function () {
    $("#posts").empty();

});



