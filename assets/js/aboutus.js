$(document).ready(function() {
    var container = $('.flex-container')

    function personTemplate(person) {
        return "<div class='flex-item'>" +
            "<img src='" + person.avatar + "' alt='' >" +
            "<span>" + person.first_name + " " + person.last_name + "</span>" +
            "</div>";
    }

    $.ajax({
        url: "https://reqres.in/api/users",
        type: "GET",
        success: function(response) {
            console.log(response.data);
            const whoWeAre = response.data

            whoWeAre.forEach(function(person) {
                // console.log(person)
                container.append(personTemplate(person));
            });

        }
    });
});