import {loginpage} from "./loginpage.js"
import {producticon} from "./productpage.js"
import {shoppingcart} from "./cartpage.js"
import {checkout} from "./checkout.js"


export class pagemanager{
    constructor(page){
        this.lp = new loginpage(page)
        this.pi = new producticon(page)
        this.sc = new shoppingcart(page)
        this.ck = new checkout(page)

    }
    getLogin(){
        return this.lp
    }
    getProduct(){
        return this.pi
    }
    getCart(){
        return this.sc
    }
    getCheckout(){
        return this.ck
    }
}