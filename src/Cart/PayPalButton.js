import React from 'react'
import { ProductContext } from '../context'
import { useHistory } from "react-router-dom"
import { /* PayPalScriptProvider, */ PayPalButtons } from "@paypal/react-paypal-js"

const PayPalButton = () => {
  const { clearCart } = React.useContext(ProductContext) /* as ContextType */
  let history = useHistory()
  return (
    <div>
        {/* {isPending ? <div className="spinner" /> : null} */}
        <PayPalButtons
          style={{ color: "blue", shape: "pill", label: "pay", height: 48 }}
          onApprove={()=>{
            clearCart()
            history.push('/')
        }}
        />
    </div>
  )
}
export { PayPalButton }