const storyData = {
    start: {
        location: "Калининград, Аэропорт Храброво",
        text: "Серый мартовский день. В чемодане — вся жизнь, в кармане — остатки сбережений в евро. Билет до Белграда через Стамбул стоил как крыло самолета, но пути назад нет. Ты стоишь у гейта. Что ты чувствуешь?",
        image: "bg.png",
        choices: [
            { text: "Решимость. Пора менять жизнь.", next: "istanbul", effect: { stress: 10 } },
            { text: "Страх. А вдруг ничего не получится?", next: "istanbul", effect: { stress: 20 } },
            { text: "Облегчение. Наконец-то я улетаю.", next: "istanbul", effect: { stress: -5 } }
        ]
    },
    istanbul: {
        location: "Стамбул, Пересадка",
        text: "12 часов ожидания в новом аэропорту Стамбула. Цены на турецкий чай кусаются. К тебе подходит странный тип и шепчет: 'Брате, хочешь боравак сразу? 500 евро'.",
        choices: [
            { text: "Нет, это развод. Игнорировать.", next: "belgrade_arrival", effect: { money: 0 } },
            { text: "Хм, вдруг сработает? (500€)", next: "scammed_istanbul", effect: { money: -500, stress: 30 } }
        ]
    },
    scammed_istanbul: {
        location: "Стамбул, Туалет",
        text: "Тип исчез с деньгами. Ты понимаешь, что тебя кинули еще до приезда в Сербию. Урок №1: не верь 'помогаторам' в аэропортах.",
        choices: [
            { text: "Черт... Полетели дальше.", next: "belgrade_arrival" }
        ]
    },
    belgrade_arrival: {
        location: "Белград, Аэропорт Никола Тесла",
        text: "Ты выходишь в зал прилета. Плотная толпа. Таксисты-бомбилы кричат наперебой. Один хватает твой чемодан: 'Брате, самая лучшая цена, поехали!'.",
        image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2068&auto=format&fit=crop",
        choices: [
            { text: "Сказать 'Не, хвала' и вызвать Яндекс/Pink.", next: "hostel_checkin", effect: { money: -20, rep: 5 } },
            { text: "Согласиться (будет дорого).", next: "taxi_scam", effect: { money: -60, stress: 20 } },
            { text: "Поехать на автобусе А1.", next: "bus_struggle", effect: { money: -3, stress: 15 } }
        ]
    },
    taxi_scam: {
        location: "Белград, Центр",
        text: "В конце поездки таксист показывает на 'турбо-счетчик': 7000 динар (60 евро). Ты пытаешься спорить, но он начинает громко ругаться.",
        choices: [
            { text: "Отдать деньги и выйти быстрее.", next: "hostel_checkin" },
            { text: "Требовать чек (фискальный рачун).", next: "taxi_fight", effect: { stress: 40, rep: -10 } }
        ]
    },
    taxi_fight: {
        location: "Белград, Улица",
        text: "Таксист выкидывает твой чемодан на тротуар и уезжает, крича проклятия. Ты сэкономил деньги, но трясешься от злости.",
        choices: [
            { text: "Дойти до хостела пешком.", next: "hostel_checkin" }
        ]
    },
    bus_struggle: {
        location: "Белград, Славия",
        text: "Автобус забит людьми и запахом сигарет. Ты едва не пропустил свою остановку, таща огромный чемодан через толпу. Зато сэкономил!",
        choices: [
            { text: "Найти хостел.", next: "hostel_checkin" }
        ]
    },
    hostel_checkin: {
        location: "Хостел, Дорчол",
        text: "В хостеле тебя встречает Драган. Он сразу наливает стопку. 'Ракыя! Из калининградских яблок? Нет, это наша сербская слива! Живели!'.",
        choices: [
            { text: "Живели! (Пить)", next: "rakija_vibe", effect: { stress: -20, rep: 15 } },
            { text: "Я не пью крепкое.", next: "no_rakija", effect: { rep: -5 } },
            { text: "Спросить про Белый Картон (регистрацию).", next: "beli_karton_quest" }
        ]
    },
    no_rakija: {
        location: "Хостел, Дорчол",
        text: "Драган пожимает плечами: 'Ну, как знаешь. Но здесь это лучший способ завести друзей'. Он заметно охладел к тебе, зато голова будет свежей.",
        choices: [
            { text: "Расспросить про жилье.", next: "apartment_hunt" },
            { text: "Пойти спать.", next: "beli_karton_quest", effect: { stress: -10 } }
        ]
    },
    rakija_vibe: {
        location: "Хостел, Дорчол",
        text: "Ракія теплая и мягкая. Драган хлопает тебя по плечу: 'Ну, теперь ты наш. Рассказывай, что ищешь: работу или приключения?'.",
        choices: [
            { text: "Ищу квартиру прежде всего.", next: "apartment_hunt" }
        ]
    },
    beli_karton_quest: {
        location: "Полиция, Стари Град",
        text: "В отделении полиции (MUP) душно. Очередь не движется. Бабушка перед тобой пытается доказать, что её внук живет по другому адресу. Тебе нужно зарегистрироваться.",
        choices: [
            { text: "Терпеливо ждать 3 часа.", next: "legal_status_ok", effect: { stress: 30 } },
            { text: "Вернуться завтра (риск штрафа).", next: "hostel_checkin", effect: { stress: 10 } }
        ]
    },
    legal_status_ok: {
        location: "Хостел",
        text: "У тебя есть Белый Картон. Теперь ты легальный турист на 30 дней. Пора искать жилье.",
        choices: [
            { text: "Смотреть объявления.", next: "apartment_hunt" }
        ]
    },
    apartment_hunt: {
        location: "Белград, Поиск жилья",
        text: "Цены взлетели. 1. Квартира на Мириево (400€, далеко). 2. Студия на Врачаре (850€, дорого). 3. Комната с бабушкой на Карабурме (200€).",
        choices: [
            { text: "Мириево — это красиво. (400€)", next: "mirijevo_life", effect: { money: -400 } },
            { text: "Врачар, хочу быть в центре! (850€)", next: "vracar_life", effect: { money: -850, stress: -10 } },
            { text: "Карабурма и бабушка. (200€)", next: "grandma_drama", effect: { money: -200, stress: 30 } }
        ]
    },
    grandma_drama: {
        location: "Карабурма",
        text: "Бабушка Смиляна кормит тебя сармой и запрещает открывать окна: 'Промая убия!' (Сквозняк убьет!). Твои вещи насквозь пропахли жареным перцем и уютом.",
        choices: [
            { text: "Терпеть ради экономии.", next: "slava_invitation", effect: { rep: 10 } },
            { text: "Сбежать, так невозможно жить.", next: "apartment_hunt", effect: { stress: 20 } }
        ]
    },
    slava_invitation: {
        location: "Карабурма, Слава",
        text: "Смиляна пригласила тебя на Славу. Это большой праздник. Тебе нужно купить подарок.",
        choices: [
            { text: "Бутылка хорошего вина (15€).", next: "slava_success", effect: { money: -15, rep: 30 } },
            { text: "Цветы (10€).", next: "slava_success", effect: { money: -10, rep: 20 } }
        ]
    },
    slava_success: {
        location: "Карабурма",
        text: "Ты стал звездой вечера. Внук Смиляны оказывается айтишником и советует податься в его компанию. 'Скажи, что от Марко'.",
        choices: [
            { text: "Попробовать устроиться.", next: "job_interview" }
        ]
    },
    job_interview: {
        location: "Нови Београд, Офис",
        text: "На интервью спрашивают не только про код, но и про то, как ты относишься к плескавице. Кажется, это главный тест на культурную совместимость.",
        choices: [
            { text: "Сказать, что обожаю с луком и урнебесом!", next: "job_offer", effect: { rep: 20 } },
            { text: "Сказать, что я вегетарианец.", next: "job_struggle_cultural", effect: { rep: -10 } }
        ]
    },
    job_struggle_cultural: {
        location: "Офис",
        text: "Интервьюер понимающе кивает, но в глазах его — грусть. 'Мы здесь часто едим мясо вместе...'. Кажется, ты не совсем вписался в команду.",
        choices: [
            { text: "Искать удаленку (IT).", next: "job_offer", effect: { stress: 15 } },
            { text: "Вернуться на Карабурму.", next: "grandma_drama" }
        ]
    },
    job_offer: {
        location: "Офис",
        text: "Тебе дали оффер! И зарплата в евро. Теперь нужно делать Боравак через работу.",
        choices: [
            { text: "Заняться документами.", next: "boravak_process", effect: { stress: 20 } }
        ]
    },
    boravak_process: {
        location: "MUP, Савска",
        text: "Снова полиция. Но теперь у тебя есть контракт. Чиновница требует справку о несудимости с апостилем.",
        choices: [
            { text: "Она у меня есть из Калининграда!", next: "ending_success" },
            { text: "Черт, я её забыл... (Виза-ран).", next: "viza_ran_bosnia", effect: { stress: 50, money: -50 } }
        ]
    },
    viza_ran_bosnia: {
        location: "Автобус на границу",
        text: "Ты едешь в Лозницу. Переходишь мост пешком, пьешь кофе в БиГ и идешь обратно. Штамп поставлен. Еще 30 дней покоя.",
        choices: [
            { text: "Вернуться и сделать документы наконец.", next: "boravak_process" }
        ]
    },
    ending_success: {
        location: "Белград, Твоя терраса",
        text: "У тебя в руках 'лична карта' — сербский ВНЖ. Ты сидишь на террасе, пьешь 'домачу кафу' и смотришь на закат. Все трудности позади. Ты дома. Полако, брате. Полако.",
        choices: [{ text: "Начать сначала", next: "start" }]
    }
};

