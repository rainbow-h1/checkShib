const axios=require("axios")
const bot=require("./index")
  
const check=async ()=>{
   try {
    let res=await axios.get("https://shiboshis.shibaswap.com/")
    //http://shiboshis.shibaswap.com/
    const length=res.data.length
    console.log(length)
    if(length!==1847){
        console.log("开抢！！！！！！！！！！")
        bot.sendMessage("-1001620520858", "https://shiboshis.shibaswap.com/\n开枪!");
    }
   } catch (error) {
       console.log(error)
   }
}
setInterval(() => {
    check()
}, 5000);