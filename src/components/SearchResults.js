import React from 'react';
import { useSelector } from 'react-redux';
import { List } from 'antd';

const SearchResults = () => {
  const results = useSelector(state => state.search.results);

  return (
    <List
      itemLayout="horizontal"
      dataSource={results}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={item.description}
          />
        </List.Item>
      )}
    />
  );
};

export default SearchResults;