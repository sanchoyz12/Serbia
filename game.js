const storyData = {
    start: {
        location: "Москва, Аэропорт Шереметьево",
        text: "Терминал C гудит, как растревоженный улей. Ты стоишь у панорамного окна, глядя, как заправляют самолет до Стамбула. В чемодане — вся прошлая жизнь, в кармане — тающие сбережения, а в голове — звон от неопределенности. Обратного пути нет. Что ты чувствуешь в этот момент?",
        image: "bg.png",
        choices: [
            { text: "Решимость. Пора всё менять.", next: "istanbul", effect: { stress: 10 } },
            { text: "Тревогу. А если я совершаю ошибку?", next: "istanbul", effect: { stress: 20 } },
            { text: "Облегчение. Наконец-то этот этап пройден.", next: "istanbul", effect: { stress: -5 } }
        ]
    },
    istanbul: {
        location: "Стамбул, Пересадка",
        text: "Новый аэропорт Стамбула кажется бесконечным. Ты пьешь неприлично дорогой турецкий чай. Вдруг к тебе подсаживается соотечественник с бегающими глазами: 'Слышь, братан, тоже в Сербию? Хочешь, сделаю боравак (ВНЖ) экстерном? Всего 500 евро, и в Белграде тебя встретят с готовой картой'.",
        choices: [
            { text: "Нет, спасибо. Подозрительно легко.", next: "belgrade_arrival", effect: { money: 0 } },
            { text: "Звучит заманчиво, давай попробуем. (-500€)", next: "scammed_istanbul", effect: { money: -500, stress: 30 } }
        ]
    },
    scammed_istanbul: {
        location: "Стамбул, Зона вылета",
        text: "Тип взял деньги и растворился в толпе. Ты прождал два часа, пока не понял: тебя кинули. Урок первый: на Балканах 'помощники' бывают острее ножа для гироса.",
        choices: [
            { text: "Стиснуть зубы и лететь дальше.", next: "belgrade_arrival" }
        ]
    },
    belgrade_arrival: {
        location: "Белград, Аэропорт Никола Тесла",
        text: "Зал прилета встречает густым запахом табачного дыма. Колоритный таксист в кожанке уже перехватил твой чемодан: 'Оставь телефон, брате, поехали, сговоримся!'.",
        image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2068&auto=format&fit=crop",
        choices: [
            { text: "Вежливо отказаться и вызвать официальное такси.", next: "hostel_checkin", effect: { money: -20, rep: 5 } },
            { text: "Черт с ним, поехали с 'бомбилой'.", next: "taxi_scam", effect: { money: -60, stress: 20 } },
            { text: "Попробовать найти автобус А1.", next: "bus_struggle", effect: { money: -3, stress: 15 } }
        ]
    },
    taxi_scam: {
        location: "Белград, Центр",
        text: "Таксист требует 8000 динар. 'Это бизнес-тариф, брате...'. Ты понимаешь, что это грабеж.",
        choices: [
            { text: "Заплатить, чтобы избежать конфликта.", next: "hostel_checkin" },
            { text: "Требовать фискальный чек и пугать полицией.", next: "taxi_fight", effect: { stress: 40, rep: -10 } }
        ]
    },
    taxi_fight: {
        location: "Белград, Улица",
        text: "Таксист выкидывает твой чемодан в лужу и улетает. Ты сэкономил деньги, но руки всё еще трясутся. Добро пожаловать.",
        choices: [
            { text: "Выдохнуть и идти в хостел.", next: "hostel_checkin" }
        ]
    },
    bus_struggle: {
        location: "Белград, Площадь Славия",
        text: "Автобус трясся и петлял. Выйдя на Славии, ты обнаружил, что до хостела еще два километра в гору по брусчатке. Но динары в кармане греют душу.",
        choices: [
            { text: "Тащить вещи дальше.", next: "hostel_checkin" }
        ]
    },
    hostel_checkin: {
        location: "Хостел, Дорчол",
        text: "Драган, человек-гора, наливает стопку прозрачной жидкости. 'Живели, брате! Это ракия из сливы моего деда. Пей, с дороги полезно!'.",
        choices: [
            { text: "Живели! (Выпить залпом)", next: "rakija_vibe", effect: { stress: -25, rep: 15 } },
            { text: "Спасибо, я лучше просто воды.", next: "no_rakija", effect: { rep: -5 } },
            { text: "Сразу спросить про 'Белый картон'.", next: "beli_karton_quest" }
        ]
    },
    no_rakija: {
        location: "Хостел, Дорчол",
        text: "Драган слегка разочарованно отодвигает стопку. Он оформляет бумаги без лишних слов, но атмосфера дружелюбия поутихла.",
        choices: [
            { text: "Заселиться и расспросить про аренду квартир.", next: "apartment_hunt" },
            { text: "Лечь спать.", next: "beli_karton_quest", effect: { stress: -10 } }
        ]
    },
    rakija_vibe: {
        location: "Хостел, Дорчол",
        text: "Жидкость обжигает горло. Драган довольно смеется: 'Вот это по-нашему! Слушай, дам тебе пару контактов нормальных владельцев квартир'.",
        choices: [
            { text: "Поблагодарить и начать поиск.", next: "apartment_hunt" }
        ]
    },
    beli_karton_quest: {
        location: "Полиция (MUP), Стари Град",
        text: "В отделении полиции душно. Чиновница сурово смотрит на твой договор: 'Где подпись владельца синей ручкой?'. Бюрократия здесь — это спорт.",
        choices: [
            { text: "Смиренно ждать и объясняться.", next: "legal_status_ok", effect: { stress: 35 } },
            { text: "Уйти и зайти в 'Альта-Банк' по пути.", next: "bank_quest", effect: { stress: 10 } }
        ]
    },
    legal_status_ok: {
        location: "Хостел",
        text: "У тебя есть 'Белый картон'. Теперь ты официально легален на 30 дней. Но без местного счета жизнь — мучение. Попробуешь открыть?",
        choices: [
            { text: "Идти штурмовать банки.", next: "bank_quest" },
            { text: "Сначала найти постоянное жилье.", next: "apartment_hunt" }
        ]
    },
    bank_quest: {
        location: "Белград, Банк",
        text: "В первом банке сказали 'Russian? No'. Во втором попросили залог в 5000 евро. В третьем — справку о работе. Ты на грани срыва. Вдруг видишь маленькое отделение 'Поштанска Штедионица'...",
        choices: [
            { text: "Попробовать удачу там.", next: "bank_success", effect: { stress: 50, rep: 10 } },
            { text: "Бросить это дело. Буду жить на нал.", next: "apartment_hunt", effect: { stress: 30 } }
        ]
    },
    bank_success: {
        location: "Белград, Кафе",
        text: "Чудо! У тебя есть дебетовая карта. Ты чувствуешь себя на 10% сербом. Пора обмыть карту в кафане?",
        choices: [
            { text: "Да! Ищу ближайшую кафану.", next: "kafana_night", effect: { money: -30, stress: -40 } },
            { text: "Нет, нужно срочно искать жилье.", next: "apartment_hunt" }
        ]
    },
    kafana_night: {
        location: "Кафана 'Три Шешира'",
        text: "Живая музыка, шум, дым коромыслом. Ты заказываешь 'чевапи' и пиво. За соседним столом кто-то поет 'О бела чао'. К тебе подсаживается местный и начинает расспрашивать про жизнь.",
        choices: [
            { text: "Рассказать свою историю.", next: "kafana_friend", effect: { rep: 25 } },
            { text: "Просто кивать и наслаждаться музыкой.", next: "apartment_hunt" }
        ]
    },
    kafana_friend: {
        location: "Кафана",
        text: "Местный оказывается риелтором! 'Брате, у меня есть отличная студия на Карабурме, прямо у рынка. Хочешь посмотреть завтра?'.",
        choices: [
            { text: "Да, это знак судьбы!", next: "grandma_drama", effect: { rep: 10 } },
            { text: "Нет, Карабурма — это слишком.", next: "apartment_hunt" }
        ]
    },
    apartment_hunt: {
        location: "Белград, Район Дорчол",
        text: "Цены на аренду кусаются. \n1. Мириево (450€) — далеко, горы. \n2. Врачар (900€) — самый центр. \n3. Карабурма (250€) — комната с бабушкой.",
        choices: [
            { text: "Мириево (450€)", next: "mirijevo_life", effect: { money: -450 } },
            { text: "Врачар (900€)", next: "vracar_life", effect: { money: -900, stress: -15 } },
            { text: "Карабурма (250€)", next: "grandma_drama", effect: { money: -250, stress: 30 } }
        ]
    },
    mirijevo_life: {
        location: "Мириево, Твоя квартира",
        text: "Тут тихо, много зелени и сосед, который каждое утро здоровается 'Добро ютро!'. Но ездить в центр — испытание. Решаешь записаться в школу сербского?",
        choices: [
            { text: "Да, язык — ключ к сердцам. (150€)", next: "language_school", effect: { money: -150, rep: 30 } },
            { text: "Нет, буду учить по фильмам.", next: "job_interview", effect: { stress: 20 } }
        ]
    },
    vracar_life: {
        location: "Врачар, Кофешоп",
        text: "Тут живут все 'наши'. Ты слышишь русскую речь чаще, чем сербскую. В коворкинге ты встречаешь парня, который ищет партнера для проекта.",
        choices: [
            { text: "Заинтересоваться проектом.", next: "startup_path", effect: { stress: 20 } },
            { text: "Просто искать стабильную работу.", next: "job_interview" }
        ]
    },
    language_school: {
        location: "Школа сербского 'Азбука'",
        text: "Падежи — это ад. Но ты уже можешь заказать кофе 'без шечера' и не выглядеть как идиот. Твой преподаватель хвалит твоё произношение.",
        choices: [
            { text: "Продолжать обучение.", next: "job_interview", effect: { rep: 20, stress: -10 } }
        ]
    },
    grandma_drama: {
        location: "Карабурма, Смиляна",
        text: "Бабушка Смиляна кормит тебя сармой и запрещает открывать окна: 'Промая убия!'. Она считает тебя своим внуком. Когда её телевизор ломается, она зовет тебя.",
        choices: [
            { text: "Починить телевизор.", next: "slava_invitation", effect: { rep: 20, stress: -5 } },
            { text: "Сказать, что занят.", next: "ending_back_home", effect: { stress: 40, rep: -20 } }
        ]
    },
    slava_invitation: {
        location: "Карабурма",
        text: "Смиляна приглашает тебя на Славу. Стол ломится от яств. Ты приносишь вино и конфеты. Внук Смиляны, Марко, подмигивает тебе.",
        choices: [
            { text: "Вино и конфеты (35€).", next: "slava_success", effect: { money: -35, rep: 40 } }
        ]
    },
    slava_success: {
        location: "Карабурма",
        text: "После ракии Марко говорит: 'Слушай, ты классный парень. У нас в компании как раз ищут кого-то толкового. Приходи в понедельник'.",
        choices: [
            { text: "Идти на интервью.", next: "job_interview" },
            { text: "Спросить про открытие своей фирмы.", next: "startup_path", effect: { money: -500 } }
        ]
    },
    startup_path: {
        location: "Белград, Бизнес-хаб",
        text: "Твоя фирма открыта! Это было больно (бюрократия, налоги, юристы), но теперь ты — директор. Клиенты из Европы начинают приходить.",
        choices: [
            { text: "Развивать бизнес.", next: "ending_business_mogul", effect: { money: 1500, stress: 50 } }
        ]
    },
    job_interview: {
        location: "Нови Београд",
        text: "Техническое интервью пройдено. Теперь 'Culture fit'. Тебя спрашивают: 'За кого болеешь — Партизан или Звезда?'.",
        choices: [
            { text: "Партизан (гробље)!", next: "job_offer", effect: { rep: 20 } },
            { text: "Црвена Звезда (делије)!", next: "job_offer", effect: { rep: 20 } },
            { text: "Я за красивый футбол.", next: "job_struggle_cultural", effect: { stress: 20 } }
        ]
    },
    job_struggle_cultural: {
        location: "Офис",
        text: "Тебя сочли 'слишком серьезным'. Ты решаешь жить на виза-ранах. Чемодан, вокзал, Босния.",
        choices: [
            { text: "Ехать в Боснию.", next: "viza_ran_bosnia" },
            { text: "Всё! Уезжаю в Черногорию.", next: "ending_montenegro_escape" }
        ]
    },
    job_offer: {
        location: "Белград, Офис",
        text: "Оффер на руках! Тебя хлопают по плечу, зовут пить кафу. Жизнь в новой стране обретает смысл.",
        choices: [
            { text: "Подаваться на боравак через работу.", next: "boravak_process_local" }
        ]
    },
    boravak_process_local: {
        location: "Полиция (MUP)",
        text: "С документами от фирмы всё проходит без сучка и задоринки. Чиновница даже улыбнулась тебе.",
        choices: [
            { text: "Забрать ВНЖ.", next: "ending_local_legend" }
        ]
    },
    viza_ran_bosnia: {
        location: "Граница Сербии и Боснии",
        text: "Ты делаешь это уже в седьмой раз. Бесконечный цикл штампов. Ты не здесь и не там. Ты — призрак системы.",
        choices: [
            { text: "Смириться с участью.", next: "ending_eternal_nomad" }
        ]
    },

    // --- ENDINGS ---

    ending_local_legend: {
        location: "Белград, Калемегдан",
        text: "ФИНАЛ 1: МЕСТНАЯ ЛЕГЕНДА. \n\nТы сидишь в кафане, здороваешься со всеми за руку, обсуждаешь политику на сербском и пьешь 'домачу' без сахара. Ты больше не чужой. Белград принял тебя как своего. Это дом.",
        choices: [{ text: "Начать новую жизнь", next: "start" }]
    },
    ending_business_mogul: {
        location: "Нови Београд, Пентхаус",
        text: "ФИНАЛ 2: БАЛКАНСКИЙ МАГНАТ. \n\nТвой бизнес — один из самых успешных среди экспатов. Ты ездишь на встречи в Вену и Прагу, но вечером всегда возвращаешься в Белград за порцией плескавицы. Ты победил этот город.",
        choices: [{ text: "Начать новую жизнь", next: "start" }]
    },
    ending_eternal_nomad: {
        location: "Автобус в никуда",
        text: "ФИНАЛ 3: ВЕЧНЫЙ ПУТНИК. \n\nТвой паспорт закончился от штампов. Ты так и не пустил корни. Ты знаешь все расписания автобусов до Сараево, но не знаешь имени своего соседа. Ты вечный гость.",
        choices: [{ text: "Начать новую жизнь", next: "start" }]
    },
    ending_montenegro_escape: {
        location: "Будва, Старый город",
        text: "ФИНАЛ 4: ПОБЕГ К МОРЮ. \n\nБелград был слишком шумным. Теперь ты работаешь у моря, засыпаешь под шум прибоя и забыл, что такое метро. Морской воздух лечит все московские раны.",
        choices: [{ text: "Начать новую жизнь", next: "start" }]
    },
    ending_back_home: {
        location: "Москва, Светофор",
        text: "ФИНАЛ 5: ПУТЬ ДОМОЙ. \n\nСербия оказалась слишком странной, слишком медленной, слишком другой. Ты вернулся. Глядя на знакомые высотки, ты понимаешь: это был крутой опыт, но твое сердце бьется в ритме Москвы.",
        choices: [{ text: "Начать новую жизнь", next: "start" }]
    }
};

