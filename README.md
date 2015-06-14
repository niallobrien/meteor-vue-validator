# meteor-vue-validator

Validator component for Vue.js with Meteor.js

See [vue-validator](https://github.com/vuejs/vue-validator) for full documentation.
This readme simply shows you how to set it up for use with Meteor.


# Requirements
- Vue.js ^`0.11.2`


# Installation

## Meteor
```shell
$ meteor add niallobrien:vue-validator
```

# Usage

```javascript
Vue.use(window['vue-validator']);
```

Be sure to call `Vue.use` before you create a new Vue instance.
In this example, we wait until the template has been rendered first.

```javascript
Template.comment.rendered = function () {
  Vue.use(window['vue-validator']);
    var vm = new Vue({
    el: '#example',
    data: {
      ...
    },
    methods: {
      ...
    },
    created: function () {
      // Subscribe to publication
      this.subscription = Meteor.subscribe('comments')
    },
    sync: {
      // Sync subscriptions - see [Vue:vue on Atmosphere](https://atmospherejs.com/vue/vue).
    },
    destroyed: function () {
      // Unsubscribe
      this.subscription.stop()
    }
  });
}
```
Once installed, we can use `v-validate` directive in your template.
Notice that we add `&& comment` to the `v-show` directives so it doesn't initially display. This saves us having to initialise the model in the `data` object.

The following is a template example.

```html
<div id="#example">
  <form id="blog-form">
      <input type="text" v-model="comment" v-validate="minLength: 16, maxLength: 128">
      <div>
          <span v-show="validation.comment.minLength && comment">Your comment is too short.</span>
          <span v-show="validation.comment.maxLength && comment">Your comment is too long.</span>
      </div>
      <input type="submit" value="send" v-if="valid">
  </form>
</div>
```

See [vue-validator](https://github.com/vuejs/vue-validator) for full documentation.

# License

## MIT

See the `LICENSE`.