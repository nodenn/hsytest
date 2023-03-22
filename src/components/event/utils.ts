import styled from 'styled-components';

interface Roulette {
  startSpinningTime: number;
  continueSpinningTime: number;
  stopSpinningTime: number;
  startRotationDegrees: number;
  finalRotationDegrees: number;
}

export const RotationContainer = styled.div<Roulette>`
  position: absolute;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(${(props) => props.startRotationDegrees + 22.5}deg);
  &.started-spinning {
    animation: spin ${({ startSpinningTime }) => startSpinningTime / 1000}s cubic-bezier(0.71, -0.29, 0.96, 0.9) 0s 1 normal forwards running,
      continueSpin 0.75s linear ${({ startSpinningTime }) => startSpinningTime / 1000}s 1 normal forwards running,
      stopSpin ${({ stopSpinningTime }) => stopSpinningTime / 1000}s cubic-bezier(0, 0, 0.35, 1.02)
        ${({ startSpinningTime, continueSpinningTime }) => (startSpinningTime + continueSpinningTime) / 1000}s 1 normal forwards running;
  }
  @keyframes spin {
    from {
      transform: rotate(${(props) => props.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(props) => props.startRotationDegrees + 360}deg);
    }
  }
  @keyframes continueSpin {
    from {
      transform: rotate(${(props) => props.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(props) => props.startRotationDegrees + 360}deg);
    }
  }
  @keyframes stopSpin {
    from {
      transform: rotate(${(props) => props.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(props) => 1462.5 + props.finalRotationDegrees}deg);
    }
  }
`;

export const getRotationDegrees = (prizeNumber: number, numberOfPrizes: number) => {
  const degreesPerPrize = 360 / numberOfPrizes;

  const prizeRotation = degreesPerPrize * (numberOfPrizes - prizeNumber);

  return numberOfPrizes - prizeNumber > numberOfPrizes / 2 ? -360 + prizeRotation : prizeRotation;
};

export const getRandomInt = (min: any, max: any) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};
