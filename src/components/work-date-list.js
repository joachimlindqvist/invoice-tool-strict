import React from 'react';

const WorkDateList = ({ workDates = [] }) => {
    return (
        <div>
            {workDates.map((workDate, key) => {
                return (<div key={key}>{workDate}</div>);
            })}
        </div>
    )
};

export default WorkDateList;