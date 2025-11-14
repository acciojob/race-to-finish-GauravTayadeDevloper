window.promises = [];
let op = document.getElementById("output");
// Do not change the code above this
// add your promises to the array `promises`
for(let i=1;i<=5;i++)
	{
		let timer = Math.floor(Math.random()*5)+1;
		let p1 = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(`P${i} Resolved`)
	},timer * 1000)
	});	
		window.promises.push(p1);
	}


Promise.any(window.promises).then(res=>{
	return op.textContent=res;
})
