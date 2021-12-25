const images =[
    "0.jpg",
    "1.jpg",
    "2.jpg"
]
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //이미지 생성
bgImage.src = `img/${chosenImage}`; //소스 생성
document.body.appendChild(bgImage); //html의 body안에 포함시킴
