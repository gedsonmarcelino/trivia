import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    paddingHorizontal: 50,
    backgroundColor: '#FFFEFB',
  },
  logoContainer: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: 25
  },
  input: {
    marginBottom: 20
  },
  button: {
    marginBottom: 40
  },
})

export const stylesTextLine = StyleSheet.create({
  container: {
    marginBottom: 20,
    position: 'relative',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#C4C4C4',
    zIndex: 0
  },
  text: {
    position: 'relative',
    zIndex: 1,
    top: -10,
    fontSize: 16,
    color: '#3C4043',
    fontWeight: 'bold',
    backgroundColor: '#FFFEFB',
    marginHorizontal: 'auto',
    paddingHorizontal: 10,
  }
})

export const stylesTextLink = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
})