const inputElement = document.getElementById('validation-input');

    function validateInput() {
      const expectedLength = parseInt(inputElement.getAttribute('data-length'));
      const currentLength = inputElement.value.length;

      if (currentLength === expectedLength) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
      } else {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid');
      }
    }
    inputElement.addEventListener('blur', validateInput);