class Game{

constructor()
{
// Add the properties
}
// read the state of the game from the firebase 


// Reading the state
getState(){
var gameStateLocation = database.ref('gameState');
gameStateLocation.on("value",function(data){
  gameState = data.val();
});

} 
// Updating the state of the game when player are logging in the form
update(state)
{
  database.ref('/').update({
    gameState : state
  })
}

start()
{
  if(gameState === 0)
  {
    player = new Player()
    form = new Form()
    form.display()
    player.getCount()
  }
}


}