let producto = parseInt(
    prompt(
      'Escoge el producto que deseas comprar: 1.Laptop - 2.Monitor - 3.Maiboard - 4.Memoria'
    )
  )
  let seguirComprando = true
  let totalCompra = 0
  let decision
  
  // clase producto
  class NewProduct{
    constructor(id,name,price,stock){
      this.id = id
      this.name = name;
      this.price = price;
      this.stock = stock
    }
  }
  const laptop = new NewProduct(1,'laptop',800,10);
  const monitor = new NewProduct(2,'monitor',400,20);
  const maiboard = new NewProduct(3,'maiboard',300,30);
  const memoria = new NewProduct(4,'memoria',100,25);

  
  
  while (seguirComprando === true) {
    if (producto === laptop.id) {
      totalCompra = totalCompra + laptop.price
      laptop.stock = laptop.stock-1
    } else if (producto === monitor.id) {
      totalCompra = totalCompra + monitor.price
    } else if (producto === maiboard.id) {
      totalCompra = totalCompra + maiboard.price
    } else if (producto === memoria.id) {
      totalCompra = totalCompra + memoria.price
    }
  
    decision = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No'))
    if (decision === 1) {
      producto = parseInt(
        prompt(
          'Escoge el producto que deseas comprar: 1.Laptop - 2.Monitor - 3.Maiboard - 4.Memoria'
        )
      )
    } else {
      seguirComprando = false
    }
  }
  
  const totalCompraConDescuento = descuento(totalCompra)
  alert(`El total de tu compra es ${totalCompraConDescuento}`)
  
  //1.Laptop(800) - 2.Monitor(350) - 3.Maiboard(200) - 4.Memoria(50)'
  
  function descuento(valor) {
    let descuento = 0
    if (valor <= 1000) {
      descuento = 0.10
    } else if (valor > 1000 && valor <= 2000) {
      descuento = 0.15
    } else {
      descuento = 0.20
    }
  
    let valorDescuento = valor * descuento
    let valorFinal = valor - valorDescuento
    return valorFinal
    }