class Game {
    constructor() {
        this.money = 5000;
        this.stress = 0;
        this.status = "Турист";
        this.currentState = 'start';
        this.reputation = 0;
        this.init();
    }

    init() {
        this.updateUI();
        this.renderScene('start');
        document.getElementById('inventory-btn').onclick = () => {
            alert(`Статус: ${this.status}\nДеньги: ${this.money}€\nСтресс: ${this.stress}%\nРепутация: ${this.reputation}`);
        };
    }

    updateUI() {
        document.getElementById('stat-money').innerText = `${this.money} €`;
        document.getElementById('stat-stress').innerText = `${this.stress}%`;
        document.getElementById('stat-status').innerText = this.status;
        const overlay = document.getElementById('overlay-effects');
        overlay.style.boxShadow = `inset 0 0 ${this.stress * 2}px rgba(255, 0, 0, ${this.stress / 200})`;
    }

    renderScene(stateKey) {
        const scene = storyData[stateKey];
        if (!scene) return;

        const textArea = document.getElementById('text-area');
        const choicesArea = document.getElementById('choices-area');
        const locationLabel = document.getElementById('location-label');
        const container = document.getElementById('game-container');

        locationLabel.innerText = scene.location;
        if (scene.image) {
            if (scene.image.startsWith('http')) {
                container.style.backgroundImage = `url('${scene.image}')`;
            } else {
                container.style.backgroundImage = `url('${scene.image}')`;
            }
        }

        // Reset animation
        const panel = document.getElementById('story-panel');
        panel.style.animation = 'none';
        panel.offsetHeight; // trigger reflow
        panel.style.animation = 'slideUp 0.5s cubic-bezier(0.23, 1, 0.32, 1)';

        textArea.innerHTML = "";
        let i = 0;
        const typeWriter = () => {
            if (i < scene.text.length) {
                textArea.innerHTML += scene.text.charAt(i);
                i++;
                setTimeout(typeWriter, 10);
            }
        };
        typeWriter();

        choicesArea.innerHTML = "";
        scene.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.innerText = choice.text;
            btn.onclick = () => this.handleChoice(choice);
            choicesArea.appendChild(btn);
        });
    }

    handleChoice(choice) {
        if (choice.effect) {
            if (choice.effect.money) this.money += choice.effect.money;
            if (choice.effect.stress) this.stress = Math.max(0, Math.min(100, this.stress + choice.effect.stress));
            if (choice.effect.rep) this.reputation += choice.effect.rep;
        }

        if (this.money <= 0) {
            this.triggerGameOver("Ты остался без денег в чужой стране. Пришлось депортироваться.");
            return;
        }

        if (this.stress >= 100) {
            this.triggerGameOver("Твои нервы сдали. Ты купил обратный билет в Калининград.");
            return;
        }

        this.updateUI();
        this.renderScene(choice.next);
    }

    triggerGameOver(reason) {
        const textArea = document.getElementById('text-area');
        const choicesArea = document.getElementById('choices-area');
        textArea.innerHTML = `<b style="color: #e74c3c">КАТАСТРОФА</b><br>${reason}`;
        choicesArea.innerHTML = "";
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = "Начать новую жизнь";
        btn.onclick = () => window.location.reload();
        choicesArea.appendChild(btn);
    }
}

window.onload = () => new Game();
