import React, { useState } from 'react';

// * assets
import Cross from '../../assets/img/Cross.svg';

// * constants
import { CHANNEL_TYPES } from '../../constants/channelTypes';

// * utils
import { ALPHABET_REGEXP, EMAIL_REGEXP, NAME_REGEXP } from '../../utils';

// * interface
import { IEditCustomerModalProps } from './interface';
import { ICustomer, IError } from '../../interface';

// * components
import Input from '../Shared/Input';
import Button from '../Shared/Button';
import Select from '../Shared/Select';

export default function EditCustomerModal({
    customerData,
    onClose,
    onSave,
}: IEditCustomerModalProps) {
    // STATES
    const [customer, setCustomer] = useState<ICustomer>(customerData);
    const [error, setError] = useState<IError>({
        nameError: "",
        emailError: "",
    })

    function checkName() {
        if (customer?.name === "") {
            setError(prev => ({
                ...prev,
                nameError: "Name Cannot be empty"
            }))
            return false;
        }
        setError(prev => ({
            ...prev,
            nameError: ""
        }))
        return true;
    }

    function checkEmail() {
        if (customer?.email === "") {
            setError(prev => ({
                ...prev,
                emailError: "Email Cannot be empty"
            }))
            return false;
        }
        if(!EMAIL_REGEXP.test(customer?.email)) {
            console.log("It is not a valid email!");
        }
        setError(prev => ({
            ...prev,
            emailError: ""
        }))
        return true;
    }
    /**
     * 
     */
    function isButtonDisabled() {
        return !customer?.name || !customer?.email;
    }
    return <div className='fixed left-0 right-0 bottom-0 top-0 bg-[rgba(0,0,0,0.15)] h-[100vh] flex items-center justify-center'>
        <div className="bg-white p-6 rounded-lg w-[100%] md:w-[500px] m-4">
            <div className="flex items-center pb-4">
                <p className="text-2xl font-bold">Edit Customer</p>
                <div className="ml-auto">
                    <img src={Cross} alt="close icon for closing the modal" className='w-6 cursor-pointer' onClick={onClose} />
                </div>
            </div>
            <div className="pb-4">
                <Input
                    labelName='Name'
                    type='text'
                    placeholder='Enter your name'
                    value={customer?.name}
                    id={customer?.name}
                    name={customer?.name}
                    hasError={error?.nameError !== ""}
                    errorMessage={error?.nameError}
                    onChange={event => {
                        const value = event.target.value;
                        // * check if the customer name value matches the regexp
                        if (!NAME_REGEXP.test(value) && value !== "") {
                            return;
                        }
                        setCustomer(prev => ({
                            ...prev,
                            name: value
                        }))
                    }}
                    onBlur={checkName}
                />
            </div>
            <div className="pb-4">
                <Input
                    labelName='Email'
                    type='email'
                    placeholder='Enter your email'
                    value={customer?.email}
                    id={customer?.email}
                    name={customer?.email}
                    hasError={error?.emailError !== ""}
                    errorMessage={error?.emailError}
                    onChange={event => {
                        const value = event.target.value;
                        // * check if the customer email value matches the regexp
                        if (!EMAIL_REGEXP.test(value) && value !== "") {
                            return;
                        }
                        setCustomer(prev => ({
                            ...prev,
                            email: value
                        }))
                    }}
                    onBlur={checkEmail}
                />
            </div>
            <div className="pb-4">
                <Input
                    labelName='Address'
                    type='text'
                    placeholder='Enter your address'
                    value={customer?.address}
                    id={customer?.address}
                    name={customer?.address}
                    onChange={event => {
                        const value = event.target.value;
                        setCustomer(prev => ({
                            ...prev,
                            address: value
                        }))
                    }}
                />
            </div>
            <div className="pb-4">
                <Select
                    label='Channel'
                    defaultOption="Select your Channel"
                    onSelectOption={(channel) => {
                        setCustomer(prev => ({
                            ...prev,
                            channel,
                        }))
                    }}
                    selectedOption={customer?.channel}
                    selectOptions={Object.values(CHANNEL_TYPES)} />
            </div>
            <div className="flex items-center gap-4 pb-4">
                <div className="w-[50%]">
                    <Input
                        labelName='City'
                        type='text'
                        placeholder='Enter your city'
                        value={customer?.city}
                        id={customer?.city}
                        name={customer?.city}
                        onChange={event => {
                            const value = event.target.value;
                            // * check if the city value matches the regexp
                            if(!ALPHABET_REGEXP.test(value) && value !== "") {
                                return;
                            }
                            setCustomer(prev => ({
                                ...prev,
                                city: value
                            }))
                        }}
                    />
                </div>
                <div className="w-[50%]">
                    <Input
                        labelName='Postal Code'
                        type='text'
                        placeholder='Enter your postal code'
                        value={customer?.postal}
                        id={customer?.postal}
                        name={customer?.postal}
                        onChange={event => {
                            const value = event.target.value;
                            // * check if the postal code value matches the regexp
                            if(!NAME_REGEXP.test(value) && value !== "") {
                                return;
                            }
                            setCustomer(prev => ({
                                ...prev,
                                postal: value
                            }))
                        }}
                    />
                </div>
            </div>
            <div className="flex items-center gap-4 pb-4">
                <div className="w-[50%]">
                    <Input
                        labelName='Provience'
                        type='text'
                        placeholder='Enter your provience'
                        value={customer?.province}
                        id={customer?.province}
                        name={customer?.province}
                        onChange={event => {
                            const value = event.target.value;
                            // * check if the provience value matches the regexp
                            if(!ALPHABET_REGEXP.test(value) && value !== "") {
                                return;
                            }
                            setCustomer(prev => ({
                                ...prev,
                                province: value
                            }))
                        }}
                    />
                </div>
                <div className="w-[50%]">
                    <Input
                        labelName='Country'
                        type='text'
                        placeholder='Enter your Country'
                        value={customer?.country}
                        id={customer?.country}
                        name={customer?.country}
                        onChange={event => {
                            const value = event.target.value;
                            // * check if the country value matches the regexp
                            if(!ALPHABET_REGEXP.test(value) && value !== "") {
                                return;
                            }
                            setCustomer(prev => ({
                                ...prev,
                                country: value
                            }))
                        }}
                    />
                </div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4 pb-4">
                <Button
                    buttonText='Cancel'
                    className="px-8 py-2 bg-[#efefef] text-[#666] rounded-md"
                    onClick={onClose} />
                <Button
                    buttonText='Save'
                    className="px-8 py-2 bg-[#264e6e] text-white rounded-md"
                    disabled={isButtonDisabled()}
                    onClick={() => onSave(customer)} />
            </div>
        </div>
    </div>
}