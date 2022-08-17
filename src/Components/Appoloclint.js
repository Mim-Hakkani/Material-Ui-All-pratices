import { Divider } from '@mui/material';
import React from 'react';
import GraphQlPraticesQuery from './GraphQlPraticesQuery';
import SingleQuery from './SingleQuery';
import WithoutQuery from './WithoutUseQuery';

const Appoloclint = () => {
    return (
        <div>
            {/* <GraphQlPraticesQuery /> */}
            <Divider />
            {/* <WithoutQuery /> */}
            <SingleQuery />
        </div>
    );
};

export default Appoloclint;