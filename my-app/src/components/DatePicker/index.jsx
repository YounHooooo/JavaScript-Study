import React from "react";
import { useState } from "react";
import "./styled";

export const DatePicker = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    return (
            <PickerWrapper>
                <Header>
                        <p>{monthNames[currentMonth]}</p>
                </Header>
                <Body>
                    <SevenGolGrid>

                    </SevenGolGrid>
                </Body>
            </PickerWrapper>
    )
};

export default DatePicker;



