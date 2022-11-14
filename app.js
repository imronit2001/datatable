$(document).ready(function () {
    $('#example').DataTable({
        scrollX: true,
        oLanguage: {
            oPaginate: {
                sNext: '<i class="fa fa-chevron-right" ><button class="btn btn-primary>Submit</button></i>',
                sPrevious: '<i class="fa fa-chevron-left" ></i>',
            },
        },
        "createdRow": function (row, data, dataIndex) {
            // $(row).addClass("bg-light");
        }
    });
    document.getElementById("example_length").classList.add("d-none");
    document.getElementById("example_info").classList.add("d-none");
    let example_filter = document.getElementById("example_filter");
    example_filter.innerHTML = `<label><span class="ui input d-flex align-items-center"><input  oninput="datatable_search_toggle(this.value);" type="search" class="rounded-pill text-dark bg-light placeholder-glow" placeholder="Search Here" aria-controls="example"><i id="datatable_search_icon" class="fa-solid fa-magnifying-glass text-dark" style="margin-left : -30px;"></i></span></label>`;
    children = example_filter.children[0];
    example_filter.classList.add("d-none");


});

$('#search').keyup(function () {
    var table = $('#example').DataTable();
    table.search($(this).val()).draw();
});
function datatable_search_toggle(val) {
    let datatable_search_icon = document.getElementById("datatable_search_icon");
    if (val == "") {
        datatable_search_icon.classList.remove("d-none");
    } else {
        datatable_search_icon.classList.add("d-none");
    }
}