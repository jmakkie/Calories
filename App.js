import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {Picker} from '@react-native-picker/picker';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [intensity, setIntensity] = useState(0);
  const [gender, setGender] = useState("m");
  const [result, setResult] = useState(0);

  const intensityLevels = Array();
    intensityLevels.push({label: "light", value: "1.3"});
    intensityLevels.push({label: "ususal", value: "1.5"});
    intensityLevels.push({label: "moderate", value: "1.7"});
    intensityLevels.push({label: "hard", value: "2"});
    intensityLevels.push({label: "very hard", value: "2.2"});

  const radio_props = [
    {label: 'Male', value: "m" },
    {label: 'Female', value: "f" }
  ];

  const weiCalc = () => {
    if(gender == "m"){
      setResult((879+10.2*weight)*intensity)
    } else {
      setResult((795+7.18*weight)*intensity)
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Weight</Text>
        <TextInput 
          placeholder="input weight" 
          value={weight.toString()} 
          onChangeText={text => setWeight(text)}
          keyboardType='numeric'
        />
      </View>
      <View>
        <Text>Intensity</Text>
        <Picker
          selectedValue={intensity}
          onValueChange={(itemValue) => setIntensity(itemValue)}
          >
          {intensityLevels.map((intensity, index) => (
            <Picker.Item key={index} label={intensity.label} value={intensity.value}/>
          ))}
        </Picker>
      </View>
      <View>
        <Text>Gender</Text>
        <RadioForm
            radio_props={radio_props}
            initial={0}
            onPress={(value) => (setGender(value))}
            />
        <Text>{result}</Text>
        <Button title="calculate" onPress={weiCalc}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
