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
      dark: false,
      activeUser: 0, // Proverò a cambiarlo in -1 ed aggiungere v-if v-else
      input_user: "",
      search: "",
      contacts: [
        {
          name: "Alexandro Fioretti",
          avatar:
            "https://ca.slack-edge.com/T91QPE3BP-U04LKC6NC5A-85eca7db5264-512",
          visible: true,
          messages: [
            {
              date: "10/01/2023 15:30:55",
              message: "Did you play ranked today?",
              status: "sent",
            },
            {
              date: "10/01/2023 15:50:00",
              message: "Just pick a sentinel",
              status: "sent",
            },
            {
              date: "10/01/2023 16:15:22",
              message: "Easy to carry",
              status: "received",
            },
          ],
        },
        {
          name: "Mattia Volpe",
          avatar:
            "https://ca.slack-edge.com/T91QPE3BP-U04L9PNACBG-9bf12784be25-512",
          visible: true,
          messages: [
            {
              date: "20/03/2023 16:30:00",
              message: "Have you seen the latest news about React?",
              status: "received",
            },
            {
              date: "20/03/2023 16:30:55",
              message: "Yes, what do you think about that?",
              status: "sent",
            },
            {
              date: "20/03/2023 16:35:00",
              message: "Amazing, it will all be so easy to do!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio Pacifici",
          avatar:
            "https://ca.slack-edge.com/T91QPE3BP-U019PBPM0F8-e9d63af9b90f-512",
          visible: true,
          messages: [
            {
              date: "28/03/2023 10:10:40",
              message: "Have you seen the latest news about React?",
              status: "sent",
            },
            {
              date: "28/03/2023 10:20:10",
              message: "No, I am not interested at all",
              status: "received",
            },
            {
              date: "28/03/2023 16:15:22",
              message: "Oh, sorry!",
              status: "sent",
            },
          ],
        },
        {
          name: "Paolo Zampa",
          avatar:
            "https://ca.slack-edge.com/T91QPE3BP-U04M6K2VDG8-79fa1bfc622e-512",
          visible: true,
          messages: [
            {
              date: "10/01/2023 15:30:55",
              message: "How do you have such long hair?",
              status: "sent",
            },
            {
              date: "10/01/2023 15:50:00",
              message: "Easy, I wash them once a month",
              status: "received",
            },
          ],
        },
        {
          name: "Donato Riccio",
          avatar:
            "https://ca.slack-edge.com/T91QPE3BP-UUKTY5AEA-10bc0b52d489-512",
          visible: true,
          messages: [
            {
              date: "10/01/2023 15:30:55",
              message: "Remember to commit and push",
              status: "received",
            },
            {
              date: "10/01/2023 15:50:00",
              message: "Yes, you are right Donnie",
              status: "sent",
            },
          ],
        },
        {
          name: "Giuliano Gostinfini",
          avatar:
            "https://ca.slack-edge.com/T91QPE3BP-U04CGH9EXA9-57f504b12dd7-512",
          visible: true,
          messages: [
            {
              date: "10/01/2023 15:30:55",
              message:
                "One ring to rule them all, one ring to find them, One ring to bring them all...",
              status: "sent",
            },
            {
              date: "10/01/2023 15:50:00",
              message:
                "...and in the darkness bind them; In the Land of Mordor where the shadows lie.",
              status: "received",
            },
            {
              date: "10/01/2023 15:51:00",
              message: "Love you",
              status: "sent",
            },
          ],
        },
        {
          name: "Gianni Morandi",
          avatar:
            "https://scontent.fcia4-1.fna.fbcdn.net/v/t1.6435-9/123631645_215732439921486_1941177969000831609_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_6_3iPQSwKsAX8LIq8n&_nc_ht=scontent.fcia4-1.fna&oh=00_AfCIz2VUQmkt-lWBsoH2clCCT402VizjkC98xCrvJ63-eA&oe=644FD66A",
          visible: true,
          messages: [
            {
              date: "10/01/2023 15:30:55",
              message:
                "Luca, scusami, ma quindi non ti piace Fatti mandare dalla mamma?",
              status: "received",
            },
            {
              date: "10/01/2023 15:50:00",
              message: "Si Gianni, però è vecchia come canzone, no?",
              status: "sent",
            },
          ],
        },
        {
          name: "Mark Zuckerberg",
          avatar:
            "https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds",
          visible: true,
          messages: [
            {
              date: "10/01/2023 15:30:55",
              message: "I would like to propose you to become CEO of Meta",
              status: "received",
            },
            {
              date: "10/01/2023 15:50:00",
              message: "HOLY S**T!",
              status: "sent",
            },
            {
              date: "10/01/2023 15:51:00",
              message: "Come and sign the contract tomorrow",
              status: "received",
            },
          ],
        },
        {
          name: "Francesco Minutella",
          avatar:
            "https://ca.slack-edge.com/T91QPE3BP-U04LA518THU-d3e60b70535d-512",
          visible: true,
          messages: [
            {
              date: "10/01/2023 15:30:55",
              message: "Sono un imbranato cronico, tnk u mate!",
              status: "received",
            },
            {
              date: "10/01/2023 15:50:00",
              message: "np!",
              status: "sent",
            },
          ],
        },
        {
          name: "Shakira",
          avatar: "https://www.aceshowbiz.com/images/photo/shakira.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2023 15:30:55",
              message: "Pa' tipos como tú-uh-uh-uh-uh",
              status: "received",
            },
            {
              date: "10/01/2023 15:50:00",
              message: "No tengo tiempo para ti",
              status: "sent",
            },
          ],
        },
      ],
    };
  },
  methods: {
    selectUser(index) {
      this.activeUser = index;
    },
    reply() {
      setTimeout(() => {
        this.contacts[this.activeUser].messages.push({
          message: "Okay",
          date: "10/02/2023 15:03:32",
          status: "received",
        });
      }, 1300);
    },
    sendMessage() {
      if (this.input_user === ""){
        return
      }
      this.contacts[this.activeUser].messages.push({
        message: this.input_user,
        date: "10/02/2023 14:38:32",
        status: "sent",
      });
      this.input_user = "";
      this.reply();
    },
    deleteMessage(index){
      this.contacts[this.activeUser].messages.splice((this.contacts[this.activeUser].messages.length -1) -index, 1)
    },
    darkMode(){
      this.dark = !this.dark
      const root = document.querySelector(":root");
      const main = document.getElementById("app_main_chat")
      if (this.dark != false){
        root.style.setProperty("--wa-accent", "#075E54")
        root.style.setProperty("--wa-neutral", "#121212")
        root.style.setProperty("--wa-notification", "#35393b")
        root.style.setProperty("--wa-canvas", "#0e0d0d")
        root.style.setProperty("--wa-primary", "#075E54")
        root.style.setProperty("--wa-bg-message", "#0e0d0d")
        root.style.setProperty("--wa-icons", "#a0a0a0")
        root.style.setProperty("--wa-icons-dark", "#73787a")
        root.style.setProperty("--wa-white", "#121212")
        root.style.setProperty("--wa-black", "#a4a8aa")
        root.style.setProperty("--wa--light-black", "#a0a0a0")
        root.style.setProperty("--wa-double-checked", "#2d80c8")
        main.style.backgroundImage = "url(./assets/img/darkmine.jpg)"
      } else {
        root.style.setProperty("--wa-accent", "#009688")
        root.style.setProperty("--wa-neutral", "#dadbd3")
        root.style.setProperty("--wa-notification", "#8edafc")
        root.style.setProperty("--wa-canvas", "#eaeaea")
        root.style.setProperty("--wa-primary", "#d5f9ba")
        root.style.setProperty("--wa-bg-message", "#f3eeea")
        root.style.setProperty("--wa-icons", "#b1b1b1")
        root.style.setProperty("--wa-icons-dark", "#6b7376")
        root.style.setProperty("--wa-white", "#ffffff")
        root.style.setProperty("--wa-black", "#1e1e1e")
        root.style.setProperty("--wa--light-black", "#3e3e3e")
        root.style.setProperty("--wa-double-checked", "#2d80c8")
        main.style.backgroundImage = "url(./assets/img/mine.jpg)"
      }
    }
  },
}).mount("#app");
