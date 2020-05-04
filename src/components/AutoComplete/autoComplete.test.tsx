import React from 'react'
import {config} from 'react-transition-group'
import {render, RenderResult, fireEvent, wait, cleanup} from '@testing-library/react'
import AutoComplete, {AutoCompleteProps} from './autoComplete'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// fas 引入所有图标
library.add(fas)

// 屏蔽transition带来的影响
config.disabled = true

const testArray = [
  {value: 'ab', number: 11},
  {value: 'abc', number: 1},
  {value: 'a', number: 12},
  {value: 'b', number: 7},
  {value: 'c', number: 13},
]

const testProps: AutoCompleteProps = {
  fetchSuggestion: (query) => {return testArray.filter(item => item.value.includes(query))},
  onSelect: jest.fn(),
  placeholder: 'auto-complete'
}

const renderOption = (item: any) => {
  return (
    <h2>Name: {item.value}</h2>
  )
}

const handleFetch = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then(res => res.json())
    .then(({items}) => {
      return items.slice(0, 10).map((item: any) => ({
        value: item.login,
        ...item
      }))
    })
}

const renderProps: AutoCompleteProps = {
  fetchSuggestion: (query) => {return testArray.filter(item => item.value.includes(query))},
  onSelect: jest.fn(),
  placeholder: 'auto-complete',
  renderOption: renderOption
}

const asyncProps: AutoCompleteProps = {
  fetchSuggestion: handleFetch,
  onSelect: jest.fn(),
  placeholder: 'auto-complete',
}

let wrapper: RenderResult, inputNode: HTMLInputElement
describe('test AutoComplete component', () => {
  beforeEach(() => {
    wrapper = render(<AutoComplete {...testProps} />)
    inputNode = wrapper.getByPlaceholderText('auto-complete') as HTMLInputElement
  })
  it('should have the basic behavior', async () => {
    fireEvent.change(inputNode, {target: {value: 'a'}})
    await wait(() => {
      expect(wrapper.queryByText('ab')).toBeInTheDocument()
    })
    expect(wrapper.container.querySelectorAll('.suggestion-item').length).toEqual(3)
    fireEvent.click(wrapper.getByText('ab'))
    expect(testProps.onSelect).toHaveBeenCalledWith({value: 'ab', number: 11})
    expect(wrapper.queryByText('ab')).not.toBeInTheDocument()
    expect(inputNode.value).toBe('ab')
  })
  it('should provide keyboard support', async () => {
    fireEvent.change(inputNode, {target: {value: 'a'}})
    await wait(() => {
      expect(wrapper.queryByText('ab')).toBeInTheDocument()
    })
    const firstResult = wrapper.getByText('ab')
    const secondResult = wrapper.getByText('abc')
    // down
    fireEvent.keyDown(inputNode, {keyCode: 40})
    expect(firstResult).toHaveClass('is-active')
    // down
    fireEvent.keyDown(inputNode, {keyCode: 40})
    expect(secondResult).toHaveClass('is-active')
    // up
    fireEvent.keyDown(inputNode, {keyCode: 38})
    expect(firstResult).toHaveClass('is-active')
    // enter
    fireEvent.keyDown(inputNode, {keyCode: 13})
    expect(testProps.onSelect).toHaveBeenCalledWith({value: 'ab', number: 11})
    expect(wrapper.queryByText('ab')).not.toBeInTheDocument()
    expect(inputNode.value).toBe('ab')
  })
  it('should hide dropdown when click outside', async () => {
    fireEvent.change(inputNode, {target: {value: 'a'}})
    await wait(() => {
      expect(wrapper.queryByText('ab')).toBeInTheDocument()
    })
    fireEvent.click(document)
    expect(wrapper.queryByText('ab')).not.toBeInTheDocument()
  })
  it('should generate the right template when give renderOption', async () => {
    cleanup()
    wrapper = render(<AutoComplete {...renderProps} />)
    inputNode = wrapper.getByPlaceholderText('auto-complete') as HTMLInputElement
    fireEvent.change(inputNode, {target: {value: 'a'}})
    await wait(() => {
      expect(wrapper.queryByText('Name: ab')).toBeInTheDocument()
    })
  })
  it('should work when give async fetchSuggestion', async () => {
    cleanup()
    wrapper = render(<AutoComplete {...asyncProps} />)
    inputNode = wrapper.getByPlaceholderText('auto-complete') as HTMLInputElement
    fireEvent.change(inputNode, {target: {value: 'a'}})
    await wait(() => {
      expect(wrapper.queryByText('snyff')).toBeInTheDocument()
    })
  })
})
