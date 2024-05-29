let userName = document.querySelector("#username")
let password = document.querySelector("#password")
let btn = document.getElementById ("btn")
let img = document.getElementById("img")
let pic = document.getElementById("pictre")

console.log(userName + password +btn);

async function logIn(){

    fetch(`https://665736d49f970b3b36c8673a.mockapi.io/img`, {
        method: 'POST',
        body: JSON.stringify({
          username : userName.value
          
          ,imgg : img.value
          

        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
    }
        
        




     

async function pord(){
    const response = await fetch('https://665736d49f970b3b36c8673a.mockapi.io/img');
    
    


    
    const products = await response.json();
    console.log(products);

    products.forEach(elm=>{
        let textt = document.createElement("p")
        let imgg =  document.createElement("img")
        let btn1 = document.createElement("button")

        
        
        imgg.style.width= "200px"
        imgg.src = elm.imgg
        btn1.innerText = "delete"
        btn1.addEventListener(`click`,async function deletee(){

            fetch(`https://665736d49f970b3b36c8673a.mockapi.io/img/${elm.id}`, {
                method: 'DELETE',
                body: JSON.stringify({
                  username : userName.value
                  
                  ,imgg : img.value
                  
        
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((json) => console.log(json))
            })

        textt.innerText = elm.username
        document.body.append(textt)
        document.body.append(imgg)
        document.body.append(btn1)


        
    




    })
 }




pord()

