import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Header, Easing, Animated
} from 'react-native'
import Swiper from 'react-native-swiper';
import DatePicker from 'react-native-datepicker';
import Autocomplete from 'react-native-autocomplete-input';
const { width } = Dimensions.get('window')
const dog = require('../../images/dog.png');
const cat = require('../../images/cat.png');
const fish = require('../../images/fish.png');
const female = require('../../images/female.png');
const male = require('../../images/male.png');

const puppy = require('../../images/puppy.png');
const average = require('../../images/average.png');
const old = require('../../images/old.png');
const horse = require('../../images/horse.png');
const rabbit = require('../../images/rabbit.png');
const bird = require('../../images/bird.png');
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    box: {
        flex: 1,
        justifyContent: 'center',
        height: 100,
    },
    box2: {
        flex: 1,
        justifyContent: 'center',
        height: 100,

    },
    box3: {
        flex: 1,
        justifyContent: 'center',
        height: 100,

    },
    two: {
        flex: 2
    },

    container: {
        flex: 1
    },

    wrapper: {
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        marginBottom: 10
    },
    error: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color:'red',
        fontSize: 20,
        marginBottom: 10
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },

    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: DEVICE_WIDTH - 40,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: '#ffffff',
    },
    age: {
        width: DEVICE_WIDTH - 40,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        color: '#ffffff',
    },
});

export default class extends Component {


    constructor(props) {
        super(props);
        this.state = {
            type: '',
            petName:'',
            ageType:'',
            birthdate:'',
        };
        //this.showPass = this.showPass.bind(this);
    }

    _onPress(type) {

      console.log('onpress',type)

        // this.setState({
        //     type:type
        // })

    }

    _filterData(query){

    }
    render () {

        let errorMessage

        if(this.state.type = ''){
            errorMessage = 'Please select your pet type'
        }

        const { query } = this.state;
        const data = this._filterData(query)
        return (
            <View style={styles.container}>
                <Swiper style={styles.wrapper} height={200} showsButtons={true}  horizontal={true}
                        onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}>
                    <View style={styles.container}>

                        <View style={{ height: 100 }}>
                            <Text style={styles.text}>
                                 Select your pet type
                            </Text>
                            <Text style={styles.error}>
                                {errorMessage}
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.box, styles.box2]}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={()=>this._onPress('dog')}
                                    activeOpacity={1}>
                                    <Image source={dog} style={styles.image} />
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.box, styles.box2]}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={()=>this._onPress('cat')}
                                activeOpacity={1}>
                                <Image source={cat} style={styles.image} />
                            </TouchableOpacity>
                        </View>
                        </View>

                        <View  style={styles.row}>
                            <View style={[styles.box, styles.box2]}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={()=>this._onPress('fish')}
                                    activeOpacity={1}>
                                    <Image source={fish} style={styles.image} />
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.box, styles.box2]}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={()=>this._onPress('bird')}
                                    activeOpacity={1}>
                                    <Image source={bird} style={styles.image} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.box, styles.box2]}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={()=>this._onPress('horse')}
                                    activeOpacity={1}>
                                    <Image source={horse} style={styles.image} />
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.box, styles.box2]}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={()=>this._onPress('rabit')}
                                    activeOpacity={1}>
                                    <Image source={rabbit} style={styles.image} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.slide2}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Your pet name'}
                            secureTextEntry={this.props.secureTextEntry}
                            autoCorrect={this.props.autoCorrect}
                            autoCapitalize={this.props.autoCapitalize}
                            returnKeyType={this.props.returnKeyType}
                            placeholderTextColor="white"
                            underlineColorAndroid="transparent"
                            onChang={(text) => this.setState({petName:text})}
                            value={this.state.petName}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <View style={styles.row}>
                            <View style={[styles.box, styles.box2]}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={()=>this.setState({gender:'female'})}
                                    activeOpacity={1}>
                                    <Image source={female} style={styles.image} />
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.box, styles.box2]}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={()=>this.setState({gender:'male'})}
                                    activeOpacity={1}>
                                    <Image source={male} style={styles.image} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.slide3}>
                        <View style={styles.row}>
                            <View style={[styles.box, styles.box2]}>
                                <TouchableOpacity
                                    onPress={()=>this.setState({ageType:'puppy'})}
                                    activeOpacity={1}>
                                    <Image source={puppy} style={styles.image} />
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.box, styles.box2]}>
                                <TouchableOpacity
                                    onPress={()=>this.setState({ageType:'average'})}
                                    activeOpacity={1}>
                                    <Image source={average} style={styles.image} />
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.box, styles.box3]}>
                                <TouchableOpacity
                                    onPress={()=>this.setState({ageType:'old'})}
                                    activeOpacity={1}>
                                    <Image source={old} style={styles.image} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <DatePicker
                                style={{width: 200}}
                                date={this.state.birthdate}
                                mode="date"
                                placeholder="select his birthdate"
                                format="YYYY-MM-DD"
                                minDate="2016-05-01"
                                maxDate="2016-06-01"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36
                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => {this.setState({birthdate: date})}}
                            />

                        </View>
                    </View>

                    <View style={styles.slide3}>


                        <View style={styles.row}>
                            <Autocomplete
                                data={data}
                                defaultValue={query}
                                onChangeText={text => this.setState({ query: text })}
                                renderItem={item => (
                                    <TouchableOpacity onPress={() => this.setState({ query: item })}>
                                        <Text>{item}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>


                    </View>
                </Swiper>

            </View>
        )
    }
}
