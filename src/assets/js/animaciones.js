import { createAnimation } from 'https://cdn.jsdelivr.net/npm/@ionic/core@latest/dist/esm/index.mjs';

const enterAnimation = (baseEl) => {
  const root = baseEl.shadowRoot;

  const backdropAnimation = createAnimation()
    .addElement(root.querySelector('ion-backdrop'))
    .fromTo('opacity', '0.01', '0.4');

  const wrapperAnimation = createAnimation()
    .addElement(root.querySelector('.modal-wrapper'))
    .keyframes([
      { offset: 0, opacity: '0', transform: 'scale(0)' },
      { offset: 1, opacity: '0.99', transform: 'scale(1)' }
    ]);

  return createAnimation()
    .addElement(baseEl)
    .easing('ease-out')
    .duration(500)
    .addAnimation([backdropAnimation, wrapperAnimation]);
}

const leaveAnimation = (baseEl) => {
  return enterAnimation(baseEl).direction('reverse');
}
  
const button = document.querySelector('ion-button');

button.addEventListener('click', async () => {
  const modalElement = document.createElement('ion-modal');
  modalElement.component = 'modal-page';
  modalElement.enterAnimation = enterAnimation;
  modalElement.leaveAnimation = leaveAnimation;

  document.body.appendChild(modalElement);
  await modalElement.present();
});

customElements.define('modal-page', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal Header</ion-title>
          <ion-buttons slot="primary">
            <ion-button>
              <ion-icon slot="icon-only" name="close"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        Modal Content
      </ion-content>
    `;
    
    const button = this.querySelector('ion-button');
    button.addEventListener('click', async () => {
      const modalElement = document.querySelector('ion-modal');
      await modalElement.dismiss();
    });
  }
});