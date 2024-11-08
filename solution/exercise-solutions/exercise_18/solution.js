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
