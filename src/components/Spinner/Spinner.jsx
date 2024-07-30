import React from 'react';
import { Oval } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <>
      <Oval
        visible={true}
        height="40"
        width="40"
        color="white"
        secondaryColor=""
        strokeWidth={7}
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
};
