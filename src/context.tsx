import React, { useState, useEffect, FC } from "react"
import { storeProducts, detailProductData } from "./data"

export const ProductContext = React.createContext<ContextType | null>(null)

const ProductProvider: FC<React.ReactNode> = ({children}) => {

  const [products, setProducts] = useState <IProduct[]> ([])
  const [detailProduct, setDetailProduct] = useState <IProduct> (detailProductData)
  const [cart, setCart] = useState <IProduct[]> ([])
  const [cartSubTotal, setCartSubTotal] = useState <number> (0)
  const [cartTax, setCartTax] = useState <number> (0)
  const [cartTotal, setCartTotal] = useState <number> (0)

  useEffect(() => {
    setProductsHandler()
  },[])

  const setProductsHandler = () => {
    let tempProducts: IProduct[] = []
    storeProducts.forEach(item => {
      const singleItem = { ...item }
      tempProducts = [...tempProducts, singleItem]
    })
    setProducts(tempProducts)
  }
  const getItem = (id:number) => (
    products.find(item => item.id === id))

  const handleDetail = (id:number) => {
    setDetailProduct(getItem(id)!)
  }

  const addToCart = (id:number) => {
    const tempProducts = [...products]
    const index = tempProducts.indexOf(getItem(id)!)
    let product = tempProducts[index]

    product.inCart = true
    product.count = 1
    product.total = product.price

    setProducts(tempProducts)
    setCart([...cart, product])
    addTotals()
  }

  const increment = (id:number) => {
    let tempCart = [...cart]
    const selectedProduct: IProduct = tempCart.find(item => item.id === id)!
    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]

    product.count = product.count + 1
    product.total = product.count * product.price
    setCart([...tempCart])
    addTotals()
  }

  const decrement = (id:number) => {
    let tempCart = [...cart]
    const selectedProduct: IProduct = tempCart.find(item => item.id === id)!
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

  const removeItem = (id:number) => {
    let tempProducts = [...products]
    let tempCart = [...cart]

    tempCart = tempCart.filter(item => item.id !== id)

    const index = tempProducts.indexOf(getItem(id)!)
    let removedProduct = tempProducts[index]
    removedProduct.inCart = false
    removedProduct.count = 0
    removedProduct.total = 0

    setCart([...tempCart])
    setProducts([...tempProducts])
    addTotals()
  }

  const clearCart = () => {
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
    value={{
      products,
      detailProduct,
      cart,
      cartSubTotal,
      cartTax,
      cartTotal,
      handleDetail,
      addToCart,
      increment,
      decrement,
      removeItem,
      clearCart
    }}>
    {children}
  </ProductContext.Provider>
)

}
const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }