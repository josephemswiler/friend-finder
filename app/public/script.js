$(document).ready(function () {
    let questions = [
        'Your mind is always buzzing with unexplored ideas and plans.',
        'Generally speaking, you rely more on your experience than your imagination.',
        'You find it easy to stay relaxed and focused even when there is some pressure.',
        'You rarely do something just out of sheer curiosity.',
        'People can rarely upset you.',
        'It is often difficult for you to relate to other people’s feelings.',
        'In a discussion, truth should be more important than people’s sensitivities.',
        'You rarely get carried away by fantasies and ideas.',
        'You think that everyone’s views should be respected regardless of whether they are supported by facts or not.',
        'You feel more energetic after spending time with a group of people.'
    ]

    for (let i in questions) {
        let count = parseInt(i) + 1

        let header = $('<h5>')
            .addClass('card-title')
            .text(`Question ${count}`)

        let label = $('<label>')
            .attr('for', 'survey-answer')
            .append(header)

        let p = $('<p>')
            .text(questions[i])

        let placeholder = $('<option>')
            .attr('selected', '')
            .text('Select an Option')

        let validate = $('<div>')
            .addClass('invalid-feedback')
            .text('Please select an option!')

        let select = $('<select>')
            .attr('name', 'question')
            .addClass(`custom-select custom-select-sm w-75 question-${count}`)
            .append(placeholder)

        let hr = $('<hr>')
            .addClass('m4-4')

        for (let j = 1; j <= 5; j++) {
            let option = $('<option>')
                .attr('value', j)
            switch (j) {
                case 1:
                    option.text(`${j} (Strongly Disagree)`)
                    break
                case 3:
                    option.text(`${j} (Neutral)`)
                    break
                case 5:
                    option.text(`${j} (Strongly Agree)`)
                    break
                default:
                    option.text(j)
            }
            select.append(option)
        }

        let group = $('<div>')
            .addClass('form-group')
            .append(label, p, select, validate)

        $('.survey-questions').append(group, hr)
    }

    let submitBtn = $('<button>')
        .addClass('btn btn-success btn-lg btn-block submit-btn')
        .html('<i class="fas fa-check-circle"></i> Submit')

    $('.survey-questions').append(submitBtn)

    $('.survey-questions')
        .find('[name="question"]')
        .change(function (event) {
            let text = $(this).parent().children().first().children().first().text()

            if ($(this).val() !== 'Select an Option') {
                $(this).parent().children().first().children().first().html(`${text} <i class="fas fa-check-circle text-success"></i>`)
                $(this).removeClass('is-invalid').addClass('is-valid')
            } else {
                $(this).parent().children().first().children().first().html(`${text} <i class="fas fa-times-circle text-danger"></i>`)
                $(this).removeClass('is-valid').addClass('is-invalid')
            }
        })

    $(document).on('click', '.submit-btn', function (event) {
        event.preventDefault()

        for (let i in questions) {
            let count = parseInt(i) + 1
            console.log($(`.question-${count}`).val())

            if ($(`.question-${count}`).val() === 'Select an Option') {
                $(`.question-${count}`).addClass('is-invalid')
            }
        }

    })
})