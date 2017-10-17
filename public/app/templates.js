import 'jquery';

const templates = (function () {
    function getPage(pageName, data) {
        const url = `templates/${pageName}.handlebars`;
        Handlebars.registerHelper({
            eq: function (v1, v2) {
                return v1 == v2;
            },
            ne: function (v1, v2) {
                return v1 !== v2;
            },
            lt: function (v1, v2) {
                return v1 < v2;
            },
            gt: function (v1, v2) {
                return v1 > v2;
            },
            lte: function (v1, v2) {
                return v1 <= v2;
            },
            gte: function (v1, v2) {
                return v1 >= v2;
            },
            and: function (v1, v2) {
                return v1 && v2;
            },
            or: function (v1, v2) {
                return v1 || v2;
            }
        });
        return $.get(url, function (html) {
            const hbTemplate = Handlebars.compile(html.toString());
            Handlebars.registerPartial('common-footer',  $(".common-footer").html());

            $('#main-content').html(hbTemplate(data));
        });
    }

    return {
        getPage: getPage
    };
}());

export {
    templates
};

