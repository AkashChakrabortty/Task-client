import React from 'react';
import SideBar from '../SideBar/SideBar';
import Table from '../Table/Table';

const MiddleContainer = () => {
    return (
        <div className='mt-5 d-flex'>
          <SideBar></SideBar>
          <Table></Table>
        </div>
    );
};

export default MiddleContainer;