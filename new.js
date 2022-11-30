

let contentel = document.getElementById("content-el")
let saveel = document.getElementById("save-el")

let count = 0

function increment()
{
    count += 1
    contentel.textContent = count
}
function save()
{
    let string = count + " - "
    saveel.innerText += string
    contentel.textContent = 0
    count = 0

}