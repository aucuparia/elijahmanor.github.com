<!--
{
  "className": "Slide--title"
}
-->

# Flux

---

# Why?

> "We found that two-way data bindings led to cascading updates, where changing one object led to another object changing, which could also trigger more updates. As applications grew, these cascading updates made it very difficult to predict what would change as the result of one user interaction. When updates can only change data within a single round, the system as a whole becomes more predictable." --https://facebook.github.io/flux/docs/overview.html

---

# Flux

> "Flux is more of a pattern than a framework" --[Flux](https://github.com/facebook/flux#requirements)

---

# What is Flux

<div class="mermaid">
  graph LR;

  classDef action fill:#65B9CA,stroke:#FFFFFF,stroke-width:4px;
  classDef dispatcher fill:#444142,stroke:#FFFFFF,stroke-width:4px;
  classDef store fill:#294552,stroke:#FFFFFF,stroke-width:4px;
  classDef view fill:#5FAF6A,stroke:#FFFFFF,stroke-width:4px;

  Action1(Action)-->Dispatcher(Dispatcher);
  Dispatcher-->Store(Store);
  Store-->View(View);
  View-->Action2(Action);
  Action2-->Dispatcher;

  class Action1,Action2 action;
  class Dispatcher dispatcher;
  class Store store;
  class View view;
</div>

---

# A Flux Story

<div class="FluxStory FluxStory--1">
	<div class="FluxStory-actor FluxStory--actionCreator">The action creator</div>
	<div class="FluxStory-actor FluxStory--dispatcher">The dispatcher</div>
	<div class="FluxStory-actor FluxStory--store">The store</div>
	<div class="FluxStory-actor FluxStory--controllerView">The controller view</div>
	<div class="FluxStory-actor FluxStory--view">The view</div>
</div>


<small>[A cartoon guide to Flux](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.yr9pjvwjt) by [@linclark](https://twitter.com/linclark)</small>

---

# A Flux Story

<div class="FluxStory FluxStory--2">
	<div class="FluxStory-actor FluxStory--actionCreator">The action creator</div>
	<div class="FluxStory-actor FluxStory--dispatcher">The dispatcher</div>
	<div class="FluxStory-actor FluxStory--store">The store</div>
	<div class="FluxStory-actor FluxStory--controllerView">The controller view</div>
	<div class="FluxStory-actor FluxStory--view">The view</div>
</div>


<small>[A cartoon guide to Flux](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.yr9pjvwjt) by [@linclark](https://twitter.com/linclark)</small>

---

# A Flux Story

<div class="FluxStory FluxStory--3">
	<div class="FluxStory-actor FluxStory--actionCreator">The action creator</div>
	<div class="FluxStory-actor FluxStory--dispatcher">The dispatcher</div>
	<div class="FluxStory-actor FluxStory--store">The store</div>
	<div class="FluxStory-actor FluxStory--controllerView">The controller view</div>
	<div class="FluxStory-actor FluxStory--view">The view</div>
</div>


<small>[A cartoon guide to Flux](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.yr9pjvwjt) by [@linclark](https://twitter.com/linclark)</small>

---

# A Flux Story

<div class="FluxStory FluxStory--4">
	<div class="FluxStory-actor FluxStory--actionCreator">The action creator</div>
	<div class="FluxStory-actor FluxStory--dispatcher">The dispatcher</div>
	<div class="FluxStory-actor FluxStory--store">The store</div>
	<div class="FluxStory-actor FluxStory--controllerView">The controller view</div>
	<div class="FluxStory-actor FluxStory--view">The view</div>
</div>


<small>[A cartoon guide to Flux](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.yr9pjvwjt) by [@linclark](https://twitter.com/linclark)</small>

---

# A Flux Story

<div class="FluxStory FluxStory--5">
	<div class="FluxStory-actor FluxStory--actionCreator">The action creator</div>
	<div class="FluxStory-actor FluxStory--dispatcher">The dispatcher</div>
	<div class="FluxStory-actor FluxStory--store">The store</div>
	<div class="FluxStory-actor FluxStory--controllerView">The controller view</div>
	<div class="FluxStory-actor FluxStory--view">The view</div>
</div>

<small>[A cartoon guide to Flux](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.yr9pjvwjt) by [@linclark](https://twitter.com/linclark)</small>

---

# A Flux Story

<div class="FluxStory FluxStory--6">
	<div class="FluxStory-actor FluxStory--actionCreator">The action creator</div>
	<div class="FluxStory-actor FluxStory--dispatcher">The dispatcher</div>
	<div class="FluxStory-actor FluxStory--store">The store</div>
	<div class="FluxStory-actor FluxStory--controllerView">The controller view</div>
	<div class="FluxStory-actor FluxStory--view">The view</div>
</div>

<small>[A cartoon guide to Flux](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.yr9pjvwjt) by [@linclark](https://twitter.com/linclark)</small>

---

# Flux Galore

<div class="Split">
  <div class="Split-column">
    <ul>
      <li>[Facebook's Flux](https://github.com/facebook/flux)</li>
      <li>[Fluxible by Yahoo](http://fluxible.io)</li>
      <li>[Reflux](https://github.com/spoike/refluxjs)</li>
      <li>[Alt](https://github.com/goatslacker/alt)</li>
      <li>[McFly](https://github.com/kenwheeler/mcfly)</li>
      <li>[Flummox](https://github.com/acdlite/flummox)</li>
    </ul>
  </div>
  <div class="Split-column">
    <ul>
    <li>[Lux](https://github.com/LeanKit-Labs/lux.js)</li>
    <li>[Material Flux](https://github.com/azu/material-flux)</li>
    <li>[Marty.js](http://martyjs.org)</li>
    <li>[Fluxxor](http://fluxxor.com)</li>
    <li>[Delorean.js](http://deloreanjs.com)</li>
    <li>[Redux](https://github.com/rackt/redux)</li>
    </ul>
  </div>
</div>

[Flux Comparison](https://github.com/voronianski/flux-comparison)

---

# What Do I Use?

## Reflux, Lux, and learning Redux (all the rave)

---

# Reflux

<div class="mermaid">
  graph LR;

  classDef action fill:#65B9CA,stroke:#FFFFFF,stroke-width:4px;
  classDef store fill:#294552,stroke:#FFFFFF,stroke-width:4px;
  classDef view fill:#5FAF6A,stroke:#FFFFFF,stroke-width:4px;

  Action(Action)-->Store(Store);
  Store-->View(View);
  View-->Action;

  class Action action;
  class Store store;
  class View view;
</div>

---

# Actions (`SlideActions.js`)

```
var Reflux = require('reflux');

var SlideActions = Reflux.createActions(
  ['previous', 'next', 'list', 'offline']
);

module.exports = SlideActions;
```

---

<!--
{
  "className": "Slide--static"
}
-->

# Store (`SlideStore.js`)

```
const Reflux = require('reflux');
const SlideActions = require('../actions/SlideActions');
const SlideApi = require('../utils/SlideApi');
const postal = require('postal');
const channel = postal.channel('slides');

let SETS =
  { id: 'Introduction', markdown: './md/introduction.md' },
  { id: 'WhatIsReact',  markdown: './md/what-is-react.md' },
  // ... more code ...
  { id: 'Conclusion',   markdown: './md/conclusion.md' }
];

const SlideStore = Reflux.createStore({
  listenables: [SlideActions],
  init: function() {
    channel.subscribe('slide.updated', data => {
      // ... more code ...
      this.trigger({ slides: this.slides });
    });

    this.slideApi = new SlideApi(SETS);
    this.slideApi.enhance();
  },
  getInitialState() {
    return { slides: SETS };
  },
  onNext() {},
  onPrevious() {},
  onList() {},
  onOffline() {}
});

module.exports = SlideStore;
```

---

<!--
{
  "className": "Slide--static"
}
-->

# View (`index.jsx`)

```
const React = require('react');
const App = require('./components/App.jsx');
const SlideManager = require('./components/SlideManager.jsx');
const SlideList = require('./components/SlideList.jsx');
const Router = require('react-router');
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;
const RouteHandler = Router.RouteHandler;

const routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="slide" path="slide/:setIndex/:slideIndex" handler={SlideManager}/>
    <Route name="list" path="list" handler={SlideList}/>
    <DefaultRoute handler={SlideManager}/>
  </Route>
);

Router.run(routes, (Handler) => {
  React.render(<Handler />, document.body);
});
```

---

<!--
{
  "className": "Slide--static"
}
-->

# View (`SlideManager.js`)

```
const React = require('react');
const Reflux = require('reflux');
const SlideStore = require('../stores/SlideStore');
const Slide = require('./Slide.jsx');
const SlideControls = require('./SlideControls.jsx');
const SlideFooter = require('./SlideFooter.jsx');

const SlideManager = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  mixins: [Reflux.connect(SlideStore)],
  componentWillMount() {
    SlideStore.setRouter(this.context.router);
  },
  render() {
    let { setIndex = 0, slideIndex = 0 } = this.props.params;
    let slide = SlideStore.gotoSlide(setIndex, slideIndex);

    return (
      <div className="SlideManager">
        <Slide slide={slide} />
        <SlideControls {...this.props.params} />
        <SlideFooter {...this.props.params} />
      </div>
    );
  }
});

module.exports = SlideManager;
```

<!--
NOTES:

* https://github.com/voronianski/flux-comparison
* https://github.com/spoike/refluxjs
* https://facebook.github.io/flux/docs/overview.html#content
* http://jonathancreamer.com/what-the-flux/
* http://blog.andrewray.me/flux-for-stupid-people/
* https://ochronus.com/react-reflux-example/
* https://github.com/enaqx/awesome-react#flux-tutorials
-->
