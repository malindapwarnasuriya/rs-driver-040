import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  full_container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_container: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    gap: 10,
  },
  link: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'yellow', 
    justifyContent: 'center', 
    alignItems: 'center',
    borderColor: '#9b4521',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  link_text: {
    color: '#9b4521', 
    fontSize: 14,
    fontFamily: 'Merriweather',
  },

  
});

export default styles;