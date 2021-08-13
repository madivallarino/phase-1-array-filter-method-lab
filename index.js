// Code your solution here
function findMatching(driver, stuff){
    return driver.filter ( possibleMatch => 
        possibleMatch.toLowerCase()=== stuff.toLowerCase())
}

function fuzzyMatch(driver, moreStuff) {
    return driver.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(moreStuff.toLowerCase()) === 0
    )
  }
  
  function matchName(driver, otherStuff) {
    return driver.filter( record => record.name === otherStuff)
  }

  