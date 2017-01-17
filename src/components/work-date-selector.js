import React from 'react';

import WorkDateList from './work-date-list';
import WorkDateVisibiltySelector from './work-date-visibility-selector';
import WorkHourVisibiltySelector from './work-hour-visibility-selector';

const WorkDateSelector = () => {
    return (
        <div>
            <WorkDateList />
            <button>{'Lägg till nytt arbetsdatum'}</button>
            <WorkDateVisibiltySelector />
            <WorkHourVisibiltySelector />
        </div>
    )
};

export default WorkDateSelector;