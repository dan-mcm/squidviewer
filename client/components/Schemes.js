import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useState } from "react";

// TODO using 0 index image for now for cards, likely can be optimised to display best on whatever criteria needed
function Schemes(props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View
      style={{
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.5em",
      }}
    >
      <Button
        title={isVisible ? "Hide Schemes" : "Show Schemes"}
        onPress={() => setIsVisible(!isVisible)}
      />
      {isVisible ? (
        typeof props.schemes == "undefined" || props.schemes.length === 0 ? (
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
                style={{
                  width: 300,
                  height: 200,
                  textAlign: "center",
                  margin: "0.5em",
                }}
              />
            </View>
          ))
        )
      ) : null}
    </View>
  );
}

export default Schemes;
