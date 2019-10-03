//page view script
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        console.log('DOM Complete.')
    }
    if (document.readyState === 'interactive') {
        console.log('DOM interactive.')
    }
};


document.addEventListener('click', function (event) {
    console.log(event.target.tagName+"  "+ event.target.id+"  "+event.target.value);
});

//c = document.getElementById()
// $("button").click(function() {
//     alert(this.id); // or alert($(this).attr('id'));
// });


// $(document).ready(function(){

//     alert("Hi")

//   });