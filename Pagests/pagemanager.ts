import {loginpage} from "../Pagests/loginpage.ts"
import {producticon} from "../Pagests/productpage.ts"
import {shoppingcart} from "../Pagests/cartpage.ts"
import {checkout} from "../Pagests/checkout.ts"
import { Page } from "@playwright/test"

export class pagemanager{
    //page : Page
    lp:loginpage
    pi:producticon
    sc:shoppingcart
    ck:checkout
    constructor(page : Page){
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