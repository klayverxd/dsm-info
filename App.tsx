import { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";

import HitsList from "./components/HitsList";
import SearchBar from "./components/SearchBar";

import { getHits } from "./api";

export default function App() {
  const [hits, setHits] = useState(null);

  const [hintSearch, setHintSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setHits(null);

      try {
        getHits(setHits, hintSearch);
      } catch (error) {
        console.error("Error fetching hits:", error);
      }
    };

    fetchData();
  }, [hintSearch]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('./assets/images/logo.png')} />
        <SearchBar setHintSearch={setHintSearch} />
      </View>
      <View style={styles.main}>
        {hits ? <HitsList hits={hits} /> : <Text>Carregando...</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  header: {
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    // height: 'auto',
    // width: 'auto',
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
});
