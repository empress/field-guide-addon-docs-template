/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class DocsViewerXNavComponent extends Component {
  @service media;

  get sortedTocs() {
    return this.args.tocs.sort((a, b) => {
      // index a the top always
      if(a.title === 'index' && b.title !== 'index') {
        return -1;
      }

      if(b.title === 'index' && a.title !== 'index') {
        return 1;
      }

      return a.title.localeCompare(b.title);
    });
  }
}
