import React from 'react';
import './DateModal.css';
import { useDateModal } from './useDateModal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Button } from '../../atoms/Button/Button';

function DateModal ({
  isOpenCalendar,
  onClickDate,
  selectRange,
  maxDate,
  closeModal
}) {
  const { wrapperClass } = useDateModal({ isOpenCalendar });
  return (
    <div className={wrapperClass}>
      <Calendar
        onChange={onClickDate}
        selectRange={selectRange}
        maxDate={maxDate}
      />
      {selectRange && (
        <Button
          text='Cancel'
          variant='btn Cancel'
          onClickButton={closeModal}
          type='button'
        />
      )}
    </div>
  );
}

export { DateModal };
