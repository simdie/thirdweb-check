import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: '',
    traderName: '',
    minProfit: '',
    minCapital: '', 
    commission: '',
    image: ''
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if(exists) {
        setIsLoading(true)
        await createCampaign({ ...form, target: ethers.utils.parseUnits(form.minCapital, 18)})
        setIsLoading(false);
        navigate('/');
      } else {
        alert('Provide valid image URL')
        setForm({ ...form, image: '' });
      }
    })
  }

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex flex-col justify-center items-center p-[10px] sm:min-w-[380px] bg-[#1c1c24] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[18px] text-[18px] leading-[38px] text-white bg-[#3a3a43] px-6 py-3 rounded-lg">Create Copy Trade Contracts</h1>
        <h1 className=" font-semibold sm:text-[14px] text-[15px] text-center pt-3 text-white bg-[#1c1c24]">Strictly for Eosi FInance Protraders to Create their Smart Contract Copytrade Quotes</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
          <FormField 
            labelName="Pro-Trader name *"
            placeholder="Write Display Name"
            inputType="text"
            value={form.traderName}
            handleChange={(e) => handleFormFieldChange('traderName', e)}
          />
        </div>

        <FormField 
            labelName="Monthly Minimum Profit *"
            placeholder="Ex. 5 ~ 10 %"
            isTextArea
            value={form.minProfit}
            handleChange={(e) => handleFormFieldChange('minProfit', e)}
          />

        {/* <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
          <img src={money} alt="money" className="w-[40px] h-[40px] object-contain"/>
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">You will get 100% of the raised amount</h4>
        </div> */}

        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Minimum Capital *"
            placeholder="500 USD"
            inputType="text"
            value={form.minCapital}
            handleChange={(e) => handleFormFieldChange('minCapital', e)}
          />
          <FormField 
            labelName="Monthly Commission *"
            placeholder="Commission %"
            inputType="text"
            value={form.commission}
            handleChange={(e) => handleFormFieldChange('commission', e)}
          />
        </div>

        <FormField 
            labelName="Trader Profile Image *"
            placeholder="Place image URL of your profile Image in jpeg or png"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange('image', e)}
          />

          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton 
              btnType="submit"
              title="Submit new campaign"
              styles="!bg-purple-700 text-sm"
            />
          </div>
      </form>
    </div>
  )
}

export default CreateCampaign