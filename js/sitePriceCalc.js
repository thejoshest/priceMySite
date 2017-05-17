/**
 *
    SiteStat.js
    Version:   V.1.2.0
    Author:    Joshua Hooper
 *
**/
/** TODO: create a .gitignore before continuing work **/
;(function($){

    $.fn.siteCalc = function(options) {
          
            var element = $(this);

            var defaults = $.extend({
              siteCost : 500,
              siteCostConst : 500,
              pageTotal : 0
            }, options);

            var buildCalc = function(elem) {

              output = '<div class="calculator-body">';

              output += '<div class="sc-total"><p>Your Sites\' Cost</p><p>$<span id="cost">' + defaults.siteCost + '</span></p></div>';

              output += '<form name="calcForm" id="siteCalcForm" method="post">';
                output += '<div class="calc-inputs">';

                  output += '<h5>Pages:</h5>';
                  output += '<input type="number" name="pages" id="pages" class="calculate pages"><span>help!</span>';

                  output += '<h5>SEO:</h5>';
                  output += '<input type="checkbox" name="pages" class="seo" value="seo"><span>help!</span>';

                  output += '<h5>Design:</h5>';
                  output += '<select name="design" class="design">';
                    output+= '<option value="default">Select One</option>';
                    output+= '<option value="custom">Fully Custom</option>';
                    output+= '<option value="partialCustom">Partially Custom</option>';
                    output+= '<option value="template">Premade-Template</option>';
                  output += '</select><span>help!</span>';

                  output += '<h5>Platform Type:</h5>';
                  output += '<select name="design" class="platform">';
                    output+= '<option value="default">Select One</option>';
                    output+= '<option value="ecommerce">E-Commerce</option>';
                    output+= '<option value="partialCustom"></option>';
                    output+= '<option value="template">Premade-Template</option>';
                  output += '</select><span>help!</span>';

                output += '</div>';
              output += '</form>';
              output += '</div>';

              return elem.html(output);
            }

        buildCalc(element);
        $('.calculate').change(calcSite);

        function calcSite() {
          var pagesTotal = 0,
              designType = 0,
              platType = 0;
          if (this.hasClass('pages')) {
            var pagesTotal = 0,
                pageCost = 100,
                pagesInput = $('#pages').val();
                pagesTotal = pagesInput * pageCost;
          } else if (this.hasClass('seo')) {

          } else if (this.hasClass('design')) {

          } else if (this.hasClass('platform')) {

          } else {};

          defaults.siteCost = defaults.siteCostConst + pagesTotal;
          $('#cost').html(defaults.siteCost);

        }
    };

}(jQuery));

$('.site-calculator').siteCalc();
