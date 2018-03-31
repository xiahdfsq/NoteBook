function getRandomInt(min,max){
	return Math.floor(Math.random()*(max - min + 1) + min)
}
export function shuffle(arr){
	let newarr = arr.slice()
	let arrLength = newarr.length
	for(let i=0;i<arrLength;i++){
		let j = getRandomInt(0,i)
		let t = newarr[i]
		newarr[i]=newarr[j]
		newarr[j]=t
	}
	return newarr
}

export function debound(func,delay){
	let timer
	return function(...arg){
		if(timer){
			clearTimeout(timer)
		}
		timer = setTimeout(()=>{
			func.apply(this,arg)
		},delay)
	}
}