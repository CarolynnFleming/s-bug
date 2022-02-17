import { useState } from 'react';
import { createListItem } from './services/fetch-utils';

export default function ListItemForm({ fetchItems }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  async function handleSubmit(e) {
    e.preventDefault();
    
    await createListItem(name, quantity);

    await fetchItems();

    setName('');
    setQuantity('');
  }
  return (
    <div className='new-item-form-container'>
      <form onSubmit={handleSubmit}>
          I need . . . 
        <label>
            Quantity
          <input 
            value={quantity} 
            onChange={setQuantity(e.target.value)} 
            required 
            type="number" 
            name="quantity"
          />
        </label>
        <label>
            Name
          <input 
            value={name} 
            required 
            name="name" />
        </label>
        <button>Add item</button>
      </form>
    </div>
  );
}
