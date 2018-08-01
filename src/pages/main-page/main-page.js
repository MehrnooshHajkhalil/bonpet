import React, { Component } from "react";
import { Container, Header, View, DeckSwiper,ImageBackground, Card, CardItem,Drawer, Thumbnail, Text, Left,Right, Body, Icon,Content ,Button, Title } from 'native-base';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';
import PetAdd from "../pet-page/pet-add-page";
import PetEdit from "../pet-page/pet-edit-page";
const  plus  = require('../../../public/plus.png')
const  homeIcon  = require('../../../public/logo.png')


const cards = [
    {
        text: 'Card One',
        name: 'One',
        image: require('../../../public/1.png'),
    },
    {
        text: 'Card Two',
        name: 'Two',
        image: require('../../../public/2.png'),
    },
    {
        text: 'Card Three',
        name: 'Three',
        image: require('../../../public/3.png'),
    },
];
 class Home extends React.Component {





    constructor() {
        super();
    }


     handlePetProfile =(id) => {
         var {navigate} = this.props.navigation;

         if(id ==undefined){
             navigate("PetAdd",{})
        }else{
             navigate("PetEdit",{id:id})
         }
     }

     static navigationOptions = {
         drawerLabel: 'Home',
         drawerIcon: ({ tintColor }) => (
             <ImageBackground
                 source={homeIcon}
                 style={[styles.icon, {tintColor: tintColor}]}
             />
         ),
     };
    render() {

        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

        return (
            <Container>
                <Content padder>


                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <TouchableHighlight onPress={ () => this.handlePetProfile(1) }>
                              <Thumbnail style={{width: 50, height: 50}} source={{uri: uri}} />
                            </TouchableHighlight>

                            <TouchableHighlight onPress={ () => this.handlePetProfile(2) }>
                              <Thumbnail style={{width: 50, height: 50}} source={{uri: uri}} />
                            </TouchableHighlight>
                            <TouchableHighlight onPress={ () => this.handlePetProfile(3) }>
                              <Thumbnail style={{width: 50, height: 50}} source={{uri: uri}} />
                            </TouchableHighlight>
                            <TouchableHighlight onPress={ () => this.handlePetProfile() }>
                              <Thumbnail  style={{width: 50, height: 50}} source={plus} />
                            </TouchableHighlight>
                        </View>

                        <View style={{ height: 40 }}>
                            <Text>

                            </Text>
                        </View>

                       <View style={{flex: 1}}>
                         <DeckSwiper
                            dataSource={cards}
                            renderItem={item =>
                                <Card style={{ elevation: 3 }}>
                                    <CardItem>
                                        <Left>
                                            <Thumbnail source={item.image} />
                                            <Body>
                                            <Text>{item.text}</Text>
                                            <Text note>NativeBase</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Image style={{ height: 300, flex: 1 }} source={item.image} />
                                    </CardItem>
                                    <CardItem>
                                        <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                        <Text>{item.name}</Text>
                                    </CardItem>
                                </Card>
                            }
                        />
                     </View>

                </Content>

            </Container>
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
    icon: {
        width: 24,
        height: 24,
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
