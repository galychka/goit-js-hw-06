   const valueElement = document.querySelector('#value');
    const incrementButton = document.querySelector('[data-action="increment"]');
    const decrementButton = document.querySelector('[data-action="decrement"]');

    let counterValue = 0;
    function newCounter() {
      valueElement.textContent = counterValue;
    }
    incrementButton.addEventListener('click', () => {
      counterValue += 1;
      newCounter();
    });
    decrementButton.addEventListener('click', () => {
      counterValue -= 1;
      newCounter();
    });

