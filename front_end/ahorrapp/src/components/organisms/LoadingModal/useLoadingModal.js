import classNames from 'classnames';

function useLoadingModal({ isOpen }) {
  const wrapperClass = classNames('glass', {
    show: isOpen,
  });
  return { wrapperClass };
}

export { useLoadingModal };
