let tulis = document.querySelectorAll(".banner .banner2-d1 ul li");
let zjian = document.querySelector(".banner2 .zjiantou");
let yjian = document.querySelector(".banner2 .yjiantou");
let dian = document.querySelectorAll(".banner2 .dianbox ul li");
let boxlis = document.querySelector(".banner2");
let lunboN = 0;
let lunboSize = dian.length - 1;
function lunboMove() {
	if (lunboN > lunboSize) {
		lunboN = 0;
	}
	if (lunboN < 0) {
		lunboN = lunboSize;
	}
	tulis.forEach(function(val, index) {
		val.classList.remove("active");
		dian[index].classList.remove("active");
	});
	tulis[lunboN].classList.add("active");
	dian[lunboN].classList.add("active");
}
let time = setInterval(function() {
	lunboN++;
	lunboMove();
}, 2000); 
boxlis.onmouseover = function() {
	clearInterval(time);
}
boxlis.onmouseout = function() {
	time = setInterval(function() {
		lunboN++;
		lunboMove();
	}, 2000);
}
dian.forEach((ele, key) => {
	ele.onmouseenter = function() {
		lunboN = key;
		lunboMove();
	}
}); 
yjian.onclick = function() {
	lunboN++;
	lunboMove();
}
zjian.onclick = function() {
	lunboN--;
	lunboMove();
}
//轮播结束
//限时抢购开始
let zlist = document.querySelector(".xianshi .bottom .left .zuojian");
let ylist = document.querySelector(".xianshi .bottom .left .youjian");
let bottomlist = document.querySelector(".xianshi .bottom .left ul");
let n = 0;
ylist.onclick = function() {
	n++;
	move2();
}
zlist.onclick = function() {
	n--;
	move2();
}
function move2() {
	if (n > 3) {
		n = 3;
		return;
	} else if (n < 0) {
		n = 0;
		return;
	} else {
		bottomlist.style.left = -n * 1000 + "px";
		ylist.style.cursor = "pointer";
		ylist.style.color = "#333333";
		zlist.style.cursor = "pointer";
		zlist.style.color = "#333333";
	}
}
//必抢清单开始
let bigbox = document.querySelector(".qingdan ul .tu1 .bottom ul");
let box = document.querySelector(".qingdan ul .tu1")
let N = 1;
let Time;                         //移动的定时器
let flag = true;                  //开关
let leftBtn = document.querySelector(".qingdan ul .tu1 .bottom .icz")
let rightBtn = document.querySelector(".qingdan ul .tu1 .bottom .icy")
let direction = 1;
let yuanlist = document.querySelectorAll(".qingdan ul .tu1 .bottom .dian-box div");
let size = yuanlist.length - 1;
start();
function move(){
	bigbox.style.left = -N*390+"px";
	bigbox.style.transition = "all 0.5s";
	yuanlist.forEach(function(val) {
		val.classList.remove("active");
		yuanlist[N].classList.add("active");
	});
}
bigbox.addEventListener("transitionend",function(){            //动画结束之后执行以下条件
	flag = true;
	if(N>=4){
		bigbox.style.transition = "none";
		bigbox.style.left = "-100%";
		N=1;
	}else if(N<=0){
		bigbox.style.transition = "none";
		bigbox.style.left = "-500%";
		N=5;
	}
})
leftBtn.onclick = function(){
	if(flag){
		direction = -1;
		flag= false;
		N--;
		move();
	}
}
rightBtn.onclick = function(){
	if(flag){
		direction = 1;
		flag = false;
		N++;
		move();
	}
}
for (let i = 0; i <= size; i++) {
	yuanlist[i].onclick = function() {
		N = i;
		move();
	}
}
function stop(){
	clearInterval(Time)
}
function start(){
	Time = setInterval(function(){
		N = N + direction;
		move()
	},1000)
}
box.onmouseover = stop;
box.onmouseout = start;
window.onblur = stop;
window.onfocus = start;


