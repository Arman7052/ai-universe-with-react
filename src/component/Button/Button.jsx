import React from 'react';

const Button = (props) => {
    const {children} = props;
    return (
        <div className='text-center py-4'>
            <button className="btn btn-warning text-center py-3">{children}</button>
        </div>
    );
};

export default Button;