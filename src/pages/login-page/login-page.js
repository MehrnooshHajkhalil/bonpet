import React, { Component } from 'react';
import { AppRegistry,Text, View, StyleSheet,Button } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from "react-navigation";

 class Login extends Component {
    constructor() {
        super();
    }
    static navigationOption={
        title:'Login screen'
    }

    render() {
        var {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>
                    Login page
                </Text>
                <Button title="Go to Home page" onPress={()=>navigate("Second",{name:"Mehrnoosh"})}>Go to about Home</Button>
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

export default  Login
