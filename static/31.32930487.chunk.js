webpackJsonp([31],{2007:function(t,e,n){var a=n(0),o=n(90),l=n(445).PageRenderer;l.__esModule&&(l=l.default);var i=o({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(2111)}},componentWillMount:function(){},render:function(){return a.createElement(l,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,t.exports=i},2111:function(t,e){t.exports='A typeahead control with keyboard navigation based on react-select.\n\n[Component documentation](https://github.com/JedWatson/react-select)\n\n### Migration guide from V1 to v2:\n\n- Change the import to `text-input-v2` (see below)\n- The dedicated CSS import is not required for v2. Delete the typeahead and bootstrap CSS imports when upgrading.\n- `options` now requires an array of objects instead of strings\n- `multiple` should be changed to `isMulti` enable the tags input\n\n```\nimport { Select } from \'@faithlife/styled-ui/dist/text-input-v2\';\n```\n\n### Single select\n\n```react\nshowSource: true\nstate: { selection: \'\' }\n---\n<div>\n\t<div>Current selection: {state.selection}</div>\n\t<Select\n\t\tonChange={({ value }) => {\n\t\t\tsetState({ selection: value });\n\t\t}}\n\t\toptions={[\n\t\t\t{ value: "washington", label: "Washington" },\n\t\t\t{ value: "california", label: "California" },\n\t\t\t{ value: "Texas", label: "Texas" }\n\t\t]}\n\t\tplaceholder="Choose a state..."\n\t/>\n</div>\n```\n\n### Single select in a modal\n\n```react\nshowSource: true\nstate: { modal: false, value: \'\', selection: \'\' }\n---\n<div>\n\t<Button variant="primary" size="medium" onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tcontainer="body"\n\t\tonClose={() => setState({ modal: false })}\n\t\ttitle="Test"\n\t\tfooterProps={{\n\t\t\tcancelButton: { text: \'Cancel\', onClick: () => setState({ modal: !state.modal })},\n\t\t}}\n\t>\n\t\t<DemoDiv>\n\t\t\t<div>Current selection: {state.selection}</div>\n\t\t\t<Select\n\t\t\t\tonChange={({ value }) => {\n\t\t\t\t\tsetState({ selection: value });\n\t\t\t\t}}\n\t\t\t\toptions={[\n\t\t\t\t\t{ value: "washington", label: "Washington" },\n\t\t\t\t\t{ value: "california", label: "California" },\n\t\t\t\t\t{ value: "Texas", label: "Texas" }\n\t\t\t\t]}\n\t\t\t\tplaceholder="Choose a state..."\n\t\t\t/>\n\t\t</DemoDiv>\n\t</Modal>\n</div>\n```\n\n### Multi select\n\n```react\nshowSource: true\nstate: { tags: [] }\n---\n<div>\n\t<div>Current selection: {state.selection}</div>\n\t<Select\n\t\tonChange={({ value }) => {\n\t\t\tsetState({ selection: value });\n\t\t}}\n\t\tisMulti\n\t\toptions={[\n\t\t\t{ value: "washington", label: "Washington" },\n\t\t\t{ value: "california", label: "California" },\n\t\t\t{ value: "Texas", label: "Texas" }\n\t\t]}\n\t\tplaceholder="Choose a state..."\n\t/>\n</div>\n```\n\n### Multi select with custom entries\n\n```react\nshowSource: true\nstate: { tags: [] }\n---\n<div>\n\t<div>Current selection: {state.selection}</div>\n\t<CreatableSelect\n\t\tonChange={({ value }) => {\n\t\t\tsetState({ selection: value });\n\t\t}}\n\t\tisMulti\n\t\toptions={[\n\t\t\t{ value: "washington", label: "Washington" },\n\t\t\t{ value: "california", label: "California" },\n\t\t\t{ value: "Texas", label: "Texas" }\n\t\t]}\n\t\tplaceholder="Choose a state..."\n\t/>\n</div>\n```\n\n### Async select\n\n```react\nshowSource: true\nstate: { tags: [] }\n---\n<AsyncSelectDemo />\n```\n'}});
//# sourceMappingURL=31.32930487.chunk.js.map