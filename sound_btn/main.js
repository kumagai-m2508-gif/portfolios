console.log("main.js!!");

window.onload = ()=>{
	console.log("onload!!");

	// JavaScriptここから
	//Howler.jsでサウンドオブジェクトを作る処理
	const snd01 = new Howl({
		src: "./sounds/se01.mp3",
		loop: false,
		volume: 1.0
	});
	//2つ目
	const snd02 = new Howl({
		src: "./sounds/se02.mp3"
	})
	//3つ目
	const snd03 = new Howl({
		src: "./sounds/se03.mp3"
	})

	
//4つ目
	const snd04 = new Howl({
		src: "./sounds/bgm.mp3"
	})
//5つ目
const snd05 = new Howl({
	src: "./sounds/bzm10.mp3"
})
//6つ目
const snd06 = new Howl({
	src: "./sounds/mgzn.mp3"
})
//7つ目
const snd07 = new Howl({
	src: "./sounds/battou.mp3"
})
//8つ目
const snd08 = new Howl({
	src: "./sounds/bk.mp3"
})
//9つ目
const snd09 = new Howl({
	src: "./sounds/itgk.mp3"
})
//10つ目
const snd10 = new Howl({
	src: "./sounds/ju.mp3"
})
//11つ目
const snd11 = new Howl({
	src: "./sounds/jukmer.mp3"
})
//12つ目
const snd12 = new Howl({
	src: "./sounds/kn.mp3"
})

	//ボタンを取得して、クリックイベントを付ける処理
	const btn01 = document.querySelector("#btn01");
	console.log(btn01);//とれているか確認！！
	btn01.addEventListener("click",()=>{
		console.log("btn01が押されたよ");
		snd01.play();//音を鳴らす！
	});
	//2つ目
	const btn02 = document.querySelector("#btn02");
	btn02.addEventListener("click",()=>{
		snd02.play();
	})
	//3つ目
	const btn03 = document.querySelector("#btn03");
	btn03.addEventListener("click",()=>{
		snd03.play();
	})

	//stop
	const btnstop = document.querySelector("#btnstop");
	btnstop.addEventListener("click",()=>{
		snd04.stop();
		})

	//4つ目
	const btn04 = document.querySelector("#btn04");
	btn04.addEventListener("click",()=>{
		snd04.play();
	})

	//stop
	const btnstop2 = document.querySelector("#btnstop2");
	btnstop2.addEventListener("click",()=>{
		snd05.stop();
		})

	//5つ目
	const btn05 = document.querySelector("#btn05");
	btn05.addEventListener("click",()=>{
		snd05.play();
	})
	//6つ目
	const btn06 = document.querySelector("#btn06");
	btn06.addEventListener("click",()=>{
		snd06.play();
	})
	//7つ目
	const btn07 = document.querySelector("#btn07");
	btn07.addEventListener("click",()=>{
		snd07.play();
	})
	//8つ目
	const btn08 = document.querySelector("#btn08");
	btn08.addEventListener("click",()=>{
		snd08.play();
	})
	//9つ目
	const btn09 = document.querySelector("#btn09");
	btn09.addEventListener("click",()=>{
		snd09.play();
	})
	//10つ目
	const btn10 = document.querySelector("#btn10");
	btn10.addEventListener("click",()=>{
		snd10.play();
	})
	//11つ目
	const btn11 = document.querySelector("#btn11");
	btn11.addEventListener("click",()=>{
		snd11.play();
	})
//12つ目
const btn12 = document.querySelector("#btn12");
btn12.addEventListener("click",()=>{
	snd12.play();
})

}