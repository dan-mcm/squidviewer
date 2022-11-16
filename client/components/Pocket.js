import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View
      style={{
        backgroundColor: "brown",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.5em",
      }}
    >
      <Button
        title={isVisible ? "Hide Pocket" : "Show Pocket"}
        onPress={() => setIsVisible(!isVisible)}
      />
      {isVisible ? (
        typeof props.pocket == "undefined" ? (
          <Text>No Items in Pocket</Text>
        ) : (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>Pocket Name: {props.pocket.name}</Text>
            <Image
              source={{ uri: props.pocket.logoImage }}
              style={{
                width: 60,
                height: 60,
                textAlign: "center",
                margin: "0.5em",
              }}
            />
            <Text>Category: {props.pocket.category}</Text>
            <Text>Address: {props.pocket.shortAddress}</Text>
            <Text>Description: {props.pocket.description}</Text>
            <Text>Socials TODO</Text>
            {Object.entries(props.pocket.socialLinks).forEach((social) => {
              const [key, value] = social;
              return <Text>{`${key}: ${value}`}</Text>;
            })}
          </View>
        )
      ) : null}
    </View>
  );
}

export default Pocket;
