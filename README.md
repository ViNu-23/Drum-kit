# DJ Drum-kit 

<img width="360" alt="Screenshot 2023-11-11 032216" src="https://github.com/ViNu-23/Drum-kit/assets/59360964/4d7b6b77-628d-4e8f-8181-66b30cba999b">

This JavaScript code, in conjunction with the HTML and CSS you provided earlier, creates a simple web application that plays different audio files when you click on different drum elements.

Here's an overview of how the application works:

1. **HTML Structure:**
   - The HTML includes a set of div elements with the class "drum". Each div represents a drum element that the user can click on.

2. **CSS Styling:**
   - The CSS is responsible for styling the drum elements and defining their appearance, including different background colors and hover effects.

3. **JavaScript Code:**
   - The JavaScript code adds click event listeners to all elements with the class "drum".
   - When a drum element is clicked, it extracts the class name of the clicked element using `this.className`.
   - The extracted class name is passed to the `makeSound` function after splitting it to get the first part of the class (e.g., "a", "b", "c", etc.).

4. **`makeSound` Function:**
   - The `makeSound` function takes a key as an argument.
   - Based on the value of the key, it sets the `src` property of an `Audio` object to the corresponding audio file.
   - The audio file paths are constructed based on the key using a switch statement.
   - The function then plays the audio file using the `play()` method.

5. **Audio Files:**
   - The audio files ("audio/song (1).mp3", "audio/song (2).mp3", etc.) are assumed to be available in the specified file paths relative to the HTML file.

6. **Switch Statement:**
   - The switch statement checks the value of the key and assigns the appropriate audio file path to the `src` property of the `Audio` object.
   - If the key doesn't match any case, it logs "default" to the console.

# Play Demo Here: 
https://vinu-23.github.io/Drum-kit-Using-JS/
