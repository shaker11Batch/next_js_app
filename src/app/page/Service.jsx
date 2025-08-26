import Image from 'next/image';
import React from 'react';

const Service = ({ item }) => {
    const { title, service_id, img } = item;
    return (
        <div className='col-span-12 md:col-span-6 lg:col-span-4'>
            <Image src={img} width={400} height={400} />
            <p>{title}</p>
            <p> {service_id}</p>
        </div>
    );
};

export default Service;