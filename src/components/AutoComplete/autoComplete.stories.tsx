import React from 'react'
import { storiesOf } from '@storybook/react'
import AutoComplete, { DataSourceType } from './autoComplete'
import { action } from '@storybook/addon-actions'

interface LakerPlayerProps {
  value: string
  number?: number
}

interface GithubUserProps {
  value: string
  login?: string
  url?: string
}

const SimpleComplete = () => {
  const lakers = ['bradey', 'james', 'pope', 'caruso', 'cook', 'sousions', 'AD', 'green', 'howard', 'kuzma', 'rando']
  const handleFetch = (query: string) => {
    return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
  }
  return (
    <AutoComplete
      fetchSuggestion={handleFetch}
      onSelect={action('select')}
    />
  )
}

const AsyncComplete = () => {
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({items}) => {
        console.log(items)
        return items.slice(0, 10).map((item: any) => ({
          value: item.login,
          ...item
        }))
      })
  }
  // const renderOption = (item: DataSourceType<GithubUserProps>) => {
  //   return (
  //     <p>{item.login}</p>
  //     // <>
  //     //   <h2>Name: {item.login}</h2>
  //     //   <p>url: {item.url}</p>
  //     // </>
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

const renderComplete = () => {
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
    return lakersWithNumber.filter(player => player.value.includes(query))
  }
  const renderOption = (item: DataSourceType<LakerPlayerProps>) => {
    return (
      <>
        <h2>Name: {item.value}</h2>
        <p>Number: {item.number}</p>
      </>
    )
  }
  return (
    <AutoComplete
      fetchSuggestion={handleFetch}
      onSelect={action('select')}
      renderOption={renderOption}
    />
  )
}

storiesOf('AutoComplete Component', module)
  .add('AutoComplete', SimpleComplete)
  .add('自定义模板 AutoComplete', renderComplete)
  .add('异步 AutoComplete', AsyncComplete)
