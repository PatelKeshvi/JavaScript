let color = "white"
console.log("Before : ", color);



const OddPosition = (color) => {
    for (let i = 0; i < color.length; i++) {
        if (i % 2 !== 0) {
            console.log(color[i]);
        }
    }
}


console.log("After : ")
OddPosition(color)