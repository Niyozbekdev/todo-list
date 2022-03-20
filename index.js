window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title'),
          author = document.querySelector('#author'),
          year = document.querySelector('#year'),
          btn = document.querySelector('.btn'),
          booklist = document.querySelector('#booklist');

    btn.addEventListener('click', function(e){
        e.preventDefault();

        if(title.value !== '' && author.value !== '' && year.value !== ''){
            const newRev = document.createElement('tr');
            
            const newTitle = document.createElement('td');
            newTitle.innerHTML = title.value
            newRev.appendChild(newTitle);
            
            const newAuthor = document.createElement('td');
            newAuthor.innerHTML = author.value
            newRev.appendChild(newAuthor);

            const newYear = document.createElement('td');
            newYear.innerHTML = year.value
            newRev.appendChild(newYear);

            booklist.appendChild(newRev)

            title.value = ''
            author.value = ''
            year.value = ''
        }else{
            
            alert('Iltimos aval inputlarni tuldiring')
        }
    })

});



