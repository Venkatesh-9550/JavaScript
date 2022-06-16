fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline").then((data) => 
{
    console.log(data);

    return data.json();

}).then((objectData) => 

{
    

    console.log(objectData[0].title);

    let tableData = "";

    objectData.map((values) => 
    {

        tableData+= `<tr>

        <td>${values.id}</td>

        <td>${values.brand}</td>

         <td>${values.name}</td>

         <td>${values.price}</td>
          
          <td><img src="${values.image_link}"/></td>
          <td>${values.description}</td>
          <td>${values.rating}</td>



          <td>${values.rating}</td>
       </tr>`;

    });



    document.getElementById("table-body").

    innerHTML = tableData;

}).catch((err)=> {

    console.log(err);

})