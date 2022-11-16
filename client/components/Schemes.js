import { View, Image } from "react-native";
import { useState } from "react";
import { Button, Text, Card } from "@rneui/themed";

// TODO using 0 index image for now for cards, likely can be optimised to display best on whatever criteria needed
function Schemes(props) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "0.5em",
      }}
    >
      <Button
        title={isVisible ? "Hide Schemes" : "Show Schemes"}
        onPress={() => setIsVisible(!isVisible)}
        color="secondary"
      />
      {isVisible ? (
        typeof props.schemes == "undefined" || props.schemes.length === 0 ? (
          <Card>
            <Card.Title>No Schemes</Card.Title>
          </Card>
        ) : (
          props.schemes.map((scheme) => (
            <View
              style={{ textAlign: "left" }}
              key={scheme.name + scheme.reward}
            >
              <Card>
                <Card.Title>{scheme.name}</Card.Title>
                <Card.Divider />
                <Text>
                  <Text style={{ fontWeight: "bold" }}>Reward:</Text>{" "}
                  {scheme.reward} (Max: {scheme.max})
                </Text>
                <Text>
                  <Text style={{ fontWeight: "bold" }}>Current Stamps:</Text>{" "}
                  {scheme.stampcard.count}
                </Text>
                <Text>
                  <Text style={{ fontWeight: "bold" }}>Alltime:</Text>{" "}
                  {scheme.stampcard.lifetimeCount}
                </Text>
                <Text> </Text>
                <Card.Divider />
                <Image
                  source={{ uri: scheme.schemeImages[scheme.stampcard.count] }}
                  style={{
                    width: 300,
                    height: 200,
                    textAlign: "center",
                    margin: "0.5em",
                  }}
                />
              </Card>
            </View>
          ))
        )
      ) : null}
    </View>
  );
}

export default Schemes;
