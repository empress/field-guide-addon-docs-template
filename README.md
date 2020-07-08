field-guide-addon-docs-template
==============================================================================

This is a template designed to work with [field-guide](https://github.com/empress/field-guide) and is a fully-functional, static site implementation of a documentation site built on EmberJS with fully working out of the box SEO friendly output. It supports being hosted on Netlify, Github Pages, AWS S3 or any other static site hosting solution.

This template is a fork of the visual aspects of [ember-cli-addon-docs](https://github.com/ember-learn/ember-cli-addon-docs) but allowing you to use the underlying Field Guide implemenetation. This is intended to be used by people who are in the progress of migrating from ember-cli-addon-docs and don't want a drastic visual change at the same time. **I'm not sure how long this template will be supported** as it has quite a complex build system inherited from the upstream project.

For more information on how to use this system [read the Field Guide documentation](https://github.com/empress/field-guide#readme) but if you want to get started straight away, try the quick start below.

If you want an example of Field Guide "in production" (with a different template) then check out the [Ember Styleguide](https://ember-styleguide.netlify.app). If you use Field Guide in production let me know [on Twitter](https://twitter.com/real_ate) and I can add a "built with field-guide" wiki.

You do not need to be a web developer to be able to use this system. You just write markdown files and the rest of the work is performed by EmberJS' build system.

Quick Start
------------------------------------------------------------------------------

```sh
npm init ember-addon super-addon

cd super-addon

ember install field-guide field-guide-addon-docs-template
```

It will ask you if you want to update the `index.html` file and you should say yes 👍

If you want to see Field Guide running on your local machine just run `npm start` and you will be able to navigate to  [http://localhost:4200](http://localhost:4200) to see the system in action.

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
