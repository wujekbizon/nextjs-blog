interface OptionItem {
  value: string
  label: string // Use label for human-readable display text
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export type Value = string

export interface ListDataItem {
  id: number
  icon: JSX.Element
  label?: string
  value: string
  onItemClickHandler?: (value: Value) => void
}

export type Position = 'VERTICAL' | 'HORIZONTAL'

export interface FlatListParams<T> {
  data: T[]
  position: Position
  title?: string
  onClickHandler: (value: Value) => void
}
