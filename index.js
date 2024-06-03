class Typewriter {
    constructor(elementId, texts) {
      this.texts = texts;
      this.element = document.getElementById(elementId);
      this.currentIndex = 0;
      this.currentChar = 0;
      this.displayText = '';
      this.isDeleting = false;
      this.startTyping();
    }
  
    startTyping() {
      this.typeText();
    }
  
    typeText() {
      const currentText = this.texts[this.currentIndex];
      if (this.isDeleting) {
        if (this.currentChar > 0) {
          this.displayText = currentText.substring(0, this.currentChar - 1);
          this.currentChar--;
        } else {
          this.isDeleting = false;
          this.currentIndex = (this.currentIndex + 1) % this.texts.length;
        }
      } else {
        this.displayText = currentText.substring(0, this.currentChar + 1);
        this.currentChar++;
        if (this.currentChar === currentText.length + 1) {
          this.isDeleting = true;
          setTimeout(() => this.typeText(), 2000);
          return;
        }
      }
      this.updateDisplay();
      setTimeout(() => this.typeText(), this.isDeleting ? 100 : 80);
    }
  
    updateDisplay() {
      const textElement = document.getElementById('typewriter-text');
      textElement.textContent = this.displayText;
    }
  }
  
  // Usage
  document.addEventListener('DOMContentLoaded', () => {
    const typewriter = new Typewriter("typewriter-text", ["Une experte en", "Dev front", "Dev mobile", "Dev backend"]);
  });
  