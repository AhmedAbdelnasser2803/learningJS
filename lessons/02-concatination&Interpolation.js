//concatenation and intepolation
var firstItem = "chair"
var price = 50
var printMessage = "you can buy "                           //concatination
                    +firstItem
                    +" by "
                    +price;
console.log(printMessage)
var printMessage2 = `you can buy ${firstItem} by ${price}`  //interpolation
console.log(printMessage2)

