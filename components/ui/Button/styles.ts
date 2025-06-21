import {StyleSheet} from 'react-native';

export const stylesButton = StyleSheet.create({
  primary: {
    backgroundColor: '#3D64F4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 8,
    flexDirection: 'row'
  },
  secondary: {
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E2E1',
    flexDirection: 'row'
  },
  link: {

  }
});

export const stylesText = StyleSheet.create({
  primary: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  secondary: { 
    color: '#3C4043',
    fontSize: 16,
  },
});

export const stylesIcon = StyleSheet.create({
  left: {
    marginRight: 10
  },
  right: { 
    marginLeft: 10
  }
});