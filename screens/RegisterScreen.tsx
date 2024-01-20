import { KeyboardAvoidingView, Pressable, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import Logo from '../components/Logo';
import CustomInput from '../src/components/Common/CustomInput';
import CommonButton from '../src/components/Common/CommonButton';

const RegisterScreen = () => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: "center"}}>
      <View>
        <Logo />
      </View>

      <KeyboardAvoidingView>
        <View>
          <Text
            style={{
              fontSize: 17,
              marginTop: 20,
              fontWeight: 'bold',
              color: '#041E42',
              textAlign: "center"
            }}>
            Register to your account
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <View>
            <CustomInput name='name' placeholder='Enter Your Name' icon={require('../src/assets/user.png')} />
          </View>
          <View style={{marginTop: 20}}>
            <CustomInput name='email' placeholder='Enter Your Email' icon={require('../src/assets/email.png')} />
          </View>
          <View style={{marginTop: 20}}>
            <CustomInput name='password' placeholder='Enter Your Password' icon={require('../src/assets/padlock.png')} type={true} />
          </View>
        </View>

        <View 
          style={{
            flexDirection: "row", 
            backgroundColor: 'white', 
            alignItems: 'center', 
            justifyContent:"space-between",
            marginTop: 8,
          }}
        >
          <Text>Keep me logged in</Text>
          <Text style={{color: "blue"}}>Forgot Password</Text>
        </View>

        <CommonButton label='Register' color="#FEBE10" />

        <Pressable style={{marginTop: 5}}>
          <Text
            style={{
              textAlign: "center",
            }}
          >
            Don't Have e Account? Sing In
          </Text>
        </Pressable>

      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen
