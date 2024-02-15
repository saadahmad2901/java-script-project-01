const buttons = document.querySelectorAll(`.button`)
// console.log(button);
const body = document.querySelectorAll(`body`)
// console.log(body)
buttons.forEach(function (button) {
console.log(button)


button.addEventListener('click',function(event){
    body[0].style.backgroundColor= event.target.id
})
});
