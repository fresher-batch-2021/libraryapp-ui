const data={
    "_id": "c853d77aeba42e19309b8c36408b390d",
    "_rev": "10-85a1df203b51a35d054d6ce2a2d573ee",
    "name": "nivi",
    "email": "nivi@gmail.com",
    "password": "Niveditha98",
    "role": "USER",
    "appliedJobs": [
      {
        "companyName": "accenture",
        "skills": "angular",
        "appliedDate": "16-09-2021",
        "status": "Rejected"
      },
      {
        "companyName": "Tcs",
        "skills": "javascript",
        "appliedDate": "16-09-2021",
        "status": "Applied"
      },
      {
        "companyName": "ibm",
        "skills": "javascript",
        "appliedDate": "16-09-2021",
        "status": "Applied"
      },
      {
        "companyName": "HCL",
        "skills": "javascript",
        "appliedDate": "16-09-2021",
        "status": "Applied"
      },
      {
        "companyName": "freshworks",
        "skills": "javascript",
        "appliedDate": "16-09-2021",
        "status": "Applied"
      },
      {
        "companyName": "accenture",
        "skills": "angular",
        "appliedDate": "20-09-2021",
        "status": "Applied"
      }
    ]
  }
function test(){
 
let content=''
for(let datas of data.appliedJobs){
    console.log(datas)
    content=content+`<tr><td>${datas.companyName}</td> <td>${datas.status}</td><td>`
    if(datas.status=='Applied'){
        console.log('hi')
        content=content+`<button> Accept</button>&nbsp;<button>reject</button>`;
    }else if(datas.status==="Rejected"){
        content=content+`<button> Accept</button>`;
    }
    content += "</td></tr>";

}
document.querySelector("#tabledata").innerHTML=content
}
test()