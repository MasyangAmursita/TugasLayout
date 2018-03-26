import React, { Component } from 'react';
import {
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class PerkiraanCuaca extends Component {
  constructor(props) {
    super(props)
    this.state = {
      panjang: 0,
      lebar: 0,
      tinggi: 0,
      volume: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#bbdefb' }}>

        <View style={{ backgroundColor: '#2196f3' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }} >
            Perkiraan Cuaca
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#e3f2fd' }}>
            <TextInput style={{ height: 90 }}
              placeholder="Masukan Kota"
              keyboardType='Text'
            />

            <Button
              onPress={() => this.setState({
                volume: (this.state.panjang * this.state.lebar * this.state.tinggi)
              })}
              title="Submith"
              accessibilityLabel="Submith"
            />
       </View>

        <View style={{ margin: 20, backgroundColor: '#90caf9' }}>
          <Text style={{ padding: 10, fontSize: 20 }} >

          </Text>
         </View>

   </View>

    );
  }

}
