/* eslint-disable react/prop-types */
import { CardText, ProgressBar } from 'react-bootstrap'

const DisplayTime = ({ idTimerLabel, idTimeLeft, timer, isBreak, timeProgressBarCurrent }) => {
  return (
    <>
      <ProgressBar style={{ width: '100%', height: '6vw', borderRadius: 0 }} className='m-0 p-0'>
        <ProgressBar
          id={isBreak ? idTimerLabel : 'temp-timer-label'}
          key={1}
          variant='secondary text-light'
          style={{ fontSize: !isBreak ? `${(timeProgressBarCurrent / 100) * 6}vw` : `${((100 - timeProgressBarCurrent) / 100) * 6}vw` }}
          now={!isBreak ? timeProgressBarCurrent : 100 - timeProgressBarCurrent}
          label='Session'
        />
        <ProgressBar
          id={isBreak ? 'temp-timer-label' : idTimerLabel}
          key={2}
          variant='light text-dark'
          style={{ fontSize: !isBreak ? `${((100 - timeProgressBarCurrent) / 100) * 6}vw` : `${(timeProgressBarCurrent / 100) * 6}vw` }}
          now={!isBreak ? 100 - timeProgressBarCurrent : timeProgressBarCurrent}
          label='Break'
        />
      </ProgressBar>
      <CardText
        id={idTimeLeft}
        style={{ width: '100%' }}
        className='m-0 p-0'
      >
        {`${timer.minutes}:${timer.seconds}`}
      </CardText>
    </>

  )
}

export default DisplayTime
