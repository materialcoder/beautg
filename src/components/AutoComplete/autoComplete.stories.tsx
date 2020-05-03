import React from 'react'
import { storiesOf } from '@storybook/react'
import AutoComplete from './autoComplete'
import { action } from '@storybook/addon-actions'

const SimpleComplete = () => {
  const lakers = ['bradey', 'james', 'pope', 'caruso', 'cook', 'sousions', 'AD', 'green', 'howard', 'kuzma', 'rando']
  const handleFetch = (query: string) => {
    return lakers.filter(name => name.includes(query))
  }
  return (
    <AutoComplete
      fetchSuggestion={handleFetch}
      onSelect={action('select')}
    />
  )
}

storiesOf('AutoComplete Component', module)
  .add('AutoComplete', SimpleComplete)