class ShaderEffects {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '5';
        this.canvas.style.opacity = '0.5';
        document.getElementById('game-container').appendChild(this.canvas);

        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = this.canvas.offsetWidth * window.devicePixelRatio;
        this.canvas.height = this.canvas.offsetHeight * window.devicePixelRatio;
    }

    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    draw() {
        const w = this.canvas.width;
        const h = this.canvas.height;
        this.ctx.clearRect(0, 0, w, h);

        // 1. Film Grain Effect
        const imageData = this.ctx.createImageData(w, h);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            const val = Math.random() * 255;
            data[i] = val;
            data[i + 1] = val;
            data[i + 2] = val;
            data[i + 3] = 15; // Very subtle
        }
        this.ctx.putImageData(imageData, 0, 0);

        // 2. Scanlines / Vignette Glow
        const gradient = this.ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(1, 'rgba(0,0,0,0.4)');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, w, h);
    }

    flash(color = 'rgba(255, 255, 255, 0.3)') {
        const overlay = document.getElementById('overlay-effects');
        overlay.style.backgroundColor = color;
        setTimeout(() => {
            overlay.style.backgroundColor = 'transparent';
        }, 100);
    }
}

class Game {
    constructor() {
        this.money = 5000;
        this.stress = 0;
        this.status = "Турист";
        this.currentState = 'start';
        this.reputation = 0;
        this.shaders = new ShaderEffects();
        this.typingTimeout = null;
        this.typingSessionId = 0;
        this.init();
    }

