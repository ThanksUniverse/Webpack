import "./styles.scss";
import img from "./img.jpg";

function rootStyle() {
	const elemRoot = document.getElementById("root");
	elemRoot.classList.add("container");
}

function titleComponent() {
	const elemH1 = document.createElement("h1");
	elemH1.innerHTML = "Hello World!";
	elemH1.classList.add("title");
	return elemH1;
}

function ImgComponent() {
   const elemImg = new Image(1200, 800);
	elemImg.src = img;
	elemImg.classList.add("img");
	elemImg.setAttribute("id", "img");
	return elemImg;
}

function darkMode() {
   document.body.classList.toggle('dark')
}

rootStyle();
document.body.appendChild(titleComponent());
document.body.appendChild(ImgComponent());
document.getElementById("img").onclick = function() {darkMode()};
//CTRL F5 to force reload
