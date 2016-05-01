Froala editor extension for babrahams:editable-text package
-----------------------------------------------------

Example app: [http://editable-text-demo.taonova.com](http://editable-text-demo.taonova.com)

Example app repo: [https://github.com/JackAdams/editable-text-demo](https://github.com/JackAdams/editable-text-demo)

#### Quick Start

	meteor add babrahams:editable-text-froala
	
(the Froala editor will get added automatically)

You can then drop an editable text widget into any Blaze template as follows:

	{{> editableText collection="posts" field="text" editor="froala"}}
	
where "posts" is the name of the mongo collection and "text" is the name of a field in documents from the `posts` collection.

`collection` and `field` are mandatory parameters (and so is `editor="froala"` if you want the user to be able to edit the `text` field with the Froala editor).

Note: The widget assumes that the data context is that of a single document from the `posts` collection (with an `_id` value included).

You can also set the data context explicitly as follows:

    {{> editableText context=singlePostDocument collection="posts" field="body"}}

where `singlePostDocument` can be a single document from the `posts` collection which is already set in the current context, or it can be provided by a template helper from the template that the widget was dropped into.

(You can use `document`, `doc`, `object`, `obj`, `data` or `dataContext` instead of `context` - go with whichever you prefer.)

#### Documentation

Read the [full documentation](https://github.com/JackAdams/meteor-editable-text#editable-text-for-meteor) for the `babrahams:editable-text` package at [https://github.com/JackAdams/meteor-editable-text](https://github.com/JackAdams/meteor-editable-text).

Note: there is currently only limited support in this package for the babrahams:editable-text API (coverage will be extended soon)

The `babrahams:editable-text` widget params that are supported (so far) with the Froala editor are: `class`, `style` and `acceptEmpty`.

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

#### License

This package is MIT licensed, but note that the Froala Editor (which is a dependency) has its own license. See: https://www.froala.com/wysiwyg-editor/terms