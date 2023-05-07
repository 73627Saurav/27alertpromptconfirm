alert("Enter the value of number!")
let num = prompt("Enter the number here", "578")
num = Number.parseInt(num)
alert("You entered number of type: " + (typeof num))

let write = confirm("Do you want to write it to the page?")
if (write) {
  document.write(num)
}
else {
  document.write("Please allow me to write!")
}