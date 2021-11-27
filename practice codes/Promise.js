let test=new Promise((resolve,reject)=>{
let a=1+1;
if(a==2)
{
	resolve("success");
}
else
{
	reject("error");
}
})

test.then((message)=>{console.log("success message: "+message)})
	.catch((message)=>{console.log("errormessage: "+message)})
