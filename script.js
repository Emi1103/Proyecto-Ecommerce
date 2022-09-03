let products = [];
let total = 0;


function add (product,price) {
  console.log(product,price);
  products.push(product);

  swal("Prenda agregada!", "Ya puedes pasar por caja!", "success");

  total = total + price;
  if (document.getElementById('checkout').innerHTML = `Pagar $${total}`);
  setTimeout(() => {
    // Eliminar mensaje
    document.getElementById('checkout').innerHTML = 'Pagar';
}, 5000);
}

function pay(){
  
  swal({
    title: "Segura que quieres finalizar la compra?",
    text: (products.join(', \n')),
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Listo! Pagaste con dinero en cuenta!", {
        icon: "success",
      });
      
    } else {
      swal("Sigue agregando más prendas ❤️!");
    }
  });

  

}