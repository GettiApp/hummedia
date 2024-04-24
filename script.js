document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('upload-button').addEventListener('click', function(event) {
        if (document.getElementById('file').files.length == 1) {
            event.preventDefault();
            var file = document.getElementById('file').files[0];
            var title = document.getElementById('title').value;
            var description = document.getElementById('description').value;

            var formData = new FormData();
            formData.append('file', file);
            formData.append('title', title);
            formData.append('description', description);

            fetch('/api/upload', { Method: 'POST', body: formData})
                .then(function(response) {
                    if (response.status === 200) {
                        appendVideoToSection(response.json());
