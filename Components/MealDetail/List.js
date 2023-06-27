import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function List  ({data})  {
  return  data.map((dataPoint) => (
      <View key={dataPoint}>
      <Text
      >{dataPoint}</Text>
      </View>));

}

export default List

const styles = StyleSheet.create({
listedItem:{
    borderRadius:6,
    paddingHorizontal:8,
    paddingVertical:4,
    marginVertical:8,
    marginHorizontal:12,
    backgroundColor:'#e2b497'
},
    itemText:{
    color:'#351401',
        textAlign:'center'
    }
})