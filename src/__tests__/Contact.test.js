import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom"

describe("Contact Us test cases", ()=>{
    it('Should load contact us component', ()=>{
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    
    })
    
    it('Should load button inside contact us component', ()=>{
        render(<Contact/>);
    
        const button = screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
    
    })
    
    test('Should load name inside contact us component', ()=>{
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("Name");
    
        expect(inputName).toBeInTheDocument();
    
    })
    
    test('Should load two input boxes', ()=> {
        render(<Contact/>);
    
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
    })
})

