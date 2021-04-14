class Game{
    constructor(){}
getState(){
    var gs=database.ref('gameState')
    gs.on("value",function(data){
        gameState=data.val()
    })
}
 waiting() {
    if(gameState===0){
        form=new Form()
        form.display()
    }
}


}