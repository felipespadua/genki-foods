document.addEventListener('DOMContentLoaded', () => {

  var $table = $('#table')
  var base_url = window.location.origin;
  $table.attr("data-url", `${base_url}/api/getLeads`)
  $(function () {
    $('#toolbar').find('select').change(function () {
      $table.bootstrapTable('destroy').bootstrapTable({
        exportDataType: $(this).val(),
        exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel', 'pdf'],
        columns: [{
            field: 'state',
            checkbox: true,
            visible: $(this).val() === 'selected'
          },
          {
            field: 'name',
            title: 'Nome'
          }, {
            field: 'email',
            title: 'Email'
          }
        ]
      })
    }).trigger('change')
  })


}, false);

// const startMap = () => {
//   const farm = {
//     lat: -22.740654,
//     lng: -45.229133
//   };​
//   const map = new google.maps.Map(
//     document.getElementById('map'), {
//       zoom: 8,
//       center: farm
//     }
//   )
//   const myMarker = new google.maps.Marker({
//     position: {
//       lat: -22.740654,
//       lng: -45.229133
//     },
//     map: map,
//     title: "Farm"
//   })
//   const myMarker1 = new google.maps.Marker({
//     position: {
//       lat: -22.7347564,
//       lng: -45.3462196
//     },
//     map: map,
//     title: "Farm2"
//   })
//   const myMarker2 = new google.maps.Marker({
//     position: {
//       lat: -23.2878667,
//       lng: -46.6742787
//     },
//     map: map,
//     title: "Farm3"
//   })
// }
// startMap();
