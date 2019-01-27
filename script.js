document.getElementById('1').addEventListener("mousedown", function() {
    document.getElementById('btn').innerHTML = '<button>Or am I?</button>';
})
window.addEventListener("resize", function() {
    document.getElementById('rere').innerHTML = Math.random();
});
document.getElementById('box').addEventListener("change", function() {
    document.getElementById('age').innerHTML = '<p>OH! Old... :(</p>';
})
document.getElementById('4').addEventListener("mouseout", function() {
    document.getElementById('clearBtn').innerHTML = 'TRY NOW bwahaha';
})
document.getElementById('5').addEventListener("mouseover", function() {
    var bordertype = document.getElementById("putput").style.border;
            if (bordertype == "5px dotted green") {
                bordertype = "10px dashed red"
            } else {
                bordertype = "10px dashed red";
            }
            document.getElementById("putput").style.border = bordertype;
})
