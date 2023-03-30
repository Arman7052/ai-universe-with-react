import React from 'react';

const Singledata = (props) => {
    console.log(props.singleData);
    const { image, features, name, published_in } = props.singleData;
    return (
        <div>
            <div className="card h-full w-full bg-base-100 shadow-xl ">
                <figure className='p-3 rounded-md'><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className='card-title'>Features</h1>
                    {
                        features.map((feature, index) => (
                            <p>
                                {index + 1}.
                                {feature}
                            </p>
                        ))
                    }
                    <p></p>
                    <hr />

                    <div className="card-actions justify-between">
                        <div>
                            <h2 className="card-title">{name}</h2>
                            <p className='py-2 flex d-flex text-slate-400'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg> {published_in}</p>
                        </div>
                        <div className='py-3'>
                            <button className="btn bg-transparent border-none text-red-300	 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singledata;