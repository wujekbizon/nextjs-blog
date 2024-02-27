import { ListDataItem } from '@/types/listDataTypes'
import styles from './ListItem.module.css'

const ListItem: React.FC<ListDataItem> = ({ icon, value, label, id, onItemClickHandler }) => {
  return (
    <li className={styles.item} onClick={() => onItemClickHandler?.(value)}>
      {icon}
      <p>{label}</p>
    </li>
  )
}
export default ListItem
