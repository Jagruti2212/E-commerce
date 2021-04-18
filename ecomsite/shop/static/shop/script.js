
    console.log('This is working');

    if(localStorage.getItem('cart')==null)
    {
        var cart = {};
    }
    else 
    {
        cart = JSON.parse(localStorage.getItem('cart'));

    }
    
    $(document).on('click','.atc',function(){
      console.log('The add to cart button is clicked');
      var item_id = this.id.toString();
      console.log(item_id);

      if(cart[item_id]!=undefined){
          quantity = cart[item_id][0] +1;
          cart[item_id][0] = quantity;
          cart[item_id][2] = cart[item_id][2] + parseFloat(document.getElementById("price"+item_id).innerHTML);

      }
      else{
          quantity=1;
          price = parseFloat(document.getElementById("price"+item_id).innerHTML);
          name = document.getElementById("nm"+item_id).innerHTML;
          cart[item_id]=[quantity,name,price];

      }
      console.log(cart);
      localStorage.setItem('cart',JSON.stringify(cart));
      document.getElementById("cart").innerHTML= "Cart("+Object.keys(cart).length +")";
      console.log();

     
    });

    
    DisplayCart(cart)
    function DisplayCart(cart)
    {
        var cartString = "";
        cartString += "<h6>This is your cart</h6>";
        var cartIndex = 1;
        let cartObject = JSON.parse(localStorage.getItem('cart'))
        for (item in cartObject){
            console.log(cartObject[item][0])
            console.log(cartObject[item][1])
            cartString += cartObject[item][1] + " Qty : " + cartObject[item][0] + "</br>";
        } 
      cartString += "<a href='/checkout'><button class='btn btn-warning' id='checkout'>Checkout</button></a>";
      document.getElementById("cart").setAttribute('data-content',cartString);
      $('[data-toggle="popover"]').popover()
    }
   
