    // alertify.prompt( 'password', 'Enter your password', 'Enter'
    //     , function(evt, value) { alertify.success('неправильно: ') 

    //         if(value == PASSWORD) {
                
    //         }
    //         else {
    //             function() { alertify.error('правильно') })
            
    //     }
    //     , function() { alertify.error('правильно') })    // відобразити збережені

    // // функція для збереження


// $(document).ready(function() {


//     $('#addNoteButton').click(function(){
//         let date = new Date().toLocaleString();

//         let newNote = $('<div>', {class:'note'});

//         //додати заголовок нотатці
        
//         newNote.append($('<div>', {
//             contentEditable: true,
//             text: 'Нова нотатка...',
//             class: 'noteText'
//         }));
//         newNote.append($('<h4>', {
//             text: date
//         }));
//         newNote.append($('<button>', {
//             text: 'X', 
//             class: 'deleteButton'
//         }));
//         // додати кнопку архівувати
//         $('#notesContainer').prepend(newNote);
//     });

//     $('#notesContainer').on('click', '.deleteButton', function() {
//         $(this).parent().remove();
//     });

//     // додати функцію архівування
// });1234DungeonMsster
//DungeonMsster

hashCode = s => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
const PASSWORD = '-246475602';

let VALUE = prompt('Введіть пароль', '1234');
if(hashCode(VALUE)== PASSWORD){
    // відобразити збережені
    $('#notesContainer').prepend(
        window.localStorage['note']
    );
    alert('правильно, ОСЬ ЗБЕРЕЖЕНІ')
} else{
    alert('правильно')
    $('#saveButton').hide()
    $('#addNoteButton').hide()
}

$(document).ready(function() {

    // alertify.prompt('Пароль', 'Введіть пароль', '1234'
    //     , function(evt, value) { 
    //         alertify.success('.....')
    //         if(hashCode(value)== PASSWORD){
    //             // відобразити збережені
    //             $('#notesContainer').prepend(
    //                 window.localStorage['note']
    //             );
    //         } else{
    //             alertify.error('правильно')
    //         }
    //     }
    //     , function() { alertify.error('правильно') });


    // функція для збереження
    $('#saveButton').click(function(){
        window.localStorage['note'] = $('#notesContainer').html();
    })

    $('#addNoteButton').click(function(){
        let date = new Date().toLocaleString();

        let newNote = $('<div>', {class:'note'});

        //додати заголовок нотатці
        
        newNote.append($('<div>', {
            contentEditable: true,
            text: 'Нова нотатка...',
            class: 'noteText'
        }));
        newNote.append($('<h4>', {
            text: date
        }));
        newNote.append($('<button>', {
            text: 'X', 
            class: 'deleteButton'
        }));
        newNote.append($('<button>', {
            text: 'Archive', 
            class: 'archiveButton'
        }));
        // додати кнопку архівувати
        $('#notesContainer').prepend(newNote);
    });

    $('#notesContainer').on('click', '.deleteButton', function() {
        $(this).parent().remove();
    });
    
    // додати функцію архівування
    $('#notesContainer').on('click', '.archiveButton', function() {
        $(this).parent().toggleClass('archive');
    });

});
