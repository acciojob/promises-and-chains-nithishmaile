//your JS code here. If required.
const myForm=document.getElementById("myForm");


function onSubmit(e){
	e.preventDefault()
	if(e.target[0].value=="" || e.target[1].value==""){
		alert("Please enter valid details")
	}
	const promise=new Promise((resolve,reject)=>{
		if(e.target[0].value>18){
			 setTimeout(()=>{
			 	resolve("Welcome, . You can vote.")
			 },4000)
		}else{
			setTimeout(()=>{
				reject("Oh sorry . You aren't old enough.")
			},4000)
		}
	})

	promise.then((output)=>{
		alert(`${output}`)
	}).catch((e)=>{
		alert(`${e}`)
	})
}

myForm.addEventListener("submit",onSubmit)
