import React from 'react';
import { View, Text, Image } from 'react-native'
// useNavigation is a hook which gives access to navigation object. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.
// useNavigation() returns the navigation prop of the screen it's inside.
import { useNavigation } from '@react-navigation/native';
import {COLORS, SIZE, SHADOWS, assets, SIZES} from '../constants';
import { CircleButton, RectButton } from './Button';
import { SubInfo, EthPrice, NFTTitle} from './SubInfo';

const NFTCard = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
    }}>
      
      {/* Another View inside above view */}
      <View style={{width:'100%', height:250}}>
        <Image
         source={data.image}
         resizeMode="cover"
         style={{
            width:'100%',
            height:'100%',
            borderTopLeftRadius:SIZES.font,
            borderTopRightRadius:SIZES.font
        }}
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10}/>

      </View>

      <SubInfo />

      {/* View showing NFT Title and subtitle*/}
      <View style={{width:'100%', padding: SIZES.font }}>
        <NFTTitle
         title={data.name}
         subTitle={data.creator}
         titleSize={SIZES.large}
         subTitleSize={SIZES.medium}
         />

         <View style={{
            marginTop: SIZES.font,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
         }}>
            <EthPrice price={data.price}/>
            <RectButton
             minWidth={120}
             fontSize={SIZES.font}
            //  Here we have to pass name of the stack and also passing the data of particular NFT
             handlePress={()=>navigation.navigate("Details", {data})}
            />
         </View>

      </View>

    </View>
  )
}

export default NFTCard