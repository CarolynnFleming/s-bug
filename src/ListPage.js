import { useState, useEffect } from 'react';
import { deleteAllItems, getListItems } from './services/fetch-utils';
import ListItemForm from './ListItemForm';
import ListItem from './ListItem';

export default function TodosPage() {
  const [listItems, setShoppingList] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []); 

  function fetchItems() {
    const listItemsResponse = getListItems();

    setShoppingList();
  }

  function handleDeleteClick() {
    deleteAllItems();

    fetchItems();
  }

  return (
    <h2>List!</h2>
    <div className="list-page">
      <button onClick={() => {}}>New List</button>
      <ListItemForm fetchItems={fetchItems} />
      <div className='item-list'>
        {listItems.map(listItem => 
          <ListItem 
            key={listItem.id} 
            fetchItems={fetchItems} 
            listItem={listItem} />
        )}
      </div>

    </div>
  );
}
