
import React from 'react';

import Table from './components/Table/index.js';
import { data } from './mockData';
import { tableConstants } from './tableConstant';


const Dashboard = () => {
    const handleEdit = (item) => () => {
        // write your logic
        alert(JSON.stringify(item))
    }

    return (
        <>
            <h4>Default Table</h4>
            <Table cols={tableConstants(handleEdit)} data={data} />
        </>
    );
}

export default Dashboard;