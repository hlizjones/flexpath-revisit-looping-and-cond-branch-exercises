// Implement a function `renderComponent` that takes a component 
// name ('Header', 'Footer', 'Sidebar', 'Content') and returns the 
// corresponding component function from an object mapping. 

// The component functions should return some simple html code in a string
// depending on the type of component selected:
// 	- Header -> uses <header> tag in the string
// 	- Footer -> uses <footer> tag in the string
// 	- Sidebar -> uses <aside> tag in the string
// 	- Content -> uses <main> tag in the string


// Use conditional logic to handle cases where the component does not exist, 
// returning a default component.

// 	- Default component -> uses <div> tag in the string

let components = {
    Header: "<header>Header</header>",
    Footer: "<footer>Footer</footer>",
    Sidebar: "<sidebar>Sidebar</sidebar>",
    Content: "<content>Content</content>"
}

function renderComponent(obj, name) {
    switch (name) {
        case "Header":
            return obj[name]
        case "Footer":
            return obj[name]
        case "Sidebar":
            return obj[name]
        case "Content":
            return obj[name]
        default:
            return "<div>Div</div>"
    }
}

let result = renderComponent(components, "Content")

console.log(result)