import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Formulario from "./formulario"
import { expect, test } from "vitest"


test('Probando el input', () => {
    render(
        <MemoryRouter>
            <Formulario/>
        </MemoryRouter>
    )
    const inputNombre = screen.getByLabelText("Nombre:");
    fireEvent.change(inputNombre,{target:{value: "Pedrito"}});
    expect(inputNombre.value).toBe("Pedrito");
})