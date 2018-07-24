import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, View } from 'native-base';
import { createStackNavigator } from 'react-navigation';

class Register extends React.Component {


    Register(){

        //here register user and navigate to sliders

        // var {navigate} = this.props.navigation;
        // navigate("Slider",{name:"Mehrnoosh"})



    }
    render(){


        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Repeate password</Label>
                            <Input />
                        </Item>
                        <View style={{ height: 100 }}>
                            <Text>

                            </Text>
                        </View>
                        <Button onPress={this.Register} block>
                            <Text>Submit</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}



 export default Register




