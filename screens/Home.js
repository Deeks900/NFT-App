import React, {useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components'
import { NFTData, COLORS } from '../constants'
//View is like a basic div element
//SafeAreaView Make sure that app is fitting in the boundaries of device.Helpful for devices ith top-notch
//Flat list is like a map to render a list.It uses the concept of lazyLoading to save resources.It renders the list when screen is in view and removes it when screen is offview

const Home = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <FocusedStatusBar backgroundColor={COLORS.primary}/>

      <View style={{flex:1}}>

          {/* This View contains the NFT List */}
          <View style={{ zIndex: 0 }}>
              {/* List rendering cards */}

              {/* keyExtractor is used to provide unique keys to list */}
              {/* showsVerticalScrollIndicator is used to remove that ugly vertical scroll bar */}
              {/* ListHeaderComponent is used to place any component before the starting of this list */}
              <FlatList 
               data={NFTData}
               renderItem={({item})=><NFTCard data={item}/>}
               keyExtractor={(item)=>item.id}
               showsVerticalScrollIndicator={false}
               ListHeaderComponent={<HomeHeader />}
              />
          </View>

          {/*This view will be used to provide background color behind our NFT Card List*/}
          <View style={{
            position:'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}>

          {/* Dividing the screen into two colors using these two views.Cards will be shown above this background  */}
          <View style={{height: 300, backgroundColor: COLORS.primary}} />
          <View style={{flex:1, backgroundColor: COLORS.white}} />

          </View>

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    textStyles:{
        fontSize: 40,
        fontFamily: 'LibreBaskerville-Bold'
    }
})

export default Home