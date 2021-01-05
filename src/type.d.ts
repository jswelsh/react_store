type IProduct = {
  company:string
  count:number
  id:number
  img:string
  inCart:boolean
  info:string
  price:number
  title:string
  total:number
}

type ContextType = {
  products:IProduct[]
  detailProduct:IProduct
  cart:IProduct[]
  cartSubTotal:number
  cartTax:number
  cartTotal:number
  handleDetail:(id:number) => void
  addToCart:(id:number) => void
  increment:(id:number) => void
  decrement:(id:number) => void
  removeItem:(id:number) => void
  clearCart:() => void
}