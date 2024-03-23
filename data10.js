const fs = require("fs")

const addPerson = (id, fname, lname, age, city) => {

  const allData = loadData()

  const duplictedData = allData.filter((obj) => {
    return obj.id === id 
  })

  //console.log(duplictedData)

  if (duplictedData.length == 0) {

    allData.push({
      id : id,
      fname : fname,
      lname : lname,
      age : age,
      city : city
    })
  
    saveAllData(allData)
  }else {
    console.log("ERROR in duplicted id")
  }
  }

  

//////////////////////////////////////

const loadData = () => {
  try {
    const DataJson = fs.readFileSync("data10.json").toString()
    return JSON.parse(DataJson)
  }
  catch {
    return []
  }

}

/////////////////////////////////////////

const saveAllData = (allData) => {
  const AllDataJson = JSON.stringify(allData)

  fs.writeFileSync("data10.json", AllDataJson)
}

////////////////////////////////////////////


const deleteData = (id) => {
  const allData = loadData()

  const dataToKeep = allData.filter((obj) => {
    return obj.id !== id 
  })

  saveAllData(dataToKeep)
}


 module.exports = {
  addPerson,
  deleteData
 }