import React, { Component } from 'react';
import { Container, Header, View, DeckSwiper, Drawer, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';
import SideBar from '../sidebar/sidebar';

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

 class Home extends Component {
    constructor() {
        super();
    }
     static navigationOption={
         title:'Home screen'
     }

    render() {

        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };

        var {params} = this.props.navigation.state;
        var {navigate} = this.props.navigation;
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        return (


            <View>

                {/*<Drawer*/}
                    {/*ref={(ref) => { this.drawer = ref; }}*/}
                    {/*content={<SideBar navigator={this.navigator} />}*/}
                    {/*onClose={() => this.closeDrawer()} >*/}



                {/*</Drawer>*/}

                <View style={{ height: 40 }}>
                    <Text>

                    </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Thumbnail style={{width: 50, height: 50}} source={{uri: uri}} />
                    <Thumbnail style={{width: 50, height: 50}} source={{uri: uri}} />
                    <Thumbnail style={{width: 50, height: 50}} source={{uri: uri}} />
                    <Thumbnail style={{width: 50, height: 50}} source={{uri: uri}} />
                </View>

                <View style={{ height: 100 }}>
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