/* 零食选项卡开始 */
let toplist = document.querySelectorAll(".qingdan ul .tu3 .bottom .shang .list div");
let bottomlis = document.querySelectorAll(".qingdan ul .tu3 .bottom .xia .blist .item");
toplist.forEach((val, index) => {
	val.onclick = function() {
		toplist.forEach((ele, key) => {
			ele.classList.remove("active");
			bottomlis[key].style.display = "none";
		});
		toplist[index].classList.add("active");
		bottomlis[index].style.display = "block";
	}
});
/* 点击切换 */
let Zjianlist = document.querySelector(".qingdan ul .tu3 .bottom .xia .blist .one .icleft");
let Yjianlist = document.querySelector(".qingdan ul .tu3 .bottom .xia .blist .one .icright");
let bigboxlist = document.querySelector(".qingdan ul .tu3 .bottom .xia .blist .item .bigbox");
let dianlist = document.querySelectorAll(".qingdan ul .tu3 .bottom .xia .blist .one .dian-box div");
let M = 0;
let Size = dianlist.length - 1;
function move1() {
	if (M > Size) {
		M = Size;
		return;
	} else if (M < 0) {
		M = 0;
		return;
	} else {
		bigboxlist.style.left = -M * 390 + "px";
		Yjianlist.style.cursor = "pointer";
		Zjianlist.style.cursor = "pointer";
	}
	if (M == Size) {
		Yjianlist.style.cursor = "default";
	} else if (M == 0) {
		Zjianlist.style.cursor = "default";
	}
	dianlist.forEach(function(val) {
		val.classList.remove("active");
		dianlist[M].classList.add("active");
	});
}
Yjianlist.onclick = function() {
	M++;
	move1();
}
Zjianlist.onclick = function() {
	M--;
	move1();
}
for (let i = 0; i <= Size; i++) {
	dianlist[i].onclick = function() {
		M = i;
		move1();
	}
}
// 预告开始
let rightlist = document.querySelectorAll(".goodslist .right .shang .right ul li");
let leftlist = document.querySelectorAll(".goodslist .right .shang .left ul li");
rightlist.forEach((val, index) => {
	val.onmouseover = function() {
		rightlist.forEach((ele, key) => {
			ele.classList.remove("active");
			leftlist[key].style.display = "none";
		});
		rightlist[index].classList.add("active");
		leftlist[index].style.display = "block";
	}
});
//楼层跳转
let left = document.querySelectorAll(".zuoce ul li");
let right = document.querySelectorAll(".dazhongjian .louceng");
let root1 = document.documentElement;
let speed = 5;
let Maxscroll = root1.offsetHeight - window.innerHeight;
let flag1 = true;
let maodian = document.querySelector(".zuoce");
let shouji = document.querySelector(".goodslist");
left.forEach(function(val, index) {
	val.onclick = function() {
		flag1 = false;
		left.forEach(function(ele) {
			ele.classList.remove("active");
		});
		left[index].classList.add("active");
		if (root1.scrollTop + speed > right[index].offsetTop) {
			speed = -15;
		} else {
			speed = 15;
		}
		let time = setInterval(function() {
			if (root1.scrollTop + speed >= right[index].offsetTop && speed > 0) {
				root1.scrollTop = right[index].offsetTop;
				clearInterval(time);
				flag1 = true;
			} else if (speed < 0 && root1.scrollTop + speed <= right[index].offsetTop) {
				root1.scrollTop = right[index].offsetTop;
				clearInterval(time);
				flag1 = true;
			} else if (speed > 0 && Maxscroll <= root1.scrollTop) {
				clearInterval(time);
				flag1 = true;
			} else {
				root1.scrollTop = root1.scrollTop + speed;
			}
		},5);
	}
});
window.onscroll = function() {
	if (flag1) {
		right.forEach(function(val, index) {
			if (root1.scrollTop >= val.offsetTop && root1.scrollTop < val.offsetTop + val.offsetHeight) {
				left[index].classList.add("active");
			} else {
				left[index].classList.remove("active");
			}
		});
	}
	if (root1.scrollTop >= shouji.offsetTop + shouji.offsetHeight) {
		setTimeout(function() {
			if (root1 == document.documentElement && root1.scrollTop != 0) {
				maodian.style.display = "block";
			}
		}, 1000);
	} else if (root1.scrollTop < shouji.offsetTop + shouji.offsetHeight) {
		maodian.style.display = "none";
	}
}