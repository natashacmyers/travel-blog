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
          ['Germany'],
          ['United States'],
          ['Brazil'],
          ['Canada'],
          ['France'],
          ['RU'],
          ['Japan'],
          ['Croatia'],
          ['South Africa'],
          ['Thailand'],
          ['Egypt'],
          ['Sweden'],
          ['Spain'],
          ['Norway'],
          ['Italy'],
          ['United Kingdom'],
          ['Ireland'],
          ['Tasmania'],
          ['Australia'],
          ['China'],
          ['Greenland'],
          ['Mexico'],
          ['Argentina'],
          ['Peru'],
          ['Chile'],
          ['Kazakhstan'],
          ['Iran'],
          ['Mongolia'],
          ['India'],
          ['Algeria'],
          ['Libya'],
          ['Ethiopia'],
          ['Niger'],
          ['Angolia'],
          ['Namibia'],
          ['Sudan'],
          ['Pakistan'],
          ['Iceland'],
          ['Svalbard']
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