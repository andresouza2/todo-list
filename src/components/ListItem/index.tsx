import { Item } from '../../types/Item';
import * as C from './styles'

type props = {
  item: Item,
  onChange: (id: number, done: boolean) => void
}

function ListItem({ item, onChange }: props) {

  return(
    <C.Container done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => onChange(item.id, e.target.checked)}
      />
      <label>{item.name} - {item.done.toString()}</label>
    </C.Container>
  );
}
export default ListItem
