  const fontSizeControl = document.getElementById('font-size-control');
    const textElement = document.getElementById('text');

    function newFontSize() {
      const fontSize = fontSizeControl.value + 'px';
      textElement.style.fontSize = fontSize;
    }
    fontSizeControl.addEventListener('input', newFontSize);
    
    newFontSize();