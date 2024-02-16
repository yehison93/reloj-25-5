import soundAlarm from '../assets/sounds/alarm-01.mp3'

// eslint-disable-next-line react/prop-types
const Alarm = ({ audioRef, idAudio }) => {
  return (
    <audio
      id={idAudio}
      ref={audioRef}
      src={soundAlarm}
    />

  )
}
export default Alarm
