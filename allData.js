const firstName = "Arwa"
const lastName = "Mahmoud"
const city = "mansoura"
const age = 20

module.exports = {
  fName : firstName,
  lName : lastName,
  city : city,
  age : age,
  func1 : mul
}

function mul(x, y){
  console.log(x * y)
}