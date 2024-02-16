import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import Display from './components/Display'
import { UseClock } from './CustomHooks/UseClock'
import SetTime from './components/SetTime'
import { useCount } from './CustomHooks/UseCount'
import { useTime } from './CustomHooks/UseTime'
import { useAudio } from './CustomHooks/UseAudio'
import Alarm from './components/Alarm'
import { useTimeProgressBar } from './CustomHooks/UseTimeProgressBar'

// set to time here!

const initialValueBreak = 5 // breaks's time
const initialValueSession = 25// sessions's time

function App () {
  const time = UseClock()
  const [valueBreak, handleSumBreak, handleResBreak, resetValueBreak] = useCount(initialValueBreak)
  const [valueSession, handleSumSession, handleResSession, resetValueSession] = useCount(initialValueSession)
  const [audioRef, handleStartAudio, handleStopAudio] = useAudio()
  const [timer, state, isBreak, handleState, handleReset] = useTime(valueBreak, valueSession, handleStartAudio, handleStopAudio)
  const timeProgressBarCurrent = useTimeProgressBar(timer, isBreak, state)

  return (
    <Container
      style={{ minWidth: 360, width: '100vw', height: '100vh' }}
    >
      <Row xs={2} lg={3} className='mt-2 d-flex justify-content-center align-items-center align-content-center'>
        <Col xs={{ order: 2 }} lg={{ order: 1 }} className='d-flex justify-content-center my-1'>
          <SetTime
            idLabel='break-label'
            idIncrement='break-increment'
            idDecrement='break-decrement'
            idLength='break-length'
            setTimeTitle='Break Time'
            state={state}
            value={valueBreak}
            handleSum={handleSumBreak}
            handleRes={handleResBreak}
          />
        </Col>
        <Col xs={12} lg={{ order: 2 }} className='d-flex justify-content-center my-1'>
          <Display
            idTimerLabel='timer-label'
            idTimeLeft='time-left'
            idStartStop='start_stop'
            idReset='reset'
            time={time}
            state={state}
            timer={timer}
            timeProgressBarCurrent={timeProgressBarCurrent}
            isBreak={isBreak}
            handleState={handleState}
            handleReset={handleReset}
            resetValueBreak={resetValueBreak}
            resetValueSession={resetValueSession} s
          />
          <Alarm
            audioRef={audioRef}
            idAudio='beep'
          />
        </Col>
        <Col xs={{ order: 3 }} lg={{ order: 3 }} className='d-flex justify-content-center my-1'>
          <SetTime
            idLabel='session-label'
            idIncrement='session-increment'
            idDecrement='session-decrement'
            idLength='session-length'
            setTimeTitle='Session Time'
            state={state}
            value={valueSession}
            handleSum={handleSumSession}
            handleRes={handleResSession}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default App
