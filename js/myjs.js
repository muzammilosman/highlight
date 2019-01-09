var count=0;

function showGetResult(p){
    console.log("show result function")
    var names = [];
    var images  = [];
    document.getElementById("myclass2").innerHTML="";
    $.ajax({
       url: "http://35.244.47.26/highlight/api/Albums",
       type: 'get',
       success: function(data) {
           console.log("onload");
           console.log(data);
           
           data.forEach(element => {
               names.push(element.name);
               element.images.forEach(img =>{
                images.push(img); 
               });
           });
           console.log(images);
           console.log(names);
           console.log(images[0]);
           for(var i=0;i<3;i++){
                console.log("in for loop");
                var imgprint=document.createElement('img');
                imgprint.src = '../img/image-api/'+images[i];
                /*document.getElementById("loadimage").appendChild(imgprint);*/
                /* new append */
                var gallery=document.getElementById("myclass2");
                var containclass=document.createElement("div");
                containclass.setAttribute("class","col-lg-3 col-md-4 col-sm-6");
                var imgcont=document.createElement("div");
                imgcont.setAttribute("class","h_gallery_item");
                imgcont.append(imgprint);
                containclass.append(imgcont);
                gallery.append(containclass);
                
           }
        }
    });
     count=count+p;      
    
}


var myfunc=function(imgsource){
    var gallery=document.getElementById("myclass");
    var upimage=document.createElement("img");
    var imgcont=document.createElement("div");
    imgcont.setAttribute("class","h_gallery_item");
    var containclass=document.createElement("div");
    containclass.setAttribute("class","col-lg-3 col-md-4 col-sm-6 ap");
    var upimage=new Image();
    upimage=imgsource;
    imgcont.appendChild(upimage);
    containclass.appendChild(imgcont);
    gallery.appendChild(containclass);
}

var albumid="abc";

function createAlbum(){
    console.log("entry");
    const xhr= new XMLHttpRequest();
    xhr.open("POST","http://35.244.47.26/highlight/api/Albums/createAlbum",true);
    xhr.setRequestHeader("Content-type","application/json");
    xhr.withCredentials="true";
    xhr.onload=function(){
        console.log("onload");
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log("if statement");
        var json = JSON.parse(xhr.responseText);
        console.log(xhr.responseText);
        albumid=json.album.id;
        console.log(albumid);
        document.getElementById('albumid').value= albumid;
        
        }
    }
    console.log("end");
    var albumname = document.getElementById("album").value;
    var data=JSON.stringify({"name":albumname});   //was "album" previously
    xhr.send(data);
}

function existingAlbum(){
    console.log("existingalbum");
    $.ajax({
        url:"http://35.244.47.26/highlight/api/Albums",
        type:'get',
        success: function(data){
            var found1=false;
            data.forEach(element=>{
                if(element.name==document.getElementById("existingalbum").value){
                    found1=true;
                    foundid=element.id;
                    console.log("match found")
                }
            });
            if(found1!=true){
                alert("Album not found. Create new Album");
            }
            else{
                document.getElementById("albumid").value=foundid;
            }
        }    
    });
}





function uploadImage2(){
    var files1 = document.getElementById('file-select').files[0];
    var uploadButton = document.getElementById('upload-button');
    var imgData=new FormData();
    console.log("formdata created");
    imgData.append("images",files1);
    var xhr= new XMLHttpRequest();
    var url1="http://35.244.47.26/highlight/api/Albums/5c305958954c7b3d52be9795/uploadImage";
    xhr.open('POST',url1,true);
    console.log("open xhr");
    xhr.setRequestHeader("Content-type","application/json");
    xhr.withCredentials = "true";
    xhr.onload=function(){
        console.log("onload uploadimage");
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log("success");
        }
        else{
            console.log("error occurred");
        }
    }    
    console.log("end")
    xhr.send(imgData);
}

