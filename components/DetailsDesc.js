import { View, Text, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { EthPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  return (
    <>
    <View style={{display:'flex', flexDirection:'row'}}>

    <View style={{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
    }}>

      <NFTTitle 
       title={data.name}
       subTitle={data.creator}
       titleSize={SIZES.extraLarge}
       subTitleSize={SIZES.font}
      />
      </View>

      <View style={{position:'absolute', right:10, top:5}}>
        <EthPrice price={data.price}/>
      </View>
      
    </View>
    

      
      

      <View style={{marginVertical: SIZES.extraLarge*1.2}}>
          <Text style={{
            fontSize:SIZES.font,
            fontFamily:FONTS.font1,
            color:COLORS.primary
          }}>
            Description
          </Text>

          <View style={{ marginTop:SIZES.base }}>
              <Text style={{
                fontSize:SIZES.font,
                fontFamily:FONTS.font2,
                color:COLORS.secondary,
                lineHeight:SIZES.large
              }}>
                {text}
                {!readMore && '...'}
                <Text style={{
                   fontSize:SIZES.small,
                   fontFamily:FONTS.font3,
                   color:COLORS.primary
                }}
                onPress={()=>{
                  if(!readMore){
                    setText(data.description)
                    setReadMore(true);
                  }
                  else{
                    setText(data.description.slice(0, 100))
                    setReadMore(false);
                  }
                }}
                >
                  {readMore ? 'Show Less': 'Read More'}
                </Text>
              </Text>
              
          </View>

      </View>
    </>
  )
}

export default DetailsDesc