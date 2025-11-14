window.promises = [];
let op = document.getElementById("output");
// Do not change the code above this
// add your promises to the array `promises`
let p1 = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("P1 Resolved")
	},1000)
});
let p2 = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("P2 Resolved")
	},2000)
});
let p3 = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("P3 Resolved")
	},3000)
});
let p4 = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("P4 Resolved")
	},4000)
});
let p5 = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("P5 Resolved")
	},5000)
});

Promise.any([p1,p2,p3,p4,p5]).then(res=>{
	return op.textContent=res;
})
