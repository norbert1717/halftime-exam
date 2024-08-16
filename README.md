# Description
You have to complete 3 functions in 3 different files:
- fizzBuzz -> `fizzBuzz.js`
- leetSpeak -> `leetSpeak.js`
- gettingDrunkCheap -> `gettingDrunkCheap.js`

Also, you have to make a UI build *(in a public repository)* of the attached pictures - *more on that later*.

Only write in the listed .js files. Do not change any starter code.

Each function should return a value, depending on the task.

You can run some built-in tests witn the `node test.js` command.  
You can run the .js files independently with the `node filename.js` command.

*Don't forget to add me (ricsimarta) as a contributor to this repository!*

---

# fizzBuzz
Write a function, that has 2 number parameters: `num1` and `num2`.  
The function should return an array of the numbers between, and including the 2 parameters, in ascending order, with some exceptions:
- if the number is a multiple of 3, you should change the number to `"fizz"`
- if the number is a multiple of 5, you should change the number to `"buzz"`
- if the number is a multiple of 3 **and** 5, you should change the number to `"fizzbuzz"`

The passed numbers are always positive integers, no need to check those.

examples:

`fizzBuzz(1, 5)` should return `[1, 2, "fizz", 4, "buzz"]`  
`fizzBuzz(5, 1)` should return `[1, 2, "fizz", 4, "buzz"]`  
`fizzBuzz(10, 15)` should return `["buzz", 11, "fizz", 13, 14, "fizzbuzz"]`  
`fizzBuzz(15, 10)` should return `["buzz", 11, "fizz", 13, 14, "fizzbuzz"]`

---

# leetSpeak
Write a function that has 1 string parameter: `text`.  
The function should return the same string **in uppercase**, with some changes:
- all of the `"O"` letters are changed to `"0"` characters
- all of the `"I"` and `"L"` letters are changed to `"1"` characters
- all of the `"Z"` letters are changed to `"2"` characters
- all of the `"E"` letters are changed to `"3"` characters
- all of the `"A"` letters are changed to `"4"` characters
- all of the `"S"` letters are changed to `"5"` characters
- all of the `"G"` letters are changed to `"6"` characters
- all of the `"T"` letters are changed to `"7"` characters
- all of the `"B"` letters are changed to `"8"` characters

examples:

`leetSpeak("hello world!")` should return `"H3110 W0R1D!"`  
`leetSpeak("Lorem Ipsum)` should return `"10R3M 1P5UM"`

# gettingDrunkCheap
Write a function that has 1 parameter: `drinks`.  
The `drinks` parameter is an array of `drink` objects.  

You will always get an array of `drink` objects, no need to check those.

An example of a `drink` object:
```
{
  name: "Vodka",
  price: 5500,
  abv: 37.5,
  volume: 0.7
}
```

The function should iterate through the array, and give each `drink` object a new key: `pricePerAbv`.  
The `pricePerAbv` key should have a number value, that you get from this formula:
```
pricePerAbv = price / volume / abv
```

The function should return the object with the lowest `pricePerAbv` value **rounded down**, in the following fashion:
```
{
  name: "Pálinka",
  pricePerAbv: 200
}
```
---
example drinks array:
```
[
  {
    name: "Vodka",
    price: 5500,
    abv: 37.5,
    volume: 0.7
  }, 
  {
    name: "Whiskey",
    price: 7000,
    abv: 40,
    volume: 0.7
  }, 
  {
    name: "Pálinka",
    price: 10000,
    abv: 50,
    volume: 1
  }
]
```

example running with the same drinks array:  
`gettingDrunkCheap(shortDrinks)` should return
```
{
  name: "Pálinka",
  pricePerAbv: 200
}
```

*Don't forget to add me (ricsimarta) as a contributor to this repository!*

---

# UI build
Create a **public** repository with the `halftime-exam-uibuild` name.  
**Work in the created repository!**

Make a UI build from the attached 2 pictures:
- `uibuild_desktop.png` for the desktop view
- `uibuild_mobile.png` for the mobile view

The solution should be presented on Github Pages, with a link like this: https://username.github.io/halftime-exam-uibuild

The `index.html` files `<body>` should contain **only** one element: `<div id="root"></div>`.  
All the other elements should be added from a javascript file with DOM manipulation.

Opening the Github Pages link in Google Chrome or Firefox browser, the page is presented, and is similar to the design as much as possible. Especially margins, and paddings in and between the elements and text nodes.

There is a `<h1>` element which contains the text `Visszajelzés` with `Poppins` font from Google fonts with `bold` font weight, `24px` font size on both desktop and mobile viewport size. The text is aligned to the left when the viewport is smaller than `640px`. Text color: `#467745`.

There is a text type `<input>` element, which has the text `Tárgy` as a placeholder with `Poppins` font from Google fonts, with `medium` font weight, `16px` font size on both desktop and mobile size viewports. The maximum width of the element is `600px` and the height is `64px`. On viewports smaller than `640px`, the width of the element is `100% - 40px` of the viewport. In these cases, the distance between the viewports left and the elements left side is `20px`. Text color: `#467745`.

There is a `<textarea>` element which has the text `Megjegyzés` as a placeholder with `Poppins` font from Google fonts, with `regular` font weight, `16px` font size on both desktop and mobile size viewports. The maximum width of the element is `600px`, and the height is `120px`. On viewports smaller than `640px`, the width of the element is `100% - 40px` of the viewport. In these cases, the distance between the viewports left and the elements left side is `20px`. Text color: `#467745`.

There is two checkbox type `<input>` elements. Next to these elements are texts: `Elolvastam és elfogadom az Adatkezelési Tájékoztatót.` and `Szeretnék hírlevelet kapni.` with `Poppins` font from Google fonts with `regular` font weight, `16px` font size on both desktop and mobile size viewports. The text is breaking automatically if the viewport is smaller than the texts length. On viewports smaller than `640px`, the distance between the viewports left and the elements left size is `20px`. Text color: `#467745`.

There is a `<button>` element which contains the text `Mentés` with `Poppins` font from Google fonts with `bold` font weight, `21px` font size on both desktop and mobile size viewports. The text is exactly in the middle of the button element on both axes and the button element is horizontally centered. The maximum width of the element is `280px` and the height is `80px`. Buttons background color: `#467745`, text color: `#C0EBF9`. The letter spacing of the text is `0.2em`.

The `<body>` elements background color is: `#C0EBF9`.

There is no `id` attributes on the described elements above (except the initially created `<div id="root">` element).
