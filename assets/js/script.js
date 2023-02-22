
"use strict"


let uploadIcon = document.querySelector("i")

let table = document.querySelector(".table")

let item = document.querySelector(".upload-area")



item.ondragover= (e) =>{

    e.preventDefault();
    
}

item.addEventListener("dragover",function(e){
    e.preventDefault();
})


item.addEventListener("drop", function (e) {

    e.preventDefault();

    for (const file of e.dataTransfer.files) {
        let reader = new FileReader();

        reader.onloadend = (event) => {

            let base64 = (event.currentTarget.result)

            table.innerHTML += `<tr>
            <th scope="row">${file.name}</th>
            <td>${file.size / 1024}</td>
            <td> <div class="img">
            <img src="${base64}" alt="">
            </div>
            </td>
            </tr> `
            // document.querySelector("img").setAttribute("src",base64)
        }

        reader.readAsDataURL(file)
    }
})

// const dropZone=document.querySelector('#dropzone');

// dropZone.addEventListener('dragover',(e)=>{
//     e.preventDefault();
// })


// dropZone.addEventListener('drop',(e)=>{
//     e.preventDefault();
//     for (let file of e.dataTransfer.files) {

//         if(file.type==='image/jpeg'){
//             upload(file);
//         }
        
//     }
// })

