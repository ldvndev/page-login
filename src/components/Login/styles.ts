import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-background);
`

export const Content = styled.div`
  width: 70%;
  height: 80vh;
  background: var(--background);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .212);
  border-radius: 0.25rem;
  display: flex;

  .form-container{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;


    form {
      max-width: 400px;
      
      img {
        margin-bottom:6rem;
      }

      h1 {
        margin-bottom: 1.5rem;
      }

      p {
        margin-bottom: 2rem;
      }

      span {
        color: red;
        font-weight: 400;
      }

      input{
        width: 100%;
        padding: 0 1.5rem;
        height: 3.5rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        & + input {
         margin-top: 1rem;
        }
      }

      button{
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        margin: 1rem 0 1rem 0;
        background: #7C3AED;
        color: #fff;
        font-size: 1rem;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }

      .forgot-password {
        margin-left: 15rem;
        color: #7C3AED;
      
        transition: filter 0.2s;

        &:hover{
          filter: brightness(0.9);
        }
      }


      .sign-up{
        color: #7C3AED;

        transition: filter 0.2s;

        &:hover{
          filter: brightness(0.9);
        }
      }
    }
  }

  .background-container{
    overflow: hidden;
    border-radius: 0.25rem;
  }
`