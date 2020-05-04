import React from 'react'
import { storiesOf } from '@storybook/react'
import AutoComplete, { DataSourceType } from './autoComplete'
import { action } from '@storybook/addon-actions'

interface LakerPlayerProps {
  value: string
  number?: number
}

const SimpleComplete = () => {
  const lakers = ['bradey', 'james', 'pope', 'caruso', 'cook', 'sousions', 'AD', 'green', 'howard', 'kuzma', 'rando']
  const lakersWithNumber = [
    {value: 'bradey', number: 11},
    {value: 'james', number: 23},
    {value: 'pope', number: 4},
    {value: 'caruso', number: 7},
    {value: 'green', number: 14},
    {value: 'haward', number: 0},
    {value: 'kuzma', number: 39},
  ]
  const handleFetch = (query: string) => {
    return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
  }
  const renderOption = (item: string) => {
    return (
      <h2>Name: {item}</h2>
    )
  }
  // const handleFetch = (query: string) => {
  //   return lakersWithNumber.filter(player => player.value.includes(query))
  // }
  // const renderOption = (item: DataSourceType<LakerPlayerProps>) => {
  //   return (
  //     <>
  //       <h2>Name: {item.value}</h2>
  //       <p>Number: {item.number}</p>
  //     </>
  //   )
  // }
  return (
    <AutoComplete
      fetchSuggestion={handleFetch}
      onSelect={action('select')}
      // renderOption={renderOption}
    />
  )
}

storiesOf('AutoComplete Component', module)
  .add('AutoComplete', SimpleComplete)
