function getdata(){
    console.log("btn clicked");


 //step 1
 var nel = new XMLHttpRequest();
 //step 2 
 nel.open("GET","https://jsonplaceholder.typicode.com/users",true);
 //step 3
 nel.send();
 //step 4
 nel.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        console.log(this.responseText)
        var data = JSON.parse(this.responseText);
        let val="";
        for(let i=0;i<data.length;i++){
            val+=`<tr><td>${data[i].name}</td>
            <td>${data[i].username}</td>
            <td>${data[i].address.city}</td></tr>`
            document.getElementById('txxx').innerHTML=val
        }
        }

 }

}
