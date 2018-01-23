//import liraries
import React, { Component } from 'react';
import ScaleSheet from "react-native-scalesheet";
import { View, Button, FlatList,Image, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Footer,
  Left,
  Right,
  
} from "native-base";
// create a component
class Home extends Component {

    state = {
        data: [],
        
      };
      static navigationOptions = {
        title: "Movies",
        headerTitleStyle: { alignSelf: "center", color: "#eee" },
        headerStyle: { backgroundColor: "#155263" }
      };


      movies() {
          const{navigate,}=this.props.navigation;
          return fetch(
            "https://api.themoviedb.org/3/discover/movie?page=2&sort_by=popularity.desc&api_key=2ee0d2186a62e8b0ec9def675e32e6f8"
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
        const { navigate,state } = this.props.navigation;
        const { params } = this.props.navigation.state;


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
                      <Text style={{fontWeight:"bold"}}>{item.original_title}..</Text>
                    <Text >Total Votes: {item.vote_count}</Text>
                    <Text style={{fontWeight:"normal"}}>Rating: {item.vote_average}</Text>


                    </Body>
             
                  </CardItem>
                  <CardItem cardBody>
              <Image source={{uri: 'https://image.tmdb.org/t/p/w300/'+item.poster_path}} style={{height: 200, width: 90, flex: 1}}/>
            </CardItem>
                  <Button title="Details" onPress={()=> navigate("details", {id:item.id,name:item.original_title,cover:item.poster_path,vote:item.vote_count,details:item.overview})} />
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
        backgroundColor: "#393232"
      },
      main: {
        flex: 1,
        backgroundColor: "#393232"
      }
});

//make this component available to the app
export default Home;
