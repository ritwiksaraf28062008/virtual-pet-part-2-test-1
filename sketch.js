  //Create variables here
  var dog, happyDog, database, foodS, foodStock , dogimg;
  var food;
  var lastFed;


  function preload()
  {
    //load images here
    dogimg = loadImage("./images/dogImg.png");
    happyDog = loadImage("./images/dogImg1.png")
  }

  function setup() {
    canvas = createCanvas(displayWidth - 50,displayHeight - 200);
    database = firebase.database()
    
    
    ;
    dog = createSprite(450,250,30,50);
    dog.addImage( "normal" , dogimg);
    dog.scale = 0.3

    food = new Food();

    feed = createButton("Feed the dog")
    feed.position(700,95)

    addFood = createButton("Add Food")
    addFood.position(800,95)

    fedTime = database.ref("FeedTime")
    fedTime.on("value" , function(data){
      lastFed = data.val();
    });
  }




    

  function draw() { 
    background(46, 139, 87);

    food.display();

    feed.mousePressed(feedDog)
    addFood.mousePressed(addFoods)



    fill(255,255,254);
    textSize = (15)
    if(lastFed>=12){
      text("Last Fed : " + lastFed%12 + "PM" , 350,30)
    }
    else if(lastFed===0){
      text("Last Fed : 12 AM" , 350 , 30)
    }
    else{
      text("Last Fed : " + lastFed + "AM" , 350 , 30)
    }

    drawSprites();  
    //add styles here
    

  }


  function addFoods(){
    foodS++;
    database.ref("/").update({
      Food : foodS
    })
  }

  function feedDog(){
    dog.addImage(happyDog)

    food.updateFoodStock(food.getFoodStock()-1);
    database.ref("/").update({
      Food : food.getFoodStock(),
      FeedTime : hour
    })
  }


