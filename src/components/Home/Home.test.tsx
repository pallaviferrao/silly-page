import React from "react";
import { render, screen } from "@testing-library/react";
import Home from './Home'

test('render something',()=>{
    render(<Home/>)

    console.log(screen)
    expect(2+4).toBe(6)
    setTimeout(() => {
        const element = screen.getByText("Pallavi");
        expect(element).toBe("")
      }, 150*8);
    
    // expect(element).toBeCalled();

})