//import liraries
import React, { Component } from 'react';
import { Image, View,StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

// create a component
class Details extends Component {

    state = {
        data: [],
        
      };


      static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.name}`,
        headerLeft:null,
        headerTitleStyle: { alignSelf: "center", color: "#F2F5F5",fontSize:16 },
        headerStyle: { backgroundColor: "#393232" }
      });


      


      movies() {

        return fetch(
          "https://api.themoviedb.org/3/movie/${params.id}?api_key=2ee0d2186a62e8b0ec9def675e32e6f8&language=en-US"
      )
        .then(response => response.json())
        .then(responseJson => {
          console.log('results')
          this.setState({ data: responseJson.results });
        })
        .catch(error => {
          console.error(error);
        });
    }
  
    componentWillMount() {
      this.movies();
    }



    render() {
      const {state,navigate,goBack} = this.props.navigation;

        const { params } = this.props.navigation.state;

        return (
          
          <Container>
        <Content>
          <Card style={{flex: 0}}>
            
            <CardItem>
              <Body>
                <Image source={{uri: 'https://image.tmdb.org/t/p/w300/'+params.cover}} style={{height: 280, width: 230, flex: 1,alignSelf:'center'}}/>
                <Text style={{marginTop:10}} >
                  {params.details}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#C3423F'}}>
                  <Icon name="star" />
                  <Text>{params.vote} Stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F5F5',
    },
});

//make this component available to the app
export default Details;




