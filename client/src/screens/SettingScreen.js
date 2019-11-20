import React, { Component } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View, TouchableOpacity, Dimensions
} from 'react-native'
import {ListItem} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'  


class SettingScreen extends Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phoneNum: PropTypes.number.isRequired,
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    navigation: PropTypes.object.isRequired,
  }

  static defaultProps = {
    containerStyle: {},
  }

  state = {
      name: '',
      phone: '',
      image: ''
  }

  componentDidMount(){
    const { avatar, name, phoneNum } = this.props
    this.setState({
        name,
        phone: phoneNum,
        image: avatar
    })
  }

  list = [
    {
      title: 'Account Type',
      rightTitle: 'Dana User'
    },
    {
      title: 'Change Profile Picture',
      rightTitle: <Icon name="user"/>
    },
    {
      title: 'Change Name',
      rightTitle: this.state.name
    },]

    list2 = [
    {
      title: 'Mobile No.',
      rightTitle: this.state.phone,
    },
    {
      title: 'Email Address',
      rightTitle: "Unset",
    },
    {
      title: 'Change Pin',
      rightTitle: null,
    },
    {
        title: 'Security Questions',
        rightTitle: "off",
      },
]


  onPressOptions = () => {
    //navigate
    console.log('option is pressed')
  }

  renderContactHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.userRow}>
            <View style={styles.avatarContainer}>          
                <Image
            style={styles.userImage}
            source={{
              uri: avatar,
            }}
          /></View>

          <View style={styles.userNameRow}>
            <Text style={styles.userNameText}>{name}</Text>
          </View>
          <View style={styles.userBioRow}>
            <Text style={styles.userBioText}>{phoneNum}</Text>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View>
      <View style={styles.mainHeader}>
        <Text style={styles.textHeader}>Settings</Text>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={[styles.container, this.props.containerStyle]}>
        </View>
         {/* ---------- */}
        <View >
        <InfoText text="PROFILE SETTINGS" />
        {
          this.list.map((l) => (
            <ListItem
              title={l.title}
              titleStyle={styles.listFont}
              rightTitle={l.rightTitle}
              rightTitleStyle={{ fontSize: 15 }}
              chevron={{size:24}}
              onPress={() => this.onPressOptions()}
              containerStyle={styles.listItemContainer}
              pad={0}
              />
          ))
        }
        <InfoText text="SECURITY SETTINGS" />
        {
          this.list2.map((l) => (
            <ListItem
            title={l.title}
            titleStyle={styles.listFont}
            rightTitle={l.rightTitle}
            subtitleStyle={{fontSize: 12}}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            subtitle={l.subtitle}
            chevron={{size:24}}
            pad={20}
            />
          ))
        }
        </View>
        {/* ---------- */}

        <View style={{height: 250}}></View>
      </ScrollView>
      </View>
    )
  }
}

export default SettingScreen


const InfoText = ({ text }) => (
  <View style={styles.infoTextContainer}>
    <Text style={styles.infoText}>{text}</Text>
  </View>
)

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  imgconContainer:{
      alignItems: 'center',
      backgroundColor: '#0E8EE7',
      borderColor: 'transparent',
      height: 30,
      justifyContent: 'center',
      marginLeft: 10,
      marginRight: 18,
      width: 30,
  },
  cardContainer: {
    flex: 1,
    paddingBottom: 1
  },
  container: {
    flex: 1,
  },
  mainHeader: {
    backgroundColor: '#0E8EE7',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 18,
    marginBottom: 10,
    color: '#FFF'
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#0E8EE7',
    marginBottom: 10
  },
  avatarContainer:{
    marginBottom: 5,
    marginTop: 30,
    borderRadius: 10,
    height: 120,
    width: 120,
    backgroundColor:'#FFF', 
    alignItems: 'center',
  },
  scroll: {
    backgroundColor: '#F5F5F5',
  },
  userBioRow: {
    marginLeft: 40,
    marginRight: 40,
  },
  userBioText: {
    color: '#fff',
    fontSize: 13.5,
    textAlign: 'center',
  },
  userImage: {
    borderRadius: 60,
    height: 45,
    width: 45,
    marginVertical: 37.5,
  },
  userNameRow: {
    marginBottom: 0,
  },
  userNameText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 60,
    height: 150
  },
  verifyContainer: {
    height: 50,
    padding: 15,
    marginHorizontal: 15,
    backgroundColor: '#0E8EE7',
    borderRadius: 3,
    alignItems:'center',
    marginBottom: 10
    
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  listItemContainer: {
    height:70,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
  listFont: {
      color: "#4a4a4a", 
      fontSize: 15,
  },
  infoTextContainer: {
    paddingTop: 20,
    paddingBottom: 9,
    backgroundColor: '#F5F5F5'
    // backgroundColor: '#F4F5F4',
  },
  infoText: {
    fontSize: 9,
    marginLeft: 20,
    color: 'gray',
    fontWeight: '400',
  },
})
