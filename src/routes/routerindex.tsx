import React, { Fragment, FunctionComponent, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const NotFound: FunctionComponent = () => <Fragment>Not Found!!</Fragment>;
const Loading: FunctionComponent = () => <Fragment>Loading...</Fragment>;

const PlantNumber = lazy(() => import('../containers/PlantNumber/PlantNumber'));
const DesignTechnicianComponent = lazy(
  () => import('../containers/DesignTechnician/DesignTechnician'),
);
const Routers: FunctionComponent = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PlantNumber />}></Route>
            <Route path='/design' element={<DesignTechnicianComponent />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Fragment>
  );
};

export default Routers;
