class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2')
        title.html("Car Racing Game")
        title.position(200,200);
        var input=createInput("Name")
        input.position(200,210)
        var button=createButton("GO")
        button.position(200,250)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playerCount=playerCount+1
            player.update(name)
            player.updateCount(playerCount)
            var greeting= createElement('h3')
            greeting.html("hello! "+name)
            greeting.position(200,210)
        })
    }
}