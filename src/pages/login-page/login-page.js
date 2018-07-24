import React, { Component } from 'react';
import { AppRegistry,Text, View, StyleSheet,Button } from 'react-native';
import { Constants } from 'expo';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

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
            <Wallpaper>
                <Logo />
                <Form />
                <ButtonSubmit navigation={this.props.navigation} />
                <View style={styles.containerCreate}>
                    <Button title={'Create User'} onPress={()=>navigate("Register",{})} >Create User</Button>
                    <Text style={styles.text}>Forgot Password?</Text>
                </View>
            </Wallpaper>
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
    containerCreate: {
        flex: 1,
        top: 65,
        width: DEVICE_WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-around',
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
