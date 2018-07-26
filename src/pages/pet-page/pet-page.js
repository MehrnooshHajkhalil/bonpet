import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, View } from 'native-base';
import { createStackNavigator } from 'react-navigation';

class Pet extends React.Component {


    Next(){

        //here register user and navigate to sliders

        var {navigate} = this.props.navigation;
        navigate("Home",{})
    }
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



 export default Pet




