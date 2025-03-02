const images:{src:string; name:string;role:string}[]=[
    {src:"images/image1.png",name:"DANIEL JEBARAJ",role:"ceo"},
    {src:"images/image2.png",name:"CLAY BURCH",role:"Senior VP/Technical Support Adviso"},
    {src:"images/image3.png",name:"STEFAN HOENIG",role:"Chairman of the Board and President"},
    {src:"images/image4.png",name:"DAVIS JEBARAJ",role:"Senior VP"},
    {src:"images/image5.png",name:"SRILATHA RAJAMANI",role:"VP - Technical Support"},
    {src:"images/image6.png",name:"MARISSA KELLER OUTTEN",role:"VP - Business Development"},
    {src:"images/image7.png",name:"CHRISTIAN GROSSMANN",role:"VP - Sales"},
]
let currentIndex:number=0;
const imgElement=document.getElementById("slider") as HTMLImageElement;
const title=document.getElementById("title") as HTMLParagraphElement;
const role=document.getElementById("role") as HTMLParagraphElement;
const prev=document.getElementById("prev") as HTMLButtonElement;
const next=document.getElementById("next") as HTMLButtonElement;

const updateImage = () :void =>{
    // console.log(currentIndex);
    
    imgElement.src=images[currentIndex].src;
    title.textContent=images[currentIndex].name;
    role.textContent=images[currentIndex].role;
}
next.addEventListener("click",()=>{
    currentIndex=(currentIndex+1)%images.length
    updateImage();
})
prev.addEventListener("click",()=>{
    currentIndex=(currentIndex-1+images.length)%images.length;
    updateImage();
})
updateImage();