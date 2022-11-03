import React, { Fragment, FunctionComponent, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const NotFound: FunctionComponent = () => <Fragment>Not Found!!</Fragment>;
const Loading: FunctionComponent = () => <Fragment>Loading...</Fragment>;

const LoginComponent = lazy(() => import('../containers/Login/login'));
const Routers: FunctionComponent = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginComponent />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Fragment>
  );
};

export default Routers;
