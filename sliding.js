let container=document.getElementById("slideContainer");
let containerElemenets=Array.from({length:9}).fill(0);


const srcArr=[];
function shuffleArr(arr){
    arr.sort(()=>Math.random() - 0.5);
}


for(let i=0;i<containerElemenets.length;i++){
    const childElement=document.createElement("div");
    childElement.id=`${i}`;
    childElement.className="childElement";
    container.appendChild(childElement);
    if(i<containerElemenets.length-1){
        srcArr.push(i+1);
    }
}

shuffleArr(srcArr);

for(let i=0;i<srcArr.length;i++){
    const imageElement=document.createElement("img");
    imageElement.src=`./images/${srcArr[i]}.jpg`;
    imageElement.id=`${srcArr[i]+9}`;
    imageElement.className="childElementImage";
    let divElements=document.querySelectorAll(".childElement");
    divElements[i].appendChild(imageElement)
}



document.querySelectorAll(".childElement").forEach((element,index)=>{
    element.addEventListener("click",()=>{
        let mem=element.firstChild;
        if((index+1)%3!==0 && container.children[index+1]!==undefined && container.children[index+1].children.length==0){
            element.removeChild(element.firstChild);
            container.children[index+1].appendChild(mem);
        }
        else if(index%3!==0 && container.children[index-1]!==undefined && container.children[index-1].children.length==0){
            element.removeChild(element.firstChild);
            container.children[index-1].appendChild(mem);
        }
        else if(container.children[index-3]!==undefined && container.children[index-3].children.length==0){
            element.removeChild(element.firstChild);
            container.children[index-3].appendChild(mem);
        }
        else if(container.children[index+3]!==undefined && container.children[index+3].children.length==0){
            element.removeChild(element.firstChild);
            container.children[index+3].appendChild(mem);
        }
    })
})




