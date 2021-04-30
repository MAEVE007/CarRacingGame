class Form{

    constructor(){
e
        

    }

    display () {
        
        var title = createElement("h1")

        title.html("Multiplayer Car Racing Game")
        title.position(130,0)

        var input = createInput("Enter Name")
        input.position(130,170)
        
        var button = createButton("Submit And Start")
        button.position(250,200)

        var greeting = createElement("h1")
        button.mousePressed(function(){
            
            input.hide()
            button.hide()

            var name = input.value();
            playerCount = playerCount+1;

            greeting.html("Hi!" + name +  "How are you?")

            greeting.position(130,170)


        })

    }

}