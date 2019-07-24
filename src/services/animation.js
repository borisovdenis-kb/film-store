export const animate = ({
  duration,
  timingFn,
  animationFn,
  steps,
  isInfinite = false
}) => {
  let start,
    timePassed,
    timeProgress,
    progressStep,
    lastTime,
    progress;

  if (steps) {
    progressStep = duration / steps;
  }

  const reset = () => {
    start = performance.now();
    timePassed = 0;
    timeProgress = 0;
    lastTime = 0;
    progress = 0;
  };

  const isStepPassed = () => {
    if (steps === undefined || (timePassed === 0 && lastTime === 0)) {
      return true;
    }

    return timePassed - lastTime >= progressStep;
  };

  reset();

  requestAnimationFrame(function runAnimation(time) {
    timePassed = time - start ;
    timePassed = timePassed > 0 ? timePassed : 0;
    timeProgress = timePassed / duration;

    const stepPassed = isStepPassed();

    progress = timingFn(timeProgress);

    if (timePassed <= duration) {
      if (stepPassed) {
        lastTime = timePassed;
        animationFn(progress);
        requestAnimationFrame(runAnimation);
      } else {
        requestAnimationFrame(runAnimation);
      }
    }

    if (timePassed >= duration && isInfinite) {
      reset();
      requestAnimationFrame(runAnimation);
    }
  });
};

const linear = (timeProgress) => timeProgress * 100;

export const timing = {
  linear
};
