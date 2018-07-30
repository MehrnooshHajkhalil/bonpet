import React, { Component } from 'react';
import { Container, Header, Content, Form, Item,ImageBackground, Input, Label, Button, Text, View } from 'native-base';
import {createStackNavigator, DrawerActions, NavigationActions} from 'react-navigation';
import {StyleSheet} from "react-native";
import {Constants} from "expo";
const  petIcon  = require('../../../public/logo.png')

class PetAdd extends React.Component {


    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
    }

    render(){


        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Pet add page</Label>
                        </Item>

                        <Button onPress={this.navigateToScreen('Home')} bordered info>
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

 export default PetAdd




