 const loginForm = document.querySelector('.login-form');

    function handleFormSubmit(event) {
      event.preventDefault(); 

      const formData = new FormData(loginForm);
      const formDataObject = {};

      formData.forEach((value, name) => {
        formDataObject[name] = value;
      });

      if (!formDataObject.email || !formDataObject.password) {
        alert('Please fill in all fields');
      } else {
        console.log(formDataObject);
        loginForm.reset();
      }
    }

    loginForm.addEventListener('submit', handleFormSubmit);
