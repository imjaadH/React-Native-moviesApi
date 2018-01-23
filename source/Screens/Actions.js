//import liraries
import React, { Component } from 'react';
import ScaleSheet from "react-native-scalesheet";
import { View, Text, FlatList,Image } from "react-native";
import {
  Container,
  Header,
  Content,
 
  CardItem,
  Body,
  Card,

  Footer,
  Left,
  Right,
  
} from "native-base";

// create a component
class Action extends Component {
    state = {
        data: [],
        
      };
      static navigationOptions = {
        title: "Movies",
        headerTitleStyle: { alignSelf: "center", color: "#eee" },
        headerStyle: { backgroundColor: "#155263" }
      };


      movies() {
          const{page,seed}=this.state;
          return fetch(
            "https://api.themoviedb.org/3/discover/movie?page=9&sort_by=popularity.asc&api_key=2ee0d2186a62e8b0ec9def675e32e6f8"
        )
          .then(response => response.json())
          .then(responseJson => {
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
        const { state, navigate } = this.props.navigation;

        return (
            <View style={styles.main}>
        <Container>
          <Content>
            <FlatList
              keyExtractor={(x, i) => i}
              data={this.state.data}
                renderItem={({ item }) => (
                    
                    <Card>
            <CardItem>
              <Body>
                <Text>
                {`${item.original_title}`}
                </Text>

                <CardItem>
                <Image source={{uri: 'https://image.tmdb.org/t/p/w150/'+item.poster_path}} style={{height: 200, width: 90, flex: 1}}/>

                </CardItem>
                <Text>{`${item.vote_count}`}</Text>
              </Body>
            </CardItem>
          </Card>
          
              )}
            />
          </Content>

          
        </Container>
      </View>
    );
    }
}

// define your styles
const styles = ScaleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#212121"
      },
      main: {
        flex: 1,
        backgroundColor: "#FF6F3C"
      }
});
//make this component available to the app
export default Action;
