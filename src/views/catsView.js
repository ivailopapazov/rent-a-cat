import { html, render } from '../lib/lit-html.js';

const template = () => html`
    <h1>Cats Page</h1>
`;

export default function (ctx) {
    ctx.render(template());
}
