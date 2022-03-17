import classNames from 'classnames';

function useConfirmationModal({ isConfirmationOpen }) {
  const wrapperClass = classNames('glass', {
    show: isConfirmationOpen,
  });
  return { wrapperClass };
}

export { useConfirmationModal };
