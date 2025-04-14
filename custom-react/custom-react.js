function customRender(reactEl, container) {
  const domElement = document.createElement(reactEl.type);
  domElement.innerHTML = reactEl.children;
  domElement.setAttribute("href", reactEl.props.href);
  domElement.setAttribute("target", reactEl.props.target);
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
