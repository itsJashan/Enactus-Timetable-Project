const $tableId = $("#table");

const newtr = `<tr align="center">
<th contenteditable="true" scope="row">
    <select class="time" id="time">
        <option value="Time" selected>Time</option>
        <option value="8">8 a.m.</option>
        <option value="9">9 a.m.</option>
        <option value="10">10 a.m.</option>
        <option value="11">11 a.m.</option>
        <option value="12">12 p.m.</option>
        <option value="13">1 p.m.</option>
        <option value="14">2 p.m.</option>
        <option value="15">3 p.m.</option>
        <option value="16">4 p.m.</option>
        <option value="17">5 p.m.</option>
    </select>
</th>
<td contenteditable="true">
    <select class="subject" id="subject">
        <option value="no class" class="noclass" selected>-----</option>
        <option value="english" class="english">English</option>
        <option value="chemistry" class="chemistry">Chemistry</option>
        <option value="maths" class="maths">Maths</option>
        <option value="egcad" class="egcad">EG & CAD</option>
        <option value="bee" class="bee">BEE</option>
    </select>
</td>
<td contenteditable="true">
    <select class="subject" id="subject">
        <option value="no class" class="noclass" selected>-----</option>
        <option value="english" class="english">English</option>
        <option value="chemistry" class="chemistry">Chemistry</option>
        <option value="maths" class="maths">Maths</option>
        <option value="egcad" class="egcad">EG & CAD</option>
        <option value="bee" class="bee">BEE</option>
    </select>
</td>
<td contenteditable="true">
    <select class="subject" id="subject">
        <option value="no class" class="noclass" selected>-----</option>
        <option value="english" class="english">English</option>
        <option value="chemistry" class="chemistry">Chemistry</option>
        <option value="maths" class="maths">Maths</option>
        <option value="egcad" class="egcad">EG & CAD</option>
        <option value="bee" class="bee">BEE</option>
    </select>
</td>
<td contenteditable="true">
    <select class="subject" id="subject">
        <option value="no class" class="noclass" selected>-----</option>
        <option value="english" class="english">English</option>
        <option value="chemistry" class="chemistry">Chemistry</option>
        <option value="maths" class="maths">Maths</option>
        <option value="egcad" class="egcad">EG & CAD</option>
        <option value="bee" class="bee">BEE</option>
    </select>
</td>
<td contenteditable="true">
    <select class="subject" id="subject">
        <option value="no class" class="noclass" selected>-----</option>
        <option value="english" class="english">English</option>
        <option value="chemistry" class="chemistry">Chemistry</option>
        <option value="maths" class="maths">Maths</option>
        <option value="egcad" class="egcad">EG & CAD</option>
        <option value="bee" class="bee">BEE</option>
    </select>
</td>
<td contenteditable="true">
    <select class="subject" id="subject">
        <option value="no class" class="noclass" selected>-----</option>
        <option value="english" class="english">English</option>
        <option value="chemistry" class="chemistry">Chemistry</option>
        <option value="maths" class="maths">Maths</option>
        <option value="egcad" class="egcad">EG & CAD</option>
        <option value="bee" class="bee">BEE</option>
    </select>
</td>
<td>
    <span class="table-up edit">
        <button class="btn btn-sm indigo-text mx-1">
            <i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i>
        </button>
    </span>
    <span class="table-down edit">
        <button class="btn btn-sm indigo-text">
            <i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i>
        </button>
    </span>
</td>
<td>
    <span class="table-remove edit">
        <button type="button"
            class=" table-remove btn btn-danger btn-rounded btn-sm my-0">Remove</button>
    </span>
</td>
</tr>`;

// For adding row

$(".table-add").on("click" , "i" , ()=>{
    const $clone = $tableId.find('tbody tr').last().clone(true);
    if($tableId.find("tbody tr").length === 0){
        $("tbody").append(newtr);
    }else{
        $tableId.find('tbody').append($clone);
    }
})

// For deletion of row

$(".table-remove").on("click" , function (){
    $(this).parents("tr").remove();
})

// For moving row up

$(".table-up").on("click" , function (){
    const $row = $(this).parents("tr");
    if($row.index() === 0){
        return;
    }

    $row.prev().before($row);
})

// For moving row down

$(".table-down").on("click" , function (){
    const $row = $(this).parents("tr");

    $row.next().after($row);
})

$(".subject").on("change", function() {
    const selectedSubject = $(this).val();
    const $cell = $(this).closest("td");

    // Remove any existing background color class
    $cell.removeClass("english chemistry maths egcad bee");

    // Add the appropriate class based on the selected subject
    if (selectedSubject !== "no class") {
        $cell.addClass(selectedSubject);
    }
});

