class Food{
    constructor(){
        this.image = loadImage("./images/Milk.png") 
        this.foodStock = 0;
        }

    display(){
        var x = 80
        var y = 100
 //       image(this.image , 220,200,50,50);
 
 if(foodS > 0){
        for(var i = 0 ; i<=foodS ; i++){
            x = x+50
            if(i%10===0){
                x = 80
                y = y+50
            }
        }
    }
    image(this.image , x , y , 60 , 60)


}

getFoodStock(){
    foodStock = database.ref('Food');
    foodStock.on("value" , (data)=>{
        this.foodStock = data.val();
    });
}

updateFoodStock(){
    if(x<=0){
        x = 0;
      }
      else{
        x = x-1
      }x  
      database.ref('/').update({
        Food : x
      })
}

deductFood(){

}

}