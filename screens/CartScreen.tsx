import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import CommonButton from '../src/components/Common/CommonButton'
import cart from '../src/products.json'
import ProductInfo from '../src/components/Cart/ProductInfo'

const CartScreen = () => {
  const total = cart?.map((item) => item.price * item.quantity).reduce((curr, prev) => curr + prev, 0);
  return (
    <ScrollView >
      <View style={{padding:10, backgroundColor: "white"}}>
        <View style={{flexDirection: "row", alignItems: "center", gap: 5}}>
          <Text style={{fontSize:16, color: "black", fontWeight:"400"}}>Subtotal:</Text>
          <Text style={{fontSize:18, fontWeight: "bold", color: "black"}}>{total}</Text>
        </View>
        <Text style={{color: "black"}}>EMI details Available</Text>

        <View style={{marginTop: 10}}>
          <CommonButton label={`Proceed to (${cart?.length}) item`} outline={true}/>
        </View>
        <Text style={{height:2, borderBottomWidth:1, borderColor: "#D0D0D0", marginTop: 20}} />

        <View>
          {
            cart && cart.map((product, index) => 
              <ProductInfo
                key={index} 
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                image={product.image}
              />
            )
          }
        </View>
      </View>
    </ScrollView>
  )
}

export default CartScreen