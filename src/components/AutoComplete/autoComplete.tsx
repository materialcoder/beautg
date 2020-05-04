import React, { FC, useState, ChangeEvent, ReactElement, useEffect } from 'react'
import Input, { InputProps } from '../Input/input'
import Icon from '../Icon/icon'
import useDebounce from '../../hooks/useDebounce'

interface DataSourceObject {
  value: string
}

export type DataSourceType<T = {}> = T & DataSourceObject
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestion: (str: string) => DataSourceType[] | Promise<DataSourceType[]>
  onSelect?: (item: DataSourceType) => void
  renderOption?: (item: DataSourceType) => ReactElement
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestion,
    onSelect,
    value,
    renderOption,
    ...restProps
  } = props
  const [inputValue, setInputValue] = useState(value as string)
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([])
  const [loading, setLoading] = useState(false)
  const debounceValue = useDebounce(inputValue, 500)
  useEffect(() => {
    if (debounceValue) {
      const results = fetchSuggestion(debounceValue)
      if (results instanceof Promise) {
        console.log('trigger')
        setLoading(true)
        results.then(data => {
          setLoading(false)
          setSuggestions(data)
        })
      } else {
        setSuggestions(results)
      }
    } else {
      setSuggestions([])
    }
  }, [debounceValue])
  console.log(suggestions)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
  }
  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    setSuggestions([])
    if (onSelect) {
      onSelect(item)
    }
  }
  const renderTemplate = (item:DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }
  // 生成下拉菜单
  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          return (
            <li key={index} onClick={() => handleSelect(item)}>
              {renderTemplate(item)}
            </li>
          )
        })}
      </ul>
    )
  }
  return (
    <div>
      <Input
        value={inputValue}
        onChange={handleChange}
        {...restProps}
      />
      {loading && <ul><Icon icon="spinner" spin /></ul>}
      {(suggestions.length > 0) && generateDropdown()}
    </div>
  )
}

export default AutoComplete
