import { ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import Step from '../src/components/Confirmation/Step';
import DeliveryMethod from '../src/components/Confirmation/DeliveryMethod';
import Payment from '../src/components/Confirmation/Payment';

const ConfirmationScreen = () => {
    const [currentStep, setCurrentStep] = useState(2);
    const [option, setOption] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    return (
        <ScrollView>
            <Step currentStep={currentStep}/>
            <DeliveryMethod currentStep={currentStep} option={option} />
            <Payment currentStep={currentStep} setCurrentStep={setCurrentStep} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        </ScrollView>
    )
}

export default ConfirmationScreen