import classNames from 'classnames';

function useFormModal({ isFormModalOpen }) {
  const wrapperClass = classNames('glass', {
    show: isFormModalOpen,
  });
  return { wrapperClass };
}

export { useFormModal };
