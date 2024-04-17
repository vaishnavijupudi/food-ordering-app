import RestaurantCard from '../components/RestaurantCard'
import {render,screen } from '@testing-library/react'
import MOCK_DATA from '../mocks/resCardMockData.json'
import "@testing-library/jest-dom"


test('Should render RestaurantCard component  ', ()=>{

    render(<RestaurantCard resData= {MOCK_DATA}/>)

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument()

})