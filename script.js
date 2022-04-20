

let productContainer = document.getElementById("product-container")

// get the datas from API

async function getDatas(){
 try {
  let datas = await fetch("https://fakestoreapi.com/products?sort=desc");
  console.log(datas)
 let fulldatas = await datas.json();
 console.log(fulldatas)
 generateHTML(fulldatas);
 if(!datas.ok) throw new Error("Failed to get the datas");
 } catch (error) {
  console.log(error.message);
 }
  
}

getDatas();


function generateHTML(results){
    let generatedHTML="";
    results.map((result)=>{
        generatedHTML+=` <div class="col">
        <div class="card mx-auto text-white bg-dark p-2">
          <img src="${result.image}" alt="Mobile image" class="card-img-top img">
      
          <div class="card-body">
           <h5 class="card-title">${result.title}</h5>
          <div class="card-text">${result.description}</div>
      
          <div class="card-text">
          <a href="#" class="text-warning mt-3">${result.rating.rate >4 ? `<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa-solid fa-star-half-stroke"></i>` : `<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa-solid fa-star-half-stroke"></i>`}  <span class="text-info"><u>${result.rating.count}</u></span></a>
         
      </div>

        <div class="card-text">
          <a href="#" class="btn btn-danger btn-lg active mt-2">Limited time deal</a>
        </div>
      
       <div class="card-text">
            <span class="rs text-danger fs-3 fw-bold"> <small><sup> <i class="fa-solid fa-dollar-sign"></i> </sup></small>${result.price}</span>
          </div>
      
         <div class="card-footer">
         <small class="text-white">FREE Delivery by My shoppy</small>
          </div>
       </div>
      </div>
      </div>  `
    })

    productContainer.innerHTML=generatedHTML;
}

