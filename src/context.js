import React, { useState, useEffect } from "react"
import { storeProducts, detailProductData } from "./data"

const ProductContext = React.createContext({})
// Provider // consumer
  /* type IProductDetails = {
    id:number
    img:string
    info:string
    price:number
    title:string
    inCart:boolean
  }
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
  type IState = {
    products:[number]
    detailProduct:IProductDetails
    cart:[IProduct]
    modalOpen:boolean
    modalProduct:IProductDetails
    cartSubTotal:number
    cartTax:number
    cartTotal:number
  } */
/* class ProductProvider extends React.Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: true,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0

  componentDidMount() {
    this.setProducts()
  }
  setProducts = () => {
    let tempProducts = []
    storeProducts.forEach(item => {
      const singleItem = { ...item }
      tempProducts = [...tempProducts, singleItem]
    })
    this.setState(() => ({ products: tempProducts }))
  }

  getItem = id => {
    const product = this.state.products.find(item => item.id === id)
    return product
  }

  handleDetail = id => {
    const product = this.getItem(id)
    this.setState(() => ({ detailProduct: product }))
  }

  addToCart = id => {
    let tempProducts = [...this.state.products]
    const index = tempProducts.indexOf(this.getItem(id))

    const product = tempProducts[index]
    product.inCart = true
    product.count = 1

    const price = product.price
    product.total = price
    console.log(product)
    this.setState(
      () => ({products: tempProducts, cart: [...this.state.cart, product] }),
      () => this.addTotals()
    )
  }

  increment = id => {
    let tempCart = [...this.state.cart]
    const selectedProduct = tempCart.find(item => item.id === id)
    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]

    product.count = product.count + 1
    product.total = product.count * product.price

    this.setState(
      () => ({ cart: [...tempCart] }),
      () => this.addTotals()
    )
  }
  decrement = id => {
    let tempCart = [...this.state.cart]
    const selectedProduct = tempCart.find(item => item.id === id)
    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]

    product.count = product.count - 1
    if (product.count === 0) {
      this.removeItem(id)
    } else {
      product.total = product.count * product.price
      this.setState(
        () => ({ cart: [...tempCart] }),
        () => this.addTotals()
      )
    }
  }

  removeItem = id => {
    let tempProducts = [...this.state.products]
    let tempCart = [...this.state.cart]

    tempCart = tempCart.filter(item => item.id !== id)

    const index = tempProducts.indexOf(this.getItem(id))
    let removedProduct = tempProducts[index]
    removedProduct.inCart = false
    removedProduct.count = 0
    removedProduct.total = 0

    this.setState(
      () => ({
        cart: [...tempCart],
        products: [...tempProducts]}),
      () => this.addTotals()
    )
  }

    clearCart = () => {
    console.log("cart was cleared")
    this.setState(
      () => ({ cart: [] }),
      () => this.setProducts()
    )
  }
    addTotals = () => {
    let subTotal = 0
    this.state.cart.map(item => (subTotal += item.total))
    const tempTax = subTotal * 0.18
    const tax = parseFloat(tempTax.toFixed(2))
    const total = subTotal + tax
    this.setState(() => ({
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total
    }))
  }
  } */
const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([])
  const [detailProduct, setDetailProduct] = useState(detailProductData)
  const [cart, setCart] = useState([])
  const [cartSubTotal, setCartSubTotal] = useState(0)
  const [cartTax, setCartTax] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    setProductsHandler()
  },[])

  const setProductsHandler = () => {
    let tempProducts = []
    storeProducts.forEach(item => {
      const singleItem = { ...item }
      tempProducts = [...tempProducts, singleItem]
    })
    setProducts(tempProducts)
  }
  const getItem = id => {
    const product = products.find(item => item.id === id)
    return product
  }
  const handleDetail = id => {
    const product = getItem(id)
    setDetailProduct(product)
  }
  const addToCart = id => {
    let tempProducts = [...products]
    const index = tempProducts.indexOf(getItem(id))
    const product = tempProducts[index]

    product.inCart = true
    product.count = 1

    const price = product.price
    product.total = price
    console.log(product)

    setProducts(tempProducts)
    setCart([...cart, product])
    addTotals()
  }

  const increment = id => {
    let tempCart = [...cart]
    const selectedProduct = tempCart.find(item => item.id === id)
    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]

    product.count = product.count + 1
    product.total = product.count * product.price

    setCart([...tempCart])
    addTotals()
  }

  const decrement = id => {
    let tempCart = [...cart]
    const selectedProduct = tempCart.find(item => item.id === id)
    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]

    product.count = product.count - 1
    if (product.count === 0) {
      removeItem(id)
    } else {
      product.total = product.count * product.price
      setCart([...tempCart])
      addTotals()
    }
  }

  const removeItem = id => {
    let tempProducts = [...products]
    let tempCart = [...cart]

    tempCart = tempCart.filter(item => item.id !== id)

    const index = tempProducts.indexOf(getItem(id))
    let removedProduct = tempProducts[index]
    removedProduct.inCart = false
    removedProduct.count = 0
    removedProduct.total = 0

    setCart(...tempCart)
    setProducts([...tempProducts])
    addTotals()
  }

  const clearCart = () => {
    console.log("cart was cleared")
    setCart([])
    setProductsHandler()
  }

  const addTotals = () => {
    let subTotal = 0
    cart.map(item => (subTotal += item.total))
    const tempTax = subTotal * 0.18
    const tax = parseFloat(tempTax.toFixed(2))
    const total = subTotal + tax
    setCartSubTotal(subTotal)
    setCartTax(tax)
    setCartTotal(total)
  }

  return (
  <ProductContext.Provider
/*       cartProp={{
      cart: this.state.cart,
      increment: this.increment,
      decrement: this.decrement,
      removeItem: this.removeItem,
    }} */
    value={{
      products: products,
      detailProduct: detailProduct,
      cart: cart,
      cartSubTotal: cartSubTotal,
      cartTax: cartTax,
      cartTotal: cartTotal,
      handleDetail: handleDetail,
      addToCart: addToCart,
      increment: increment,
      decrement: decrement,
      removeItem: removeItem,
      clearCart: clearCart
    }}>
    {children}
  </ProductContext.Provider>
)

}
const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }