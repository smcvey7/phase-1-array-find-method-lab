function superbowlWin(record){
    let foundItem = record.find(entry => entry.result === 'W')
    if (foundItem === undefined) {
      return undefined
    } else {
      return foundItem.year
    }
  }