import ReactDOM from 'react-dom';

let portalInstance;

const portal = (children: JSX.Element) => {
  const {
    props: { duration, style = {} },
  } = children;

  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.zIndex = style.zIndex ? style.zIndex : '100';
  document.body.appendChild(container);

  const destroy = () => {
    ReactDOM.unmountComponentAtNode(container);
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
  };

  if (portalInstance) {
    portalInstance.destroy();
    portalInstance = null;
  }

  portalInstance = { destroy };

  ReactDOM.render(children, container);

  if (duration) {
    if (typeof duration !== 'boolean') {
      setTimeout(() => {
        destroy();
      }, duration * 1000);
    }
  } else {
    destroy();
  }
};

export default portal;
