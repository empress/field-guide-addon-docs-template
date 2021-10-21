import Component from '@glimmer/component';
import config from 'ember-get-config';

export default class DocsHeroComponent extends Component {
  fieldGuideConfig = config['field-guide'];
}
