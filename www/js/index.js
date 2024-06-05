$(document).on('pagecreate', '#main-page', function() {
    $('#add-task-btn').on('click', function() {
        let taskText = $('#task-input').val();
        if (taskText) {
            let taskItem = $('<li>' + taskText + '</li>');
            taskItem.on('swipeleft', function() {
                $(this).hide('slow', function() {
                    $(this).remove();
                });
            });
            taskItem.on('swiperight', function() {
                $(this).toggleClass('completed');
            });
            $('#task-list').append(taskItem).listview('refresh');
            $('#task-input').val('');
        }
    });

    $('#reset-btn').on('click', function() {
        $('#task-list').empty().listview('refresh');
    });
});
