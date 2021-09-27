import React, {useRef, useEffect} from 'react';
import {mount} from 'booking/BookingPage';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        console.log(`calling bookingspage app mount`);
        console.log(`bokkingspage mount: ${mount}`);
        const {onParentNavigate} = mount(ref.current, {
            onNavigate: ({pathname : nextPathName}) => {
                console.log(`bookings app -> nextPathName in container callback: ${nextPathName}`);
                const currenPathName = history.location.pathname;
                currenPathName !== nextPathName && history.push(nextPathName);
            },
            initalPathName: history.location.pathname,
        });
        history.listen(onParentNavigate);
    },[])

    return (
        <div ref={ref}/>
    )
}