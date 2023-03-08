let sideBarInnerWidth = $(".sideBar-inner").innerWidth();
$('#sideBar').css('left',-sideBarInnerWidth);
$('#sideBar i').click(function(){
    
    if($('#sideBar').css('left') == "0px")
    {
        $('#sideBar').animate({left:-sideBarInnerWidth},1000);
    }
    else{
        $('#sideBar').animate({left:"0px"},1000);

    }
})

$('.btn').click(function(){
    $('#sideBar').animate({left:-sideBarInnerWidth},1000);})

$("a[href^='#]").click(function(e){
    let aHref = $(e.target).attr("href");
    let sectionOffset = $(aHref).offset().top;
    $("body").animate({scrollTop:sectionOffset} , 1000);
})

$("#singers h3").click(function (e) { 
    $(this).next().slideToggle(500);
    $("#singers div").not($(this).next()).slideUp(500)
    
});

function countDown(){
    const now = new Date().getTime();
    const eventDate = new Date(2023,4,3).getTime();
    const remTime = eventDate-now;
    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s/60);
    let h = Math.floor(m/60);
    let d = Math.floor(h/24)-30;
    h%=24;
    m%=60
    s%=60;
    h=(h<10)?"0"+h : h ;
    m=(m<10)?"0"+m : m ;
    s=(s<10)?"0"+s : s ;

    // console.log(d);
    // console.log(h);
    // console.log(m);
    // console.log(s);

$("#days").text(`${d} D`);
$("#hours").text(`${h} H`);
$("#minutes").text(`${m} M`);
$("#seconds").text(`${s} S`);
setTimeout(countDown, 1000);
    
}
countDown();

function maxTextArea()
{
    const maxChar = 100;
    $("textarea").keyup(function (e) { 
        let length = $(this).val().length;
        let character = maxChar-length;
        // console.log(character)
        if(character <= 0)
        {
            $("#char").text("your available character finished");
        }else {
            $("#char").text(character);
        }
    });
}
maxTextArea()