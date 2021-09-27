import React, {useRef, useEffect} from 'react';
import {mount} from 'homePage/HomePage';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const {onParentNavigate} = mount(ref.current, {
            onNavigate: ({pathname : nextPathName}) => {
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