import {
  PolymerElement,
  html,
} from "../polymer-demo/node_modules/@polymer/polymer/polymer-element.js";

class HelloWords extends PolymerElement {
  static get properties() {
    return {
      name: { type: String },
    };
  }

  static get template() {
    return html`<style>
        h2 {
          color: blue;
        }
        p {
          font-size: 20px;
          color: red;
        }
      </style>
      <h2>Hello [[name]]!</h2>
      <input value="[[name]]" placeholder="Enter your name" /> `;
  }
}

customElements.define("hello-words", HelloWords);
