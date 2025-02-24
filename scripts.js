console.log("Hello");

const container = document.querySelector(".container");
//const div = document.createElement("div");

for(let i=0;i<16;i++) {
    //const div1 = document.createElement("div");

    for(let j=0;j<16;j++) {
        const div2 = document.createElement("div");
        div2.classList.add("blocks");

        div2.style.width = Math.floor(700/16)-0.000001 + "px";
        div2.style.height = Math.floor(700/16)-0.000001 + "px";
        container.appendChild(div2);
    }
}

var blocks = document.querySelectorAll(".blocks");

blocks.forEach(function(block) {

    block.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = "black";
    })


});

const button = document.querySelector(".button");

button.addEventListener("click", (e) => {

    let numOfBlocks
    do {
        numOfBlocks = prompt("Enter number of blocks (Blocks*Blocks)", "16");
    } while(numOfBlocks>100);
   

    blocks.forEach(e => e.remove());

    for(let i=0;i<numOfBlocks;i++) {
        //const div1 = document.createElement("div");

        for(let j=0;j<numOfBlocks;j++) {
            const div2 = document.createElement("div");
            div2.classList.add("blocks");

            div2.style.width = Math.floor(700/numOfBlocks)-0.000001 + "px";
            div2.style.height = Math.floor(700/numOfBlocks)-0.000001 + "px";
            container.appendChild(div2);
        }
    }
    
    blocks = document.querySelectorAll(".blocks");

    blocks.forEach(function (block) {

        block.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = getRandomColor();
        })
    
    
    });

})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function hover(block) {

    block.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = getRandomColor();
    })


}