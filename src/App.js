import React from 'react';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import store from './redux/store';
import AutocompleteInput from './components/AutocompleteInput';
import SearchResults from './components/SearchResults';
import Map from './components/Map';

const { Header, Content } = Layout;

const headerStyle = {
  backgroundColor: 'lime',
  display: 'flex',
  flexDirection: 'row',
  flexGrow: '1',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignContent: 'center'
}

const titleStyle= {
  color: 'black',
  textAlign: 'center',
  fontSize: '1.2em',
  lineHeight: '1rem'
}
const noteStyle = {
  textAlign:'center',
  color: 'red',
  fontSize:' 1.2em',
  lineHeight: '1rem',
  textTransform: 'capitalize',
  fontWeight: 'bold'
}
const App = () => (
  <Provider store={store}>
    <Layout style={{ height: '100vh'}}>
      <Header style={headerStyle}>
        <h1 style={titleStyle}>Find Places by Google Autocomplete</h1>
      </Header>
      <Content style={{ padding: '30px' }}>
        <AutocompleteInput />
        <SearchResults />
        <Map />
      </Content>
      <p style={noteStyle}>Note: Please replace your google Maps Api Key in Map.js line 15 & SearchEpic.js line 7</p>
    </Layout>
  </Provider>
);

export default App;