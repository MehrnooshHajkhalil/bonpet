import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';


class Register extends Component {
    render(){

        var {navigate} = this.props.navigation;
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item fixedLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel >
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel last >
                            <Label>Repeat password</Label>
                            <Input />
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}



 export default Register
