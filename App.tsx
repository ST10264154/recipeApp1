import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native';




const App = () => {
  const [BaseTextDisplay, setBaseTextDisplay] = useState('');
  const [IngriedantDisplay,setIngriedantDisplay] = useState('');
  const [BaseImageDisplay, setBaseImageDisplay] = useState(require("./Gallery/dumpling.jpg"));
  const [RecipeDisplay, setRecipeDisplay] = useState('');
  

  const onPressDumpling = () => {
    setBaseTextDisplay("Dumpling");
    setBaseImageDisplay(require("./Gallery/dumpling.jpg"));
    setIngriedantDisplay("(Ground pork, onions, garlic, soy sauce, sesame oil, salt, dumpling wrapper.)")
    setRecipeDisplay("Combine ground pork, onions, garlic, soy sauce, sesame oil, and salt in a bowl. Spoon a small amount of filling into each dumpling wrapper, fold over, and seal. Steam the dumplings for 5-10 minutes until cooked through. Serve with dipping sauce!")
  }


  const onPressRice = () => {
    setBaseTextDisplay("Fried Rice");
    setBaseImageDisplay(require("./Gallery/rice.jpg"));
    setIngriedantDisplay("(Rice, sauteed garlic, ginger, red chili paste, spices, minced vegetables, soy sauce, fish sauce, and lime juice.)")
    setRecipeDisplay("Prepare white rice. In a separate pan, sauteed garlic, ginger, and red chili paste in oil or ghee. When the spices are aromatic, add minced veggies of your choice and stir-fry for a few minutes. Add the rice to the pan and mix everything together, seasoning with soy sauce, fish sauce, and lime juice to taste.")
  }

  const onPresskimchi = () => {
    setBaseTextDisplay("Kimchi");
    setBaseImageDisplay(require("./Gallery/kimchi.jpeg"));
    setIngriedantDisplay("(Napa cabbage, salt, chili pepper powder, garlic, ginger, fish sauce, and brown sugar.)")
    setRecipeDisplay("Prepare the chili paste by pureeing chili peppers with garlic, ginger, and salt. Mix the paste with napa cabbage, other vegetables, and seasonings. Pack the mixture into jars and let it ferment at room temperature for a few days or weeks.")
  }

  const onPressstirfry = () => {
    setBaseTextDisplay("Stirfry");
    setBaseImageDisplay(require("./Gallery/stirfry.jpeg"));
    setIngriedantDisplay("(Vegetables, vegetable oil, soy sauce, ginger, garlic, spices, rice or noodles.)")
    setRecipeDisplay("Cut up any vegetables you like into bite-sized pieces and stir-fry over high heat with vegetable oil, soy sauce, ginger, garlic, and spices until tender. Serve with rice or noodles and enjoy!")
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={onPressDumpling} >
      <View style={styles.button}>
        <Text style={styles.buttonText}>Dumpling</Text>
        <Text style={styles.buttonText}>Price: R30</Text>
        <Image style={styles.food} source={require("./Gallery/dumpling.jpg")}></Image>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressRice} >
      <View style={styles.button}>
        <Text style={styles.buttonText}>Fried rice</Text>
        <Text style={styles.buttonText}>Price: R25</Text>
        <Image style={styles.food} source={require("./Gallery/rice.jpg")}></Image>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPresskimchi} >
      <View style={styles.button}>
        <Text style={styles.buttonText}>Kimchi</Text>
        <Text style={styles.buttonText}>Price: R20</Text>
        <Image style={styles.food} source={require("./Gallery/kimchi.jpeg")}></Image>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressstirfry} >
      <View style={styles.button}>
        <Text style={styles.buttonText}>Stirfry</Text>
        <Text style={styles.buttonText}>Price: R35</Text>
        <Image style={styles.food} source={require("./Gallery/stirfry.jpeg")}></Image>
      </View>
      </TouchableOpacity>


      <View>
        <Text style={styles.MainText}>{BaseTextDisplay}</Text>
        <Text style={styles.IngriediantText}>{IngriedantDisplay}</Text>
        <Text style={styles.RecipeText}>{RecipeDisplay}</Text>
        <Image style={styles.MainImg} source={BaseImageDisplay}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 1,
    height:1000,
  },
  button: {
    marginBottom: 30,
    height: 100,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    left: -100,
    color: 'white',
    fontSize: 30
  },

  food:{
    width: 100,
    height: 100,
    left: -250,
    top: -81,
  },
  MainImageDisplay: {
    width:100,
    height:100,
  },
  MainText: {
    fontSize:100,
  },
  MainImg:{
    width:200,
    height:200,
  },
  IngriediantText:{
    fontSize: 25,
    color: 'red',
  },
  RecipeText:{
    fontSize: 20,
    color: 'black',

  }
});

export default App;