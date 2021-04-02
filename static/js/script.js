  $(document).ready(function () {
      $('.sidenav').sidenav();
      $(".collapsible").collapsible();
      $('.datepicker').datepicker();
      $('select').formSelect();
      $('#blog_description').val('');
      M.textareaAutoResize($('#blog_description'));
      validateMaterializeSelect();

      function validateMaterializeSelect() {
          let classValid = {
              "border-bottom": "1px solid #4caf50",
              "box-shadow": "0 1px 0 0 #4caf50"
          };
          let classInvalid = {
              "border-bottom": "1px solid #f44336",
              "box-shadow": "0 1px 0 0 #f44336"
          };
          if ($("select.validate").prop("required")) {
              $("select.validate").css({
                  "display": "block",
                  "height": "0",
                  "padding": "0",
                  "width": "0",
                  "position": "absolute"
              });
          }
          $(".select-wrapper input.select-dropdown").on("focusin", function () {
              $(this).parent(".select-wrapper").on("change", function () {
                  if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function () {})) {
                      $(this).children("input").css(classValid);
                  }
              });
          }).on("click", function () {
              if ($(this).parent(".select-wrapper").children("ul").children("li.selected:not(.disabled)").css("background-color") === "rgba(0, 0, 0, 0.03)") {
                  $(this).parent(".select-wrapper").children("input").css(classValid);
              } else {
                  $(".select-wrapper input.select-dropdown").on("focusout", function () {
                      if ($(this).parent(".select-wrapper").children("select").prop("required")) {
                          if ($(this).css("border-bottom") != "1px solid rgb(76, 175, 80)") {
                              $(this).parent(".select-wrapper").children("input").css(classInvalid);
                          }
                      }
                  });
              }
          });
      }
  });

  google.charts.load('current', {
      'packages': ['geochart'],
      'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  var countryName;

  function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable([
            ['Country'],
            ['Afghanistan'],
            ['Albania'],
            ['Algeria'],
            ['Andorra'],
            ['Angola'],
            ['Argentina'],
            ['Armenia'],
            ['Australia'],
            ['Austria'],
            ['Bahamas'],
            ['Bangladesh'],
            ['Barbados'],
            ['Belarus'],
            ['Belgium'],
            ['Belize'],
            ['Benin'],
            ['Bhutan'],
            ['Bolivia'],
            ['Botswana'],
            ['Brazil'],
            ['Brunei'],
            ['Bulgaria'],
            ['Burundi'],
            ['Cambodia'],
            ['Cameroon'],
            ['Canada'],
            ['Chad'],
            ['Chile'],
            ['China'],
            ['Colombia'],
            ['Comoros'],
            ['Congo'],
            ['Costa Rica'],
            ['Croatia'],
            ['Cuba'],
            ['Cyprus'],
            ['Czechia'],
            ['Denmark'],
            ['Democratic Republic Of Congo'],
            ['Dominica'],
            ['Dominican Republic'],
            ['Ecuador'],
            ['Egypt'],
            ['El Salvador'],
            ['Estonia'],
            ['Ethiopia'],
            ['Fiji'],
            ['Finland'],
            ['France'],
            ['Gabon'],
            ['Gambia'],
            ['Georgia'],
            ['Germany'],
            ['Ghana'],
            ['Greece'],
            ['Greenland'],
            ['Grenada'],
            ['Guatemala'],
            ['Guinea'],
            ['Guyana'],
            ['Haiti'],
            ['Hungary'],
            ['Iceland'],
            ['India'],
            ['Indonesia'],
            ['Iran'],
            ['Iraq'],
            ['Ireland'],
            ['Israel'],
            ['Italy'],
            ['Jamaica'],
            ['Japan'],
            ['Jordan'],
            ['Kazakhstan'],
            ['Kenya'],
            ['Laos'],
            ['Latvia'],
            ['Lebanon'],
            ['Lesotho'],
            ['Liberia'],
            ['Libya'],
            ['Lithuania'],
            ['Luxembourg'],
            ['Madagascar'],
            ['Malawi'],
            ['Malaysia'],
            ['Maldives'],
            ['Mali'],
            ['Malta'],
            ['Mexico'],
            ['Moldova'],
            ['Monaco'],
            ['Mongolia'],
            ['Montenegro'],
            ['Morocco'],
            ['Mozambique'],
            ['Myanmar'],
            ['Namibia'],
            ['Nauru'],
            ['Nepal'],
            ['Netherlands'],
            ['New Zealand'],
            ['Niger'],
            ['Nigeria'],
            ['North Korea'],
            ['North Macedonia'],
            ['Norway'],
            ['Oman'],
            ['Pakistan'],
            ['Palau'],
            ['Panama'],
            ['Papua New Guinea'],
            ['Paraguay'],
            ['Peru'],
            ['Philippines'],
            ['Poland'],
            ['Portugal'],
            ['Qatar'],
            ['Romania'],
            ['RU'],
            ['Rwanda'],
            ['Saint Lucia'],
            ['Samoa'],
            ['San Marino'],
            ['Saudi Arabia'],
            ['Senegal'],
            ['Serbia'],
            ['Seychelles'],
            ['Sierra Leone'],
            ['Singapore'],
            ['Slovakia'],
            ['Slovenia'],
            ['Solomon Islands'],
            ['Somalia'],
            ['South Africa'],
            ['South Korea'],
            ['South Sudan'],
            ['Spain'],
            ['Sri Lanka'],
            ['Sudan'],
            ['Sweden'],
            ['Switzerland'],
            ['Syria'],
            ['Tajikistan'],
            ['Tanzania'],
            ['Thailand'],
            ['Togo'],
            ['Tonga'],
            ['Tunisia'],
            ['Turkey'],
            ['Uganda'],
            ['Ukraine'],
            ['United Arab Emirates'],
            ['United Kingdom'],
            ['United States'],
            ['Uruguay'],
            ['Uzbekistan'],
            ['Vanuatu'],
            ['Venezuela'],
            ['Vietnam'],
            ['Yemen'],
            ['Zambia'],
            ['Zimbabwe']
      ]);


      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
      var options = {};
      chart.draw(data, options);


      function selectedCountry() {
          var selection = chart.getSelection();
          var message = '';
          var item = selection[0];
          countryName = data.getValue(item.row, 0);
          window.location.replace("/map_search/" + countryName);
      }

      google.visualization.events.addListener(chart, 'select', selectedCountry);
  }