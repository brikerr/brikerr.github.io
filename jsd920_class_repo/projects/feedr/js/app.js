/*
  Please add all Javascript code to this file.
*/

$.get("https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json", function(results) {
    //an array of articles objects
    var articles = results.new;
    var articlesCollection = [];
    articles.forEach(function(article) {
        var singleArticleObj = {
            title: article.title,
            link: article.link,
            feature_image_src: article.feature_image,
            channel: article.channel,
            total_shares: article.shares.total
        };
        //add singleArticleObj to articlesCollection
        articlesCollection.push(singleArticleObj);
    });
    console.log(articlesCollection);
    //1. grab handblebars template
    var articleTemplate = $("#article-template").html();
    //2. complie template
    var compileTemp = Handlebars.compile(articleTemplate);
    //3. add objs
    var articlesHtmlBlock = compileTemp({
        articles: articlesCollection
    });
    //4. append
    var hbList = $('#all_articles').append(articlesHtmlBlock);
});

// $('#popUp .popUpAction').show();
//
// $('h3').click(function() {
//     $('#popUp .popUpAction').show(slow);
// });


// var p = $('#popUp');
//
// $('h3').click(function() {
//   p.css('display', 'block');
// });
// p.click(function(event) {
//   e = event || window.event;
//   if (e.target == this) {
//     $(p).css('display', 'none');
//   }
// });
