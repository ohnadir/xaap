import { ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import Step from '../src/components/Confirmation/Step';
import DeliveryMethod from '../src/components/Confirmation/DeliveryMethod';
import Payment from '../src/components/Confirmation/Payment';
import ConfirmOrder from '../src/components/Confirmation/ConfirmOrder';

const ConfirmationScreen = () => {
    const [currentStep, setCurrentStep] = useState(3);
    const [option, setOption] = useState(false);
    const [selectedOption, setSelectedOption] = useState('cash');
    const [selectedAddress, setSelectedAddress] = useState("Khilgaon");
    return (
        <ScrollView>
            <Step currentStep={currentStep}/>
            <DeliveryMethod currentStep={currentStep} option={option} setOption={setOption} />
            <Payment currentStep={currentStep} setCurrentStep={setCurrentStep} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            <ConfirmOrder currentStep={currentStep} selectedAddress={selectedAddress} selectedOption={selectedOption}/>
        </ScrollView>
    )
}

export default ConfirmationScreen