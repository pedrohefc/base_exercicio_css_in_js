import styled from 'styled-components'

export const Formulario = styled.form.attrs({})<
  React.FormHTMLAttributes<HTMLFormElement>
>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const Botao = styled.button.attrs({ type: 'button' })<
  React.FormHTMLAttributes<HTMLFormElement>
>`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`
export const Campo = styled.input.attrs({ type: 'text' })<
  React.InputHTMLAttributes<HTMLInputElement>
>`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`
