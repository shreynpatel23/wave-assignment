import React from 'react';
import { ICustomer } from '../../interface';
import KevValue from '../KeyValuePair';

export default function CustomerCard(props: { customer: ICustomer }) {
    const { customer } = props;
    const {
        name,
        email,
        address,
        channel,
        city,
        country,
        postal,
        province
    } = customer;
    return <div className='p-4 bg-[#f5fafa] border border-[#73cdeb] rounded-[8px] w-[100%] md:w-[350px] lg:w-[400px]'>
        <KevValue label='Customer Name'>
            <h2 className="text-xl font-bold">
                {name}
            </h2>
        </KevValue>
        <KevValue label='Customer Email' value={email} />
        <div className="flex items-start flex-wrap">
            <div className="w-[30%]">
                <KevValue label='Channel' value={channel} />
            </div>
            <div className="w-[40%]">
                <KevValue label='Address' value={address} />
            </div>
            <div className="w-[30%]">
                <KevValue label='Postal' value={postal} />
            </div>
            <div className="w-[30%]">
                <KevValue label='City' value={city} />
            </div>
            <div className="w-[40%]">
                <KevValue label='Province' value={province} />
            </div>
            <div className="w-[30%]">
                <KevValue label='Country' value={country} />
            </div>
        </div>
        <button className="px-8 py-2 mt-4 mb-2 bg-[#264e6e] text-white rounded-md">
            Edit
        </button>
    </div>
}