import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {MEALS} from "../Data/DummyData";
import MealDetails from "../Components/MealDetails";
import Subtiitle from "../Components/MealDetail/Subtiitle";

function MealDetailScreen({route}) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    return (
        <View>

            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}> {selectedMeal.title}</Text>
            <MealDetails affordability={selectedMeal.affordability} complexity={selectedMeal.complexity}
                         duration={selectedMeal.duration}
            textStyle={styles.detailText}
            />
<Subtiitle>Ingredients</Subtiitle>

           <Subtiitle> Steps</Subtiitle>

            {selectedMeal.steps.map((step) => (<Text key={step}
            >{step}</Text>))}
        </View>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({
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

})
