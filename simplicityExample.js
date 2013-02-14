(function ($) {
    $.widget("ui.simplicityExample", $.ui.simplicityWidget, {
        options : {
        },
        _create: function () {
            this._addClass('ui-simplicity-example');
            this.element.text("Hello, World!");
        }
    });
}(jQuery));
