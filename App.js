import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { FlatGrid } from 'react-native-super-grid';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: 'Buah Naga',
          deskripsi:'buah ini sunggung segar',
          icon: 'lemon',
          backgroundColor: '#A60815',
          lineColor: '#212121'
        },
        {
          title: 'Buah Jeruk',
          deskripsi:'buah ini sunggung manis',
          icon: 'apple-alt',
          backgroundColor:'#BF212E',
          lineColor: '#212121'
        },
        {
          title: 'Buah mangga',
          deskripsi:'buah ini sunggung segar',
          icon: 'carrot',
          backgroundColor:'#1F403C',
          lineColor: '#212121'
        },
        {
          title: 'Buah mangga',
          deskripsi:'buah ini sunggung segar',
          icon: 'carrot',
          backgroundColor:'#F2D479',
          lineColor: '#212121'
        },
        {
          title: 'Buah mangga',
          deskripsi:'buah ini sunggung segar',
          icon: 'carrot',
          backgroundColor:'#F2B66D',
          lineColor: '#212121'
        },
        {
          title: 'Buah mangga',
          deskripsi:'buah ini sunggung segar',
          icon: 'carrot',
          backgroundColor:'#1F403C',
          lineColor: '#212121'
        },
        {
          title: 'Buah mangga',
          deskripsi:'buah ini sunggung segar',
          icon: 'carrot',
          backgroundColor:'#1F403C',
          lineColor: '#212121'
        },
        {
          title: 'Buah mangga',
          deskripsi:'buah ini sunggung segar',
          icon: 'carrot',
          backgroundColor:'#1F403C',
          lineColor: '#212121'
        },
        {
          title: 'Buah mangga',
          deskripsi:'buah ini sunggung segar',
          icon: 'carrot',
          backgroundColor:'#1F403C',
          lineColor: '#212121'
        },
        {
          title: 'Buah mangga',
          deskripsi:'buah ini sunggung segar',
          icon: 'carrot',
          backgroundColor:'#1F403C',
          lineColor: '#212121'
        },
        {
          title: 'Buah mangga',
          deskripsi:'buah ini sunggung segar',
          icon: 'carrot',
          backgroundColor:'#1F403C',
          lineColor: '#212121'
        },
        {
          title: 'Buah mangga',
          deskripsi:'buah ini sunggung segar',
          icon: 'carrot',
          backgroundColor:'#1F403C',
          lineColor: '#212121'
        },
      ]
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        {/* <FlatGrid
  itemDimension={300}
  data={this.state.data}
  renderItem={({ item }) => (
  <TouchableOpacity style={{
    backgroundColor:item.backgroundColor,
    borderRadius:6,
    elevation: 10,
    }}>
    <View style={{flexDirection:'row'}}>
    <View style={{backgroundColor:'#ffffff', padding: 15, borderTopLeftRadius:6, borderBottomLeftRadius:6}}>

      <Icon name={item.icon} solid size={30} color={item.backgroundColor} />
    </View>
    <View style={{flex: 1, marginLeft:20, justifyContent:'center'}}>
      <Text style={{color: '#ffffff'}}>{item.title}</Text>
      <Text style={{color: '#ffffff'}}>{item.deskripsi}</Text>
    </View>
    </View>
  </TouchableOpacity>
  )}/> */}

  {/* tipe 3 */}
  {/* <FlatGrid
  itemDimension={300}
  data={this.state.data}
  renderItem={({ item }) => (
  <TouchableOpacity style={{
    backgroundColor:item.backgroundColor,
    borderRadius:6,
    elevation: 10, 
    padding: 15,
    borderLeftWidth: 5,
    borderColor: item.lineColor
    }}>
    <View style={{flexDirection:'row'}}>
    
    <View style={{flex: 1, justifyContent:'center'}}>
      <Text style={{color: item.lineColor}}>{item.title}</Text>
      <Text style={{color: '#ffffff'}}>{item.deskripsi}</Text>
    </View>
    </View>
  </TouchableOpacity>
  )}/> */}

  {/* tipe 4 */}

  {/* <FlatGrid
  itemDimension={150}
  data={this.state.data}
  renderItem={({ item }) => (
  <TouchableOpacity style={{
    backgroundColor:item.backgroundColor,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
    elevation: 10, 
    padding: 15,
    borderLeftWidth: 5,
    borderColor: item.lineColor
    }}>
    <Icon name={item.icon} solid size={30} color="#ffffff" />
    <View style={{flexDirection:'row'}}>
    
    <View style={{flex: 1, justifyContent:'center'}}>
      <Text style={{color: item.lineColor, fontWeight:'bold', marginTop:10}}>{item.title}</Text>
      <Text style={{color: '#ffffff'}}>{item.deskripsi}</Text>
    </View>
    </View>
  </TouchableOpacity>
  )}/> */}

  {/* tipe 5 */}
  {/* <FlatGrid
  itemDimension={100}
  data={this.state.data}
  renderItem={({ item }) => (
  <TouchableOpacity style={{
    backgroundColor:item.backgroundColor,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
    elevation: 10, 
    padding: 15,
    borderLeftWidth: 5,
    borderColor: item.lineColor, 
    height: 200
    }}>
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}>

    <Icon name={item.icon} solid size={50} color="#ffffff" />
    </View>
    <View style={{flexDirection:'row'}}>
    
    <View style={{flex: 1, justifyContent:'center'}}>
      <Text style={{color: item.lineColor, fontWeight:'bold', marginTop:10}}>{item.title}</Text>
      <Text style={{color: '#ffffff'}}>{item.deskripsi}</Text>
    </View>
    </View>
  </TouchableOpacity>
  )}/> */}

  {/* tipe6 */}

  <FlatGrid
  itemDimension={50}
  data={this.state.data}
  renderItem={({ item }) => (
  <TouchableOpacity style={{
    backgroundColor:item.backgroundColor,
   borderRadius:6,
    elevation: 10, 
    padding: 15,
    borderLeftWidth: 5,
    borderColor: item.lineColor, 
    }}>
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}>

    <Icon name={item.icon} solid size={20} color="#ffffff" />
    </View>
    
  </TouchableOpacity>
  )}/>
      </View>
    );
  }
}
