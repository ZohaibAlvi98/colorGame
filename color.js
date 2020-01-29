var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var message = document.querySelector("#message");
var dummy = document.querySelector("dummy")
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var hintEnable;
var reset = document.querySelector("#reset")
var isEasy = false;
var easy = document.querySelector("#easy")
var hard = document.querySelector("#hard");
var hint = document.querySelector("#hint")
hint.disabled = false;
var j=0;


hint.addEventListener("click",function() {
    if(j==0)
    {
        j++;
    console.log("opt1 opt2")
    var opt1 = pickRandomColor();
    var opt2 = pickRandomColor();
    console.log(opt1)
    console.log(opt2)
    while(opt1 === pickedColor || opt1 === opt2)
    {
        opt1 = pickRandomColor();
        console.log("while opt2"+ opt1)
    }
    while(opt2 === pickedColor)
    {
        opt2 = pickRandomColor();
        console.log("while opt2" + opt2)
    }
    for(var i=0;i<colors.length;i++) {
        if(colors[i] === opt1)
        {
            console.log("i" + i)
            console.log("for here");
            console.log(squares[i])
            squares[i].style.backgroundColor = "#232323";
        }
        if(colors[i] === opt2)
        {
            console.log("i" + i)
            console.log("for here");
            console.log(squares[i])
            squares[i].style.backgroundColor = "#232323";
        }
    }
    console.log(squares)
    }
})


easy.addEventListener("click",function() {
    hint.disabled = true;
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    for(var i=0;i<squares.length;i++) {
        if(colors[i])
        {
            squares[i].style.display = "block"
        squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
    easy.classList.add("selected");   
    isEasy = true;
    hard.classList.remove("selected") 
})

hard.addEventListener("click",function() {
    j=0;
    hint.disabled = false;
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    for(var i=0;i<squares.length;i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block"
    }    
    easy.classList.remove("selected"); 
    isEasy = false;  
    hard.classList.add("selected") 
})

reset.addEventListener("click",function() {
     j=0;
    colors = generateRandomColors(numSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors"
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
    for(var i=0;i<squares.length;i++) {
        if(isEasy)
        {
         squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            hint.disabled = false;
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i];

        }   
    } 
})

for(var i=0;i<squares.length;i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {
       
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor)
        {
           
           
             message.textContent = "Correct";
             reset.textContent = "Play Again?"
             hint.disabled = true;
            changeColor(clickedColor);
        }  
        else
        {
            hint.disabled = true;
            this.style.backgroundColor = "#232323"
            message.textContent = "Try Again";
        }
    })

}

function changeColor(color) {
    for(var i=0;i<colors.length;i++)
    {
    squares[i].style.backgroundColor = color;
    h1.style.backgroundColor = color;
    squares[i].style.display = "block"
}
}

function pickRandomColor() {
   var random = Math.floor(Math.random() * colors.length);
   console.log(random);
   return colors[random];

}

function generateRandomColors(num) {
    var arr=[];

    for(var i=0;i<num;i++)
    {
     arr.push(randomColor());
    }
    return arr
}

function randomColor() {
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
    
}