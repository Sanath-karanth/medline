import React, { Fragment, FunctionComponent, lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const NotFound: FunctionComponent = () => <Fragment>Not Found!!</Fragment>;
const Loading: FunctionComponent = () => <Fragment>Loading...</Fragment>;

const PlantNumberComponent = lazy(() => import('../containers/PlantNumber/PlantNumber'));
const WorkOrderNumberComponent = lazy(
  () => import('../containers/WorkOrderNumber/WorkOrderNumber'),
);

const DesignTechnicianComponent = lazy(
  () => import('../containers/DesignTechnician/DesignTechnician'),
);

const AdminComponent = lazy(() => import('../containers/Admin/Admin'));

const Routers: FunctionComponent = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route
              path='/design-technician'
              element={
                <Navigate state={{ user: 'DT' }} replace to='/design-technician/plant-number' />
              }
            />
            <Route path='/design-technician/:route' element={<DesignTechnicianComponent />} />
            <Route path='/design-technician/plant-number' element={<PlantNumberComponent />} />
            <Route
              path='/design-technician/work-order-number'
              element={<WorkOrderNumberComponent />}
            />
            <Route path='/admin' element={<AdminComponent />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Fragment>
  );
};

export default Routers;
