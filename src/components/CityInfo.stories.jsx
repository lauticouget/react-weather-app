import React from 'react'
import 'typeface-roboto';
import CityInfo from './CityInfo'

const CityInfoStory = {
    title: "CityInfo",
    component: CityInfo
}

export default CityInfoStory;

export const CityExample = () => <CityInfo city={"Buenos Aires"} country={"Argentina"}></CityInfo>