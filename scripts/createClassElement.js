export default function createClassElement(elementType, classes, parent) {
  const element = document.createElement(elementType);
  element.classList = classes;
  parent.appendChild(element);
  return element;
}
