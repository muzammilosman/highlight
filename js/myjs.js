
function showGetResult(){
    console.log("show result function")
    $.ajax({
       url: "http://35.244.47.26/highlight/api/Albums",
       type: 'get',
       success: function(data) {
           console.log("onload");
           console.log(data);
           var names = [];
           var images  = [];
           data.forEach(element => {
               console.log(element.images);
               names.push(element.name);
               element.images.forEach(img =>{
                images.push(img); 
               });
           });
           console.log(images);
           console.log(names);
           console.log(images[0]);
           imgprint=document.createElement('img');
           imgprint.setAttribute('src','../highlight/img/image-api/'+images[0]);
           document.getElementById("loadimage").appendChild(imgprint);
       } 
    });
}


var myfunc=function(imgsource){
    var gallery=document.getElementById("myclass");
    var upimage=document.createElement("img");
    var imgcont=document.createElement("div");
    imgcont.setAttribute("class","h_gallery_item");
    var containclass=document.createElement("div");
    containclass.setAttribute("class","col-lg-3 col-md-4 col-sm-6 ap");
    var upimage=new Image();
    upimage.src=imgsource;
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
    console.log("end")
    var albumname = document.getElementById("album").value;
    var data=JSON.stringify({"name":albumname});   //was "album" previously
    xhr.send(data);
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

