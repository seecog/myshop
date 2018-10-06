


export class DataService{
private message = '';
private messageType = "danger";
private cartItems = 0;

getcart(){
 const cart = localStorage.getItem('cart');
 return cart?JSON.parse(cart):[];
}

addToCart(item : string){
var cart = this.getcart();
if(cart.find(data=>JSON.stringify(data)==JSON.stringify(item))){
    return false;
}
else{
   cart.push(item);
   this.cartItems++;
   localStorage.setItem('cart',JSON.stringify(cart));
   return true;
}

}

clearCart(){
    localStorage.setItem('cart','[]');
    this.cartItems = 0;
}

error(message){
 this.messageType = "danger";   
 this.message = message;
}


success(message){
this.messageType = "success";
this.message = message;
}

warning(message){
this.messageType = "warning";    
this.message = message;
}
}