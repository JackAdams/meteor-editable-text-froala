Froala editor extension for babrahams:editable-text package
-----------------------------------------------------

Example app: [http://editable-text-demo.meteor.com](http://editable-text-demo.meteor.com)

Example app repo: [https://github.com/JackAdams/editable-text-demo](https://github.com/JackAdams/editable-text-demo)

#### Quick Start

	meteor add babrahams:editable-text-froala
	
(the Froala editor will get added automatically)

You can then drop an editable text widget into any Blaze template as follows:

	{{> editableText collection="posts" field="body" editor="froala"}}
	
where "posts" is the name of the mongo collection and "body" is the name of a document field for the `posts` collection.

`collection` and `field` are mandatory fields.

Note: The widget assumes that the data context is that of a single document from the `posts` collection (with _id value included).

You can also set the data context explicitly as follows:

    {{> editableText context=singlePostDocument collection="posts" field="body"}}

where `singlePostDocument` can be a single post document already set in the current context, or provided by a template helper from the template that the widget was dropped into.

(You can use `document`, `doc`, `object`, `obj`, `data` or `dataContext` instead of `context` - go with whichever you prefer.)

#### Documentation

Read the [full documentation](https://github.com/JackAdams/meteor-editable-text#editable-text-for-meteor) for the `babrahams:editable-text` package at [https://github.com/JackAdams/meteor-editable-text](https://github.com/JackAdams/meteor-editable-text).

Note: there is currently only limited support in this packages for the babrahams:editable-text API (it will be extended soon)

You can set default Froala editor options for this widget using `EditableText.defaultFroalaOptions`. E.g.

```
EditableText.defaultFroalaOptions = {
  enter: $.FroalaEditor.ENTER_DIV
}
```

You can also set Froala editor options on a per-widget basis using `editorOptions=editorOptions` as a widget param, with this in a template helper:

```
Template.myTemplateWithEditorInIt.helpers({
  editorOptions: function () {
    return {
	  enter: $.FroalaEditor.ENTER_DIV
	};
  }
});
```

The `babrahams:editable-text` widget params that are supported (so far) with the Froala editor are: `class`, `style` and `acceptEmpty`.

#### License

This package is MIT licensed, but note that the Froala Editor (which is a dependency) has its own license. See: https://www.froala.com/wysiwyg-editor/terms