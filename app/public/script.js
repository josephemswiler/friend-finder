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
            .addClass(`custom-select custom-select-sm question-${count}`)
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

    $('.about-form')
        .find('[name="input-name"]')
        .change(function (event) {
            if ($(this).val().trim() === '') {
                $(this).removeClass('is-valid').addClass('is-invalid')
            } else {
                $(this).removeClass('is-invalid').addClass('is-valid')
            }
        })
        .end()
        .find('[name="input-photo"]')
        .change(function (event) {
            if ($(this).val().trim() === '') {
                $(this).removeClass('is-valid').addClass('is-invalid')
            } else {
                $(this).removeClass('is-invalid').addClass('is-valid')
            }
        })

    $(document).on('click', '.submit-btn', function (event) {
        event.preventDefault()

        class Submission {
            constructor(name, photo, results) {
                this.name = name
                this.photo = photo
                this.results = results
            }
        }

        let completeForm = true

        let name = $('.about-form')
            .find('[name="input-name"]')
            .val()
            .trim()

        let photo = $('.about-form')
            .find('[name="input-photo"]')
            .val()
            .trim()

        let results = []

        if (name === '') {
            $('.about-form')
                .find('[name="input-name"]')
                .addClass('is-invalid')
            completeForm = false
        }

        if (photo === '') {
            $('.about-form')
                .find('[name="input-photo"]')
                .addClass('is-invalid')
            completeForm = false
        }

        for (let i in questions) {
            let count = parseInt(i) + 1

            if ($(`.question-${count}`).val() === 'Select an Option') {
                $(`.question-${count}`).addClass('is-invalid')
                completeForm = false
            }

            if (completeForm)
                results.push($(`.question-${count}`).val())
        }
        if (completeForm) {
            let answers = new Submission(name, photo, results)

            $.post('/api/friends', answers)
                .then(function (data) {
                    console.log(data)
                })


        }
    }) //click .submit-btn
})