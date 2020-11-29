$(".number").click(function(){
    let usernumber= $(".guess").val();
    $(".useranswer").append(`<p>Oh, so you think it is ${usernumber}</p>`);
    $(".question1").show();
});

$(".yes").click(function() {
    alert("congratulations");
});
$(".no").click(function() {
    alert("u suck");
});