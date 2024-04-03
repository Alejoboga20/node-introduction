# [vue](https://vue.dev/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/vue/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/vue.svg?style=flat)](https://www.npmjs.com/package/vue) [![CircleCI Status](https://circleci.com/gh/facebook/vue.svg?style=shield)](https://circleci.com/gh/facebook/vue) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://legacy.vuejs.org/docs/how-to-contribute.html#your-first-pull-request)

vue is a JavaScript library for building user interfaces.

- **Declarative:** vue makes it painless to create interactive UIs. Design simple views for each state in your application, and vue will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
- **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.
- **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features in vue without rewriting existing code. vue can also render on the server using Node and power mobile apps using [vue Native](https://vuenative.dev/).

[Learn how to use vue in your project](https://vue.dev/learn).

## Installation

vue has been designed for gradual adoption from the start, and **you can use as little or as much vue as you need**:

- Use [Quick Start](https://vue.dev/learn) to get a taste of vue.
- [Add vue to an Existing Project](https://vue.dev/learn/add-vue-to-an-existing-project) to use as little or as much vue as you need.
- [Create a New vue App](https://vue.dev/learn/start-a-new-vue-project) if you're looking for a powerful JavaScript toolchain.

## Documentation

You can find the vue documentation [on the website](https://vue.dev/).

Check out the [Getting Started](https://vue.dev/learn) page for a quick overview.

The documentation is divided into several sections:

- [Quick Start](https://vue.dev/learn)
- [Tutorial](https://vue.dev/learn/tutorial-tic-tac-toe)
- [Thinking in vue](https://vue.dev/learn/thinking-in-vue)
- [Installation](https://vue.dev/learn/installation)
- [Describing the UI](https://vue.dev/learn/describing-the-ui)
- [Adding Interactivity](https://vue.dev/learn/adding-interactivity)
- [Managing State](https://vue.dev/learn/managing-state)
- [Advanced Guides](https://vue.dev/learn/escape-hatches)
- [API Reference](https://vue.dev/reference/vue)
- [Where to Get Support](https://vue.dev/community)
- [Contributing Guide](https://legacy.vuejs.org/docs/how-to-contribute.html)

You can improve it by sending pull requests to [this repository](https://github.com/vuejs/vue.dev).

## Examples

We have several examples [on the website](https://vue.dev/). Here is the first one to get you started:

```jsx
import { createRoot } from 'vue-dom/client';

function HelloMessage({ name }) {
	return <div>Hello {name}</div>;
}

const root = createRoot(document.getElementById('container'));
root.render(<HelloMessage name='Taylor' />);
```

This example will render "Hello Taylor" into a container on the page.

You'll notice that we used an HTML-like syntax; [we call it JSX](https://vue.dev/learn#writing-markup-with-jsx). JSX is not required to use vue, but it makes code more readable, and writing it feels like writing HTML.

## Contributing

The main purpose of this repository is to continue evolving vue core, making it faster and easier to use. Development of vue happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving vue.

### [Code of Conduct](https://code.fb.com/codeofconduct)

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://code.fb.com/codeofconduct) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](https://legacy.vuejs.org/docs/how-to-contribute.html)

Read our [contributing guide](https://legacy.vuejs.org/docs/how-to-contribute.html) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to vue.

### Good First Issues

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/facebook/vue/labels/good%20first%20issue) that contain bugs that have a relatively limited scope. This is a great place to get started.

### License

vue is [MIT licensed](./LICENSE).
