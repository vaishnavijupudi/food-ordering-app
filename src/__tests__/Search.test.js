import {fireEvent, render,screen } from '@testing-library/react'
import Body from '../components/Body'
import { act } from "react-dom/test-utils";
import MOCK_DATA from '../mocks/resListMockData.json'
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        },
    })
})

test('Should render the search component', async()=>{

    await act(async()=>  render(<BrowserRouter><Body/></BrowserRouter>))

    const searchButton = screen.getByRole("button", { name: "Search" })

    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput, {taget: {value: "Chinese"}})
    fireEvent.click(searchButton);

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(9)
})