import React from 'react';
import ReactLoading from 'react-loading';
import { useLoadingModal } from './useLoadingModal';
import './LoadingModal.css';

function LoadingModal({ isOpen }) {
  const { wrapperClass } = useLoadingModal({ isOpen });
  return (
    <div className={wrapperClass}>
      <div className="loadingModal">
        <ReactLoading
          type="bubbles"
          color="#357EDD"
          width={'100%'}
          height={'100%'}
        />
      </div>
    </div>
  );
}

export { LoadingModal };
