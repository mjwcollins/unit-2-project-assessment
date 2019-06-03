$('#add-todo').on('click', e => {
    $.ajax({
        url: '/',
        method: 'POST',
        data: {
            text: $('#todo-text').val()
        }
    }).done(response => {
        location.href = '/';
    });
});

$('.todo-done').each((i, e) => {
    $(e).on('click', e => {
        const id = $(e.target).parent()[0].id;
        $.ajax({
            url: `/${id}`,
            method: 'PUT',
            data: {
                done: $('.todo-done')[i].checked
            }
        }).done(response => {
            //location.href = '/';
        });
    });
});

$('.delete-todo').each((i, e) => {
    $(e).on('click', e => {
        const id = $(e.target).parent().parent()[0].id;
        $.ajax({
            url: `/${id}`,
            method: 'DELETE'
        }).done(response => {
            location.href = '/';
        });
    });
});