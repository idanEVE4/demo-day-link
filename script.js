 // Mood selection handling
document.querySelectorAll('.mood-item').forEach(item => {
  item.addEventListener('click', () => {
    const mood = item.dataset.mood;
    
    // Add selection animation
    item.style.transform = 'scale(0.95)';
    setTimeout(() => {
      item.style.transform = '';
    }, 200);

    // Route based on mood
    setTimeout(() => {
      switch(mood) {
        case 'anxious':
        case 'fear':
          window.location.href = 'gad7.html';
          break;
        case 'sad':
        case 'hopeless':
          window.location.href = 'phq9.html';
          break;
        case 'anger':
        case 'loneliness':
          window.location.href = 'pcl5.html';
          break;
        default:
          window.location.href = 'ai.html';
      }
    }, 300);
  });
});

  let breathingTimeout;

  function startBreathing() {
    const exercise = document.getElementById('breathingExercise');
    const circleText = document.getElementById('breathingText');
    exercise.style.display = 'flex';

    let phase = 'inhale';

    function updateBreathingText() {
      clearTimeout(breathingTimeout);

      if (phase === 'inhale') {
        circleText.textContent = 'שאפו (4 שניות)';
        phase = 'hold';
        breathingTimeout = setTimeout(updateBreathingText, 4000);
      } else if (phase === 'hold') {
        circleText.textContent = 'החזיקו את הנשימה (7 שניות)';
        phase = 'exhale';
        breathingTimeout = setTimeout(updateBreathingText, 7000);
      } else if (phase === 'exhale') {
        circleText.textContent = 'נשפו באיטיות (8 שניות)';
        phase = 'inhale';
        breathingTimeout = setTimeout(updateBreathingText, 8000);
      }
    }

    updateBreathingText();
  }

  function closeBreathing() {
    const exercise = document.getElementById('breathingExercise');
    exercise.style.display = 'none';
    clearTimeout(breathingTimeout);
  }
}
// Grounding exercise
document.querySelector('.grounding').addEventListener('click', () => {
  const items = [
    '5 דברים שאתם רואים',
    '4 דברים שאתם מרגישים',
    '3 דברים שאתם שומעים',
    '2 דברים שאתם מריחים',
    '1 דבר שאתם טועמים'
  ];
  
  let currentStep = 0;
  const button = document.querySelector('.grounding');
  
  function showNextStep() {
    if (currentStep < items.length) {
      button.innerHTML = `<span>${items[currentStep]}</span>`;
      currentStep++;
      setTimeout(showNextStep, 3000);
    } else {
      button.innerHTML = '<span>תרגיל הארקה</span>';
      currentStep = 0;
    }
  }
  
  showNextStep();
});

// Quick meditation
document.querySelector('.meditation').addEventListener('click', () => {
  const button = document.querySelector('.meditation');
  let seconds = 60;
  
  function updateTimer() {
    if (seconds > 0) {
      button.innerHTML = `<span>נשארו ${seconds} שניות</span>`;
      seconds--;
      setTimeout(updateTimer, 1000);
    } else {
      button.innerHTML = '<span>מדיטציה מהירה</span>';
    }
  }
  
  updateTimer();
});