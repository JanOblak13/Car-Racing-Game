class Form{
    constructor(){
        this.title=createElement('h2');
        this.input=createInput("Name");
        this.button=createButton("Play");
        this.greeting=createElement('h2');
    }
   
    display(){
       
        this.title.html("Car Racing Game");
        this.title.position(130,0);

       
        this.input.position(150,160);
        this.button.position(250,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            var name = this.input.value();
            this.greeting.html("Welcome " + name);
            this.greeting.position(50,160);

        })


    }
}