import { Router } from '@vaadin/router';
import { dedupeMixin } from '@open-wc/dedupe-mixin';

export const RouterMixin = dedupeMixin(
  (superclass) => {
    return class RouterMixin extends superclass {

      async firstUpdated(changeProperties) {
        super.firstUpdated(changeProperties);
        const router = new Router(this.shadowRoot.querySelector('#outlet'));

        await router.setRoutes(this.routes);
      }

      navigation(path) {
        if (path) {
          Router.go({ pathname: path });
        }
      }
    }
  }
);
