# Simple LightMode
This library provides a simple and flexible way to manage light and dark themes in web applications. It offers a `LightMode` class that can be easily integrated into your project to enable dynamic theme switching based on user preferences or custom settings.
### Features
-   **Customizable**: Define custom theme names, target elements, and storage attributes to suit your application's needs.
-   **Automatic Detection**: Automatically detects the user's preferred color scheme based on their device settings.
-   **Persistent Storage**: Persists the selected theme mode across page reloads using local storage.
-   **Easy Integration**: Simply instantiate the `LightMode` class with optional configuration options to start managing themes effortlessly.
## Instalation
```
npm i light-mode
```
## Usage
**Initialization:** Create an instance of the `LightMode` class with optional configuration options.
```ts
// Initialize LightMode with default options
const lightMode = new LightMode();

// Initialize LightMode with custom options
const customOptions = {
    target: "#myElement",
    themeNames: { light: "day", dark: "night" },
    attribute: "data-custom-theme",
    startTheme: "light"
};
const lightModeWithCustomOptions = new LightMode(customOptions);
```
**Theme Switching**: Toggle or set the theme mode as needed.
```ts
// Toggle theme mode
lightMode.toggleTheme();

// Set theme mode
lightMode.theme = "dark";
```
**Custom options** :
|Parameter|default|Description|
|--|--|--| 
|`target`|`"html"`|Specifies the target element selector|
|`themeNames`|`{ light: "light" , dark: "dark"}`|Names of the light and dark themes that are set in data attributes.  |
|`attribute`|`"data-theme"`|Specifies the attribute used to store the theme.|
|`startTheme`|`"default"`|Specifies the initial theme mode.|


### Example
```ts
import LightMode from 'light-mode'

const  lightMode  =  new  LightMode();
const  buttons  =  document.querySelectorAll("button");
//toggling button
buttons[0].addEventListener("click",()=>{
	lightMode.toggleTheme();
});
//setting specific theme
buttons[1].addEventListener("click",()=>{
	lightMode.theme=  "light";
});
buttons[2].addEventListener("click",()=>{
	lightMode.theme  =  "dark";
});
buttons[3].addEventListener("click",()=>{
	lightMode.theme  =  "default";
});
```
## Documentation

#### `ThemeMode` Type

Defines the possible modes for the theme: `"light"`, `"dark"`, or `"default"`.

#### `ThemeOptions` Type

-   `target?: string`: Specifies the target element selector. Defaults to `"html"`.
-   `themeNames?: { light: string, dark: string }`:Names of the light and dark themes that are set in data attributes. Defaults to `"light"` and `"dark"` respectively.
-   `attribute?: string`: Specifies the attribute used to store the theme. Defaults to `"data-theme"`.
-   `startTheme?: ThemeMode`: Specifies the initial theme mode. Defaults to `"default"`.

#### `LightMode` Class

Represents a light mode theme manager.
##### Constructor

-   `constructor(options?: ThemeOptions)`: Initializes the `LightMode` instance with optional configuration options.

##### Methods

-   `toggleTheme()`: Toggles between light and dark theme modes.
-   `set theme(newMode: ThemeMode)`: Sets the theme mode.
-   `get theme(): ThemeMode`: Retrieves the current theme mode.


