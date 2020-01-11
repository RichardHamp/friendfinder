$("#submit").on("click", function(event) {
    event.preventDefault();
    var formData = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [
            $("#q1").val().trim(),
            $("#q2").val().trim(),
            $("#q3").val().trim(),
            $("#q4").val().trim(),
            $("#q5").val().trim(),
            $("#q6").val().trim(),
            $("#q7").val().trim(),
            $("#q8").val().trim(),
            $("#q9").val().trim(),
            $("#q10").val().trim(),
        ]
    };
    console.log(formData);
})