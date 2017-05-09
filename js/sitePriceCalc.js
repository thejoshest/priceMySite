/**
 *
    SiteStat.js
    Version:   V.1.1.0
    Author:    Joshua Hooper
 *
**/
$(function(){
  var siteCost = 500,
      pageTotal = 0;

  function siteCalc(element) {

      var output = '<div class="calculator-body">';

        output += '<div class="sc-total"><p>Your Sites\' Cost</p><p>$<span id="cost">' + siteCost + '</span></p></div>';

        output += '<form name="calcForm" id="siteCalcForm" method="post">';
          output += '<div class="calc-inputs">';

            output += '<h5>Pages:</h5>';
            output += '<input type="number" name="pages" id="pages" class="calculate"><span>help!</span>';

            output += '<h5>SEO:</h5>';
            output += '<input type="checkbox" name="pages" value="seo"><span>help!</span>';

            output += '<h5>Design:</h5>';
            output += '<select name="design" class="calculate">';
              output+= '<option value="default">Select One</option>';
              output+= '<option value="custom">Fully Custom</option>';
              output+= '<option value="partialCustom">Partially Custom</option>';
              output+= '<option value="template">Premade-Template</option>';
            output += '</select><span>help!</span>';

            output += '<h5>Platform Type:</h5>';
            output += '<select name="design" class="calculate">';
              output+= '<option value="default">Select One</option>';
              output+= '<option value="ecommerce">E-Commerce</option>';
              output+= '<option value="partialCustom"></option>';
              output+= '<option value="template">Premade-Template</option>';
            output += '</select><span>help!</span>';

          output += '</div>';
        output += '</form>';
      output += '</div>';

      return document.getElementById(element).innerHTML = output;

    };
  siteCalc('site-calculator');

  $('.calculate').change(calculateSite);

  function calculateSite() {
    var pagesTotal = 0,
        pagesInput = $('#pages').val();

    function pageTotal() {
        pagesTotal = pagesInput * 100;
        return pagesTotal;
    };
    pageTotal();
    siteCost += pagesTotal;
    $('#cost').html(siteCost);
    console.log(siteCost);
  };

});
