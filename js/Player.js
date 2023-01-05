class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  getCount(){
    var playerCountRaf = database.raf("playerCount")
    playerCountRaf.on("value",(data)=>{
      playerCount = data.val()
    })

  }

  updateCount(count){
    database.playerCountRaf("/").update({
      playerCount:count
    })
     

  }
 }

