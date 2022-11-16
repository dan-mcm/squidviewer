import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView } from "react-native";
import Usercard from "./components/Usercard";
import { useState, useEffect } from "react";
import axios from "axios";

function fetchSquidData(setSquidData) {
  // need to use local ip address of device hosting express server
  return axios
    .get(`http://192.168.0.43:3000/users/squiduser`)
    .then((res) => {
      return setSquidData(res.data);
    })
    .catch((err) => {
      console.log(err);
      return setSquidData([]);
    });
}

export default function App() {
  const [squidData, setSquidData] = useState([]);

  useEffect(() => {
    fetchSquidData(setSquidData);
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <Text>Squidviewer</Text>
      <StatusBar style="auto" />
      <Usercard />
      {squidData.length === 0 ? (
        <Text>"No Users Found"</Text>
      ) : (
        squidData.wallets.map((user) => (
          <Usercard
            chainid={user.chainId}
            pocket={user.pocket}
            schemes={user.schemes}
            vouchers={user.vouchers}
          />
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
