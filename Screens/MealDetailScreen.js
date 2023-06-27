import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {useLayoutEffect} from "react";
import {MEALS} from "../Data/DummyData";
import MealDetails from "../Components/MealDetails";
import Subtiitle from "../Components/MealDetail/Subtiitle";
import List from "../Components/MealDetail/List";
import IconButton from "../Components/IconButton";

function MealDetailScreen({route,navigation}) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
   function headerButtonPressHandler(){
console.log("Pressed !");
   }
    useLayoutEffect(()=>{
      navigation.setOptions({
          headerRight:()=>{
              return <IconButton
                  icon='star'
                  color='white'
                  onPress={headerButtonPressHandler()}/>
          }
      });
    },[navigation,headerButtonPressHandler()])
    return (
        <ScrollView style={styles.rootContainer}>

            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}> {selectedMeal.title}</Text>
            <MealDetails affordability={selectedMeal.affordability} complexity={selectedMeal.complexity}
                         duration={selectedMeal.duration}
            textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
<Subtiitle>Ingredients</Subtiitle>
<List data={selectedMeal.ingredients}/>
           <Subtiitle> Steps</Subtiitle>

            <List data={selectedMeal.steps}/>
            </View>
            </View>
            </ScrollView>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    rootContainer:{
      marginBottom:32,
    },
    image: {
        width: '100%',
        height: 350,
    }, title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText:{
        color:'white'
    },
listContainer:{
        width:'80%'
},
    listOuterContainer:{
        alignItems:'center'
    }
})
