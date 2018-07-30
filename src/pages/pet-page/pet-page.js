import React, { Component } from 'react';
import { Container, Header, Content, Form, Item,ImageBackground, Input, Label, Button, Text, View } from 'native-base';
import { createStackNavigator } from 'react-navigation';
import {StyleSheet} from "react-native";
import {Constants} from "expo";
const  petIcon  = require('../../../public/logo.png')

class Pet extends React.Component {


    Next(){

        //here register user and navigate to sliders

        var {navigate} = this.props.navigation;
        navigate("Home",{})
    }

    static navigationOptions = {
        drawerLabel: 'Pet',
        drawerIcon: ({ tintColor }) => (
            <ImageBackground
                source={petIcon}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
    render(){


        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Pet page</Label>
                        </Item>

                        <Button onPress={this.Next} bordered info>
                            <Text>Next</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    }
});

 export default Pet




