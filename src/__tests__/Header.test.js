import Header from '../components/Header'
import { fireEvent, render,screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import appStore from '../utils/appStore'
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

test('Should load Header component with login button', ()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
             <Header/>
        </Provider>
        </BrowserRouter>

    );

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
    
})


test('Should load Header component with Cart Items', ()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
             <Header/>
        </Provider>
        </BrowserRouter>

    );

    const cartItems = screen.getByText("Cart (0 items)");

    expect(cartItems).toBeInTheDocument();
    
})

test('Should change Login button to logout on click', ()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
             <Header/>
        </Provider>
        </BrowserRouter>

    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name:"Logout"})

    expect(logoutButton).toBeInTheDocument();
    
})