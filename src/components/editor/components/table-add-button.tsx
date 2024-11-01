
interface AddRowButtonProps {
  onClick: () => void
}

import styled from 'styled-components'


const StyledButton = styled.button`
  margin: 10px 0
  padding: 8px 16px
  background-color: #6200ee
  color: #fff
  border: none
  border-radius: 4px
  cursor: pointer
  font-size: 16px

  &:hover {
    background-color: #3700b3
  }
`

const AddRowButton: React.FC<AddRowButtonProps> = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>Add Row</StyledButton>
  )
}

export default AddRowButton
