import { css } from "lit-element";

export const landingHomeStyle = css`
    :host {
        display: block;
        max-width: 800px;
    }

    h1 {
        font-family: Arial, sans-serif;
        color: #3A6EA5;
        font-size: 24px;
        margin: 30px;
    }

    .productos-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
    }
`;
