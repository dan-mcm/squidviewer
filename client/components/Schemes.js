import { StyleSheet, Text, View, Image } from "react-native";

// <Image source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
//    style = {{ width: 200, height: 200 }}
//    />

// <Image
//   style={styles.schemeCard}
//   source={
//     {uri: scheme.schemeImages[0]}
//   }
// />

// TODO using 0 index image for now for cards, likely can be optimised to display best on whatever criteria needed
function Schemes(props) {
  return (
    <View style={{ backgroundColor: "yellow" }}>
      {typeof props.schemes == "undefined" ? (
        <Text>No Schemes</Text>
      ) : (
        props.schemes.map((scheme) => (
          <View>
            <Text>Scheme Name: {scheme.name}</Text>
            <Text>
              Reward: {scheme.reward} (Max: {scheme.max})
            </Text>
            <Text>
              Current Stamps: {scheme.stampcard.count} Alltime:{" "}
              {scheme.stampcard.lifetimeCount}
            </Text>
            <Image
              source={{ uri: scheme.schemeImages[0] }}
              style={{ width: 300, height: 200 }}
            />
          </View>
        ))
      )}
    </View>
  );
}

export default Schemes;
