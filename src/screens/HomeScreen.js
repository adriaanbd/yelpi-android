import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../store/thunks/user';
import {navigate} from '../utils/navigationRef';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logoutUser());

  return (
    <View style={styles.container}>
  
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('AddNewPatientScreen')}
      >
        <Text style={{color:'#FFFFFF'}}>Add Patient</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('AddNewMedicationScreen')}
      >
        <Text style={{color:'#FFFFFF'}}>New medication</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogout}
      >
        <Text style={{color:'#FFFFFF'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#3030A0",
    justifyContent:'center',
    alignItems:'center'
  },
 button: {
   width: 200,
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 10,
  }
})

export default HomeScreen;