    init() {
        this.updateUI();
        this.renderScene('start');
        document.getElementById('inventory-btn').onclick = () => {
            alert(`📜 ТВОЙ СТАТУС:\n\n📍 Этап: ${this.status}\n💶 Бюджет: ${this.money}€\n🤯 Стресс: ${this.stress}%\n🤝 Связи: ${this.reputation}\n\nИнвентарь: Паспорт, Белый картон, Храбрость.`);
        };
    }

    updateUI() {
        document.getElementById('stat-money').innerText = `${this.money} €`;
        document.getElementById('stat-stress').innerText = `${this.stress}%`;
        document.getElementById('stat-status').innerText = this.status;
        const overlay = document.getElementById('overlay-effects');
        overlay.style.boxShadow = `inset 0 0 ${this.stress * 3}px rgba(230, 0, 0, ${this.stress / 120})`;
    }

    renderScene(stateKey) {
        const scene = storyData[stateKey];
        if (!scene) return;

        if ("vibrate" in navigator) {
            navigator.vibrate(20);
        }

        const textArea = document.getElementById('text-area');
        const choicesArea = document.getElementById('choices-area');
        const locationLabel = document.getElementById('location-label');
        const container = document.getElementById('game-container');

        locationLabel.innerText = scene.location;
        if (scene.image) {
            container.style.backgroundImage = `url('${scene.image}')`;
        }

        const panel = document.getElementById('story-panel');
        panel.style.animation = 'none';
        panel.offsetHeight;
        panel.style.animation = 'slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1)';

        if (this.typingTimeout) clearTimeout(this.typingTimeout);
        this.typingSessionId++;
        const currentSessionId = this.typingSessionId;

        textArea.innerHTML = "";
        let i = 0;
        const typeWriter = () => {
            if (currentSessionId !== this.typingSessionId) return;

            if (i < scene.text.length) {
                textArea.innerHTML += scene.text.charAt(i);
                i++;
                this.typingTimeout = setTimeout(typeWriter, 5);
            } else {
                this.typingTimeout = null;
            }
        };
        typeWriter();

        choicesArea.innerHTML = "";
        scene.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.innerText = choice.text;
            btn.onclick = () => {
                this.shaders.flash('rgba(243, 156, 18, 0.1)');
                if ("vibrate" in navigator) {
                    navigator.vibrate([15, 40, 20]);
                }
                this.handleChoice(choice);
            };
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
            this.triggerGameOver("Бюджет исчерпан. Без денег этот город не прощает ошибок. Ты возвращаешься ни с чем.");
            return;
        }

        if (this.stress >= 100) {
            this.triggerGameOver("Нервный срыв. Ты больше не можешь видеть эти очереди и слышать этот язык. Самолет на Москву через два часа.");
            return;
        }

        this.updateUI();
        this.renderScene(choice.next);
    }

    triggerGameOver(reason) {
        const textArea = document.getElementById('text-area');
        const choicesArea = document.getElementById('choices-area');
        textArea.innerHTML = `<b style="color: #ff4757; font-size: 1.5rem;">ИСТОРИЯ ПРЕРВАНА</b><br><br>${reason}`;
        choicesArea.innerHTML = "";
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = "Попробовать снова";
        btn.style.textAlign = "center";
        btn.onclick = () => window.location.reload();
        choicesArea.appendChild(btn);
    }
}

window.onload = () => new Game();
