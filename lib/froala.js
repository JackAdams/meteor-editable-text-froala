EditableText.editors.froala = {
  template: 'editable_text_froala',
  toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'insertHR', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', 'undo', 'redo', 'clearFormatting', 'selectAll', 'html'],
  toolbarButtonsMD: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'insertHR', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', 'undo', 'redo', 'clearFormatting', 'selectAll', 'html'],
  toolbarButtonsSM: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'inlineStyle', 'paragraphStyle', '-', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'insertHR', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', 'undo', 'redo', 'clearFormatting', 'selectAll', 'html'],
  toolbarButtonsXS: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'fontSize', '-', 'color', 'emoticons', 'paragraphFormat', 'align', 'formatOL', 'formatUL', '-', 'outdent', 'indent', 'quote', 'insertHR', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', '-', 'undo', 'redo', 'clearFormatting', 'selectAll', 'html'],
  save: function (e, editor) {
	var self = this;
	// Get edited HTML from Froala-Editor
	var updatedValue = editor.html.get(true /* keep_markers */); // console.log("updatedValue:",updatedValue);
	// Update the edited value provided by the Froala-Editor plugin, if it has changed:
	var originalValue = (self.context[self.field]  || '').replace(/<br \/>/g, "<br>"); // console.log("originalValue:",originalValue);
	updatedValue = EditableText._removeEntities(updatedValue);
	originalValue = EditableText._removeEntities(originalValue);
	if ((updatedValue || self.acceptEmpty !== false) && updatedValue !== originalValue) {
	  // console.log("onSave HTML is :" + _.clone(updatedValue));
	  var mod = {};
	  mod[self.field] = updatedValue;
	  EditableText.update.call(self, Mongo.Collection.get(self.collection), self.context, {$set: mod});
	}
  }
}

Template.editable_text_froala.helpers({
  getFEContext: function () {
    var self = this;
    var initOptions = {
      // Set html content
      _value: self.context[self.field],
      // Preserving cursor markers
      _keepMarkers: true,
      // Override wrapper class 
      _className: "froala-reactive-meteorized-override",

      // Set some FE options
      toolbarInline: true,
      initOnClick: false,
      tabSpaces: false,
	  charCounterCount: false,
	  enter: $.FroalaEditor.ENTER_BR,
	  toolbarButtons: EditableText.editors.froala.toolbarButtons,
	  toolbarButtonsMD: EditableText.editors.froala.toolbarButtonsMD,
	  toolbarButtonsSM: EditableText.editors.froala.toolbarButtonsSM,
	  toolbarButtonsXS: EditableText.editors.froala.toolbarButtonsXS,

      // FE save.before event handler function:
      "_onsave.before": function (e, editor) {
        EditableText.editors.froala.save.call(self, e, editor);
        return false; // Stop Froala Editor from POSTing to the Save URL
      },
	  "_onblur": function (e, editor) {
	    EditableText.editors.froala.save.call(self, e, editor);
		Meteor.defer(function () {
          editor.toolbar.hide();
		});
	  }
    }
	if (EditableText.froalaDefaultOptions) {
	  initOptions = _.extend(initOptions, EditableText.froalaDefaultOptions);
	}
	if (this.editorOptions) {
	  initOptions = _.extend(initOptions, this.editorOptions);	
	}
	return initOptions;
  }
})