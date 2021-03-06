jQuery(document).ready(function() {
    jQuery('body').midgardCreate({
        url: function() {
            if (this.id) {
                if (this.id.charAt(0) == "<") {
                    return cmfCreatePutDocument + this.id.substring(1, this.id.length - 1);
                }
                return cmfCreatePutDocument + "/" + this.id;
            }
            return cmfCreatePutDocument;
        },
        stanbolUrl: cmfCreateStanbolUrl,
        tags: true,
        editorWidgets: {
            'default': 'ckeditor'
        },
        editorOptions: {
            ckeditor: {
                widget: 'ckeditorWidget'
            }
        },
        collectionWidgets: {
            'default': null,
            'feature': 'midgardCollectionAdd'
        }
    });

    window.CKEDITOR.config.filebrowserImageUploadUrl = cmfCreateImageUpload;

    window.CKEDITOR.basePath = window.CKEDITOR_BASEPATH;
});
