import React, { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
import '../../styles/DatePicker.scss';

registerLocale("es", es);

const DatePickerComponent = React.forwardRef((props, ref) => {

    const { nameForm, maxDate, handleChange, selectValue, onBlur, disabled } = props
    const [startDate, setStartDate] = useState(false);

    const change = (date) => {
        handleChange(date)
        setStartDate(date);
    }

    return (
        <>
            <DatePicker 
                name={nameForm}
                className='form-control'
                autocomplete="off"
                selected={startDate ? startDate : selectValue}
                onChange={(date) => change(date)}
                onBlur={onBlur}
                disabled={disabled}
                dateFormat="dd/MM/yyyy"
                locale="es"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                maxDate={maxDate}
                popperClassName="some-custom-class"
                popperPlacement="top-end"
                popperModifiers={[
                    {
                        name: "offset",
                        options: {
                            offset: [5, 10],
                        },
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            rootBoundary: "viewport",
                            tether: false,
                            altAxis: true,
                        },
                    },
                ]}
            />
        </>
    );
})
export default DatePickerComponent;