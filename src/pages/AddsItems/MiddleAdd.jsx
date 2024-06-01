/* eslint-disable react/prop-types */
import React from 'react';

const MiddleAdd = ({ title }) => {
    return (
        <div className=''>

            {
                title && <div className="mb-1 mx-auto  w-100">
                    <h3
                        className="border-2 border-bottom border-success"
                        style={{ paddingLeft: 0 }}
                    >
                        <span className="fs-5 bg-success px-2 py-1 text-nowrap text-white">
                            {title ? title : ''}
                        </span>
                    </h3>
                </div>
            }



           
        </div>
    );
};

export default MiddleAdd;