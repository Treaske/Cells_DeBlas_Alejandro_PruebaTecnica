import { css } from "lit-element";

export const createProductsStyle = css`
    :host {
        display: block;
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
    }

    h1 {
        color: #333;
        font-size: 24px;
        margin-bottom: 20px;
    }

    form {
        display: grid;
        gap: 15px;
    }

    label {
        display: block;
        font-size: 16px;
        margin-bottom: 5px;
    }

    input {
        width: 100%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button {
        cursor: pointer;
        padding: 10px;
        font-size: 16px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
    }

    button:hover {
        background-color: #0056b3;
    }
`;
