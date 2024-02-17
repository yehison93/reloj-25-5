/* eslint-disable react/prop-types */
import { Button, ButtonGroup, Card } from 'react-bootstrap'
import DisplayTime from './DisplayTime'

const Display = ({ idTimerLabel, idTimeLeft, idStartStop, idReset, time, state, timer, isBreak, handleState, handleReset, resetValueBreak, resetValueSession, timeProgressBarCurrent }) => {
  return (
    <Card style={{ minWidth: 400, fontFamily: 'calculator', border: 0 }} className='mt-5'>
      <Card.Header className='text-center h1 '>25+5 Clock</Card.Header>
      <Card.Body
        style={{
          minWidth: 300,
          minHeight: 100
        }}
        className='
      text-center
      display-3
      m-0
      p-0
      '
      >
        <Card.Text style={{ width: '100%' }} className='bg-secondary text-light m-0 p-0'>{time.date}</Card.Text>
        <Card.Text style={{ width: '100%' }} className='m-0 p-0'>{time.hour}</Card.Text>
        <DisplayTime
          idTimerLabel={idTimerLabel}
          idTimeLeft={idTimeLeft}
          timer={timer}
          isBreak={isBreak}
          timeProgressBarCurrent={timeProgressBarCurrent}
        />
        <Card.Footer className='d-flex m-0 p-0'>
          <ButtonGroup style={{ width: '100%', height: '100%' }}>
            <Button id={idStartStop} variant='light fs-1' className='' onClick={() => handleState()}>{state ? 'Pause' : 'Start'}</Button>
            <Button id={idReset} variant='light fs-1' onClick={() => { handleReset(); resetValueBreak(); resetValueSession() }}>ReStart</Button>
          </ButtonGroup>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default Display
