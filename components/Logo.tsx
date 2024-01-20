import React from 'react'
import { Image } from 'react-native'

const Logo = () => {
  return (
    <Image
      style={{width: 150, height: 50}}
      source={{
        uri: 'https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png',
      }}
    />
  )
}
export default Logo;