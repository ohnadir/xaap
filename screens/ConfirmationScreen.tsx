import { ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import Step from '../src/components/Confirmation/Step';
import DeliveryMethod from '../src/components/Confirmation/DeliveryMethod';

const ConfirmationScreen = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [option, setOption] = useState(false);
    return (
        <ScrollView>
            <Step currentStep={currentStep}/>
            <DeliveryMethod currentStep={currentStep} option={option} />
        </ScrollView>
    )
}

export default ConfirmationScreen