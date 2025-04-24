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

// Breathing exercise
function startBreathing() {
  const exercise = document.getElementById('breathingExercise');
  const circleText = document.querySelector('.circle-text');
  exercise.style.display = 'flex';
  
  let phase = 'inhale';
  updateBreathingText();
  
  function updateBreathingText() {
    switch(phase) {
      case 'inhale':
        circleText.textContent = 'שאפו';
        phase = 'hold';
        setTimeout(updateBreathingText, 4000);
        break;
      case 'hold':
        circleText.textContent = 'החזיקו';
        phase = 'exhale';
        setTimeout(updateBreathingText, 7000);
        break;
      case 'exhale':
        circleText.textContent = 'נשפו';
        phase = 'inhale';
        setTimeout(updateBreathingText, 8000);
        break;
    }
  }
}

function closeBreathing() {
  const exercise = document.getElementById('breathingExercise');
  exercise.style.display = 'none';
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