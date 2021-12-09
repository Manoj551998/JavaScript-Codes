//mousemove,mouseup,mousedown Events
var a;
window.addEventListener("mousedown",()=>{
    console.log("mouse down")
    a=window.addEventListener("mousemove",print)
});
window.addEventListener("mouseup",()=>{
console.log("mouse up")
window.removeEventListener("mousemove",print)
})
function print()
{
    console.log("moving");
}
