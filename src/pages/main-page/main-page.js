import React, { Component } from 'react';
import { AppRegistry,Text, View, StyleSheet,Button } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from "react-navigation";


 class Home extends Component {
    constructor() {
        super();
    }
     static navigationOption={
         title:'Home screen'
     }

    render() {
        var {params} = this.props.navigation.state;
        var {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>
                   HomePage
                </Text>

                <Text>
                    Param is :{params.name}
                </Text>
                <Button title={'Login'} onPress={()=>navigate("First",{})}>Go to about page</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#eee',
    },
    formView: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 8,
    },
    inputForm: {
        backgroundColor: '#fff',
        width: 320,
        height: 40,
        padding: 8,
        marginBottom: 8,
    },
    todoItem: {
        alignItems: 'center',
        padding: 8,
        width: 320,
        borderBottomWidth: 1.5,
        borderColor: '#e0e0e0',
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
    },
    todoText: {
        flex: 1,
    },
});

 export default  Home
