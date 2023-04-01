/* Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato */

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: [
        {
            name: 'Alexandro Fioretti',
            avatar: './img/avatar_1.png',
            visible: true,
            messages: [
                {
                    date: '10/01/2023 15:30:55',
                    message: 'Did you play ranked today?',
                    status: 'sent'
                },
                {
                    date: '10/01/2023 15:50:00',
                    message: 'Just pick a sentinel',
                    status: 'sent'
                },
                {
                    date: '10/01/2023 16:15:22',
                    message: 'Easy to carry',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Mattia Volpe',
            avatar: './img/avatar_2.png',
            visible: true,
            messages: [
                {
                    date: '20/03/2023 16:30:00',
                    message: 'Have you seen the latest news about React?',
                    status: 'received'
                },
                {
                    date: '20/03/2023 16:30:55',
                    message: 'Yes, what do you think about that?',
                    status: 'sent'
                },
                {
                    date: '20/03/2023 16:35:00',
                    message: 'Amazing, it will all be so easy to do!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio Pacifici',
            avatar: './img/avatar_3.png',
            visible: true,
            messages: [
                {
                    date: '28/03/2023 10:10:40',
                    message: 'Have you seen the latest news about React?',
                    status: 'sent'
                },
                {
                    date: '28/03/2023 10:20:10',
                    message: 'No, I am not interested at all',
                    status: 'received'
                },
                {
                    date: '28/03/2023 16:15:22',
                    message: 'Oh, sorry!',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Paolo Zampa',
            avatar: './img/avatar_4.png',
            visible: true,
            messages: [
                {
                    date: '10/01/2023 15:30:55',
                    message: 'How do you have such long hair?',
                    status: 'sent'
                },
                {
                    date: '10/01/2023 15:50:00',
                    message: 'Easy, I wash them once a month',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Donato Riccio',
            avatar: './img/avatar_5.png',
            visible: true,
            messages: [
                {
                    date: '10/01/2023 15:30:55',
                    message: 'Remember to commit and push',
                    status: 'received'
                },
                {
                    date: '10/01/2023 15:50:00',
                    message: 'Yes, you are right Donnie',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Giuliano Gostinfini',
            avatar: './img/avatar_5.png',
            visible: true,
            messages: [
                {
                    date: '10/01/2023 15:30:55',
                    message: 'One ring to rule them all, one ring to find them, One ring to bring them all...',
                    status: 'sent'
                },
                {
                    date: '10/01/2023 15:50:00',
                    message: '...and in the darkness bind them; In the Land of Mordor where the shadows lie.',
                    status: 'received'
                },
                {
                    date: '10/01/2023 15:51:00',
                    message: 'Love you',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Gianni Morandi',
            avatar: './img/avatar_7.png',
            visible: true,
            messages: [
                {
                    date: '10/01/2023 15:30:55',
                    message: 'Luca, scusami, ma quindi non ti piace Fatti mandare dalla mamma?',
                    status: 'received'
                },
                {
                    date: '10/01/2023 15:50:00',
                    message: 'Si Gianni, però è vecchia come canzone, no?',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Mark Zuckerberg',
            avatar: './img/avatar_8.png',
            visible: true,
            messages: [
                {
                    date: '10/01/2023 15:30:55',
                    message: 'I would like to propose you to become CEO of Meta',
                    status: 'received'
                },
                {
                    date: '10/01/2023 15:50:00',
                    message: 'HOLY S**T!',
                    status: 'sent'
                },
                {
                    date: '10/01/2023 15:51:00',
                    message: 'Come and sign the contract tomorrow',
                    status: 'received'
                }
            ],
        }
    ]
    };
  },
}).mount("#app");
