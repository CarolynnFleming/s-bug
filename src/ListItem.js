import { buyItem } from './services/fetch-utils';

export default function ListItem({ fetchItems }) {
  async function handleClick() {
    await buyItem(id);
    await fetchItems();
  }

//  () => {} is javascript for "do nothing". It's an arrow function that doesn't nothing at all.
  return (
    <div className='list-item' onClick={has_been_bought ? () => {} : handleClick}>
      <p className={has_been_bought ? 'needed' : 'bought'}>
        {quantity} {name}
      </p>     
    </div>
  );
}
