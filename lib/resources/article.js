// Generated by CoffeeScript 1.10.0
(function() {
  var Article, BaseChild, pluralize,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseChild = require('./base_child');

  pluralize = require('pluralize');

  Article = (function(superClass) {
    extend(Article, superClass);

    Article.prototype.parent = "/blogs";

    Article.prototype.slug = "article";

    Article.prototype.child = "/articles";

    function Article(site) {
      Article.__super__.constructor.call(this, site);
    }

    Article.prototype.authors = function(callback) {
      var url;
      url = this.resource.queryString("/articles/authors");
      return this.resource.get(url, this.slug, callback);
    };

    Article.prototype.tags = function(blogId, params, callback) {
      var ref, url;
      if (typeof params === 'function') {
        ref = [callback, params], params = ref[0], callback = ref[1];
      }
      url = this.resource.queryString(this.prefix + "/" + blogId + "/articles/tags", params);
      return this.resource.get(url, this.slug, callback);
    };

    return Article;

  })(BaseChild);

  module.exports = Article;

}).call(this);