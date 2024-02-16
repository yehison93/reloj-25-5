/* eslint-disable react/prop-types */
import { Card, Button, ButtonGroup, CardText } from 'react-bootstrap'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const SetTime = ({ idLabel, idIncrement, idDecrement, setTimeTitle, idLength, value, handleSum, handleRes, state }) => {
  return (
    <Card style={{ width: 200, minHeight: 150 }}>
      <Card.Header id={idLabel} className='text-center fs-3'>{setTimeTitle}</Card.Header>
      <Card.Body className='text-center'>
        <ButtonGroup>
          <Button
            id={idIncrement}
            type='button'
            disabled={!!state}
            onClick={handleSum}
            variant='secondary'
          ><FaArrowUp />
          </Button>
          <CardText
            id={idLength}
            size='sm'
            style={{ width: 50, border: 0, borderRadius: 0 }}
            className='bg-secondary text-center text-light fs-2 p-0 m-0'
          >{value}
          </CardText>
          <Button
            id={idDecrement}
            type='button'
            disabled={!!state}
            onClick={handleRes}
            variant='secondary'
          >
            <FaArrowDown />
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  )
}

export default SetTime
