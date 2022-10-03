import { View, Text, Image } from 'react-native'
import React from 'react'
import { EthPrice } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsBid = ({bid}) => {
  
  return (
   <View style={{
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:SIZES.base,
    paddingHorizontal:SIZES.base*2
    }}>
    <Image
    source={bid.image}
    resizeMode = "contain"
    style={{width:48, height:48}} 
    />

    {/* Another View */}
    <View>
      <Text style={{
        fontFamily:FONTS.font1,
        fontSize:FONTS.small,
        color:COLORS.primary
      }}>
        Bid Placed by {bid.name}
      </Text>

      <Text style={{
        fontFamily:FONTS.font2,
        fontSize:SIZES.small-2,
        color:COLORS.secondary,
        marginTop:3,
      }}>
        {bid.date}
      </Text>

    </View>

    <View style={{marginTop:-20}}>
    <EthPrice price={bid.price}/> 
    </View>
     
   </View>

   
  )
}

export default DetailsBid