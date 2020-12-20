import { useState } from 'react'
import { Button } from 'antd'
import { filterButton } from '../../utilities'

const Filter = ({ dispatch }) => {
  const [activeButton, setActiveButton] = useState(filterButton[0].text)

  const changeFilter = (text) => {
    setActiveButton(text)
    dispatch({ type: 'CHANGE_FILTER', payload: text.toLowerCase() })
  }
  return (
    <>
      {filterButton.map(({ text, active }) => (
        <Button
          key={text}
          type={activeButton === text ? active : false}
          size="large"
          onClick={() => changeFilter(text)}>
          {text}
        </Button>
      ))}
    </>
  )
}

export default Filter
