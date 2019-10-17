document.addEventListener('DOMContentLoaded', () => {

  var $table = $('#table')
  var base_url = window.location.origin;
  $table.attr("data-url", `${base_url}/api/getLeads`)
  $(function() {
    $('#toolbar').find('select').change(function () {
      $table.bootstrapTable('destroy').bootstrapTable({
        exportDataType: $(this).val(),
        exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel', 'pdf'],
        columns: [
          {
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
