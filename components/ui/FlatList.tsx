import styles from './FlatList.module.css'
import { FlatListParams, ListDataItem } from '@/types/listDataTypes'
import ListItem from './ListItem'

const FlatList: React.FC<FlatListParams<ListDataItem>> = ({ data, position, onClickHandler, title }) => {
  if (!data?.length) {
    return <p>No data available</p> // or render an empty state component
  }

  return (
    <ul className={`${position === 'VERTICAL' ? styles.vertical : styles.horizontal}  ${styles.flatlist}`}>
      {data.map((item) => (
        <ListItem key={item.id} {...item} onItemClickHandler={onClickHandler} />
      ))}
    </ul>
  )
}
export default FlatList
