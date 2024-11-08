const components = {
  Header: () => "<header>Header</header>",
  Footer: () => "<footer>Footer</footer>",
  Sidebar: () => "<aside>Sidebar</aside>",
  Content: () => "<main>Content</main>",
};

function renderComponent(name) {
  const component = components[name];
  if (typeof component === "function") {
    return component();
  } else {
    return "<div>Default Component</div>";
  }
}

// Testing
console.log(renderComponent("Header")); // Outputs: '<header>Header</header>'
console.log(renderComponent("Unknown")); // Outputs: '<div>Default Component</div>'

/*
  Explanation:

  The function checks if the component exists in the mapping.

  Conditional logic ensures that a default component is 
    returned if the specified one does not exist.
    
  This approach is common in component-based frameworks.
*/
