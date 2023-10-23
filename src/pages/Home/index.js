import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movments from '../../components/Movments';
import Actions from '../../components/Actions';

const lista = [
  {
    id: 1,
    label: "Coelba Conta de Luz",
    value: "880,45",
    type: "expense",
    date: "17/09/2023"
  },
  {
    id: 2,
    label: "Banco Rca Financ",
    value: "1.880,43",
    type: "expense",
    date: "17/09/2023"
  },
  {
    id: 3,
    label: "Itau Fin Imob",
    value: "2.840,15",
    type: "expense",
    date: "17/09/2023"
  },
  {
    id: 4,
    label: "Trans Imperial Car",
    value: "8.256,15",
    type: "revenue",
    date: "17/09/2023"
  }
]


export default function Home() {
  return (
    <View style={styles.container}>
      <Header name=" Lucas França" />
      <Balance entradas="25.045,45" saidas=" 11.275,32" />
      <Actions />
      <Text style={styles.titleMov}>Movimentação</Text>
      <FlatList
        style={styles.list}
        data={lista}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movments data={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fafafa',

  },
  titleMov: {
    fontSize: 15,
    color: '#DADA',
    marginLeft: 14,
    marginTop: 14,
    marginRight: 14,
    fontWeight: 'bold'
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
