import { StyleSheet, Text, View, Image } from "react-native";

// socials need adjusting...
//
// for (const [key, value] of Object.entries(props.pocket.socialLinks)) {
//   <Text>`${key}: ${value}`</Text>
// }
//
// Object.keys(props.pocket.socialLinks).forEach(function(key, index) {
//   <Text>{key}: {props.pocket.socialLinks[key]}</Text>
// })

// TODO using 0 index image for now for cards, likely can be optimised to display best on whatever criteria needed
function Pocket(props) {
  return (
    <View>
      {typeof props.pocket == "undefined" ? (
        <Text>No Items in Pocket</Text>
      ) : (
        <View style={{ backgroundColor: "brown" }}>
          <Text>Pocket Name: {props.pocket.name}</Text>
          <Image
            source={{ uri: props.pocket.logoImage }}
            style={{ width: 60, height: 60 }}
          />
          <Text>Category: {props.pocket.category}</Text>
          <Text>Address: {props.pocket.shortAddress}</Text>
          <Text>Description: {props.pocket.description}</Text>
          <Text>Socials TODO</Text>
        </View>
      )}
    </View>
  );
}

export default Pocket;